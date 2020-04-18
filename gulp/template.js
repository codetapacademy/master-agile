'use strict';

import fs from 'fs';
import path from 'path';
import mergeStream from 'merge-stream';
import { getJsonData } from './util/util';
import { getStaticFiles } from './util/util';
import gulpConfig from './util/config';

const template = ({
  gulp,
  taskTarget,
  config,
  plugins,
  args,
  baseUrl,
  browserSync
}) => {
  const dir = config.directory;
  const dataPath = path.join(dir.source, dir.data);
  const templateCollection = dir.templateCollection;
  let embedPath;

  gulp.task('template', () => {
    let data = getJsonData({dataPath}) || {};
    let gulpStaticStreamCollection = templateCollection.map(folderName => {
      let staticFilePath = path.join(
        dir.source,
        `_${folderName}`,
        gulpConfig.fileExpression.copy
      );
      let dest = path.join(
        taskTarget,
        folderName
      );

      // Static files
      return getStaticFiles({
        gulp,
        staticFilePath,
        dest,
        config,
        plugins
      });
    });

    let gulpStreamCollection = templateCollection.map(folderName => {
      embedPath = path.join(taskTarget, folderName, '../embed.css');
      let templateData = getJsonData({dataPath: path.join(dir.source, '_' + folderName)}) || {};

      return Object.keys(templateData)
      .filter(value => {
        return !(templateData[value] && templateData[value].config && templateData[value].config.publish === false);
      })
      .map(value => {
        return gulp.src(
          path.join(dir.source, '_' + folderName, 'template.pug')
        )
        // .pipe(plugins.debug())
        // compile pug to html
        .pipe(plugins.pug({
          // compress if in production
          pretty: args.production ? false: true,
          // Make data available to pug
          locals: {
            config,
            // debug: true,
            data,
            template: templateData[value],
            taskTarget,
            embedPath,
            baseUrl
          }
        }))
        .on('error', error => {
          console.error(error);
        })
        // Check if embed.css exists and use inlineSource to inject it
        .pipe(plugins.if(
          fs.existsSync(embedPath),
          plugins.inlineSource({
            rootpath: path.join(__dirname, '..')
          })
        ))
        .pipe(plugins.rename(
          config.render.url.htmlExtensionOn ? `${value}.html` : `${value}/index.html`
        ))
        .pipe(gulp.dest(path.join(taskTarget, folderName)))
        .on('end', browserSync.reload);
      });
    });


    return mergeStream(...gulpStreamCollection, ...gulpStaticStreamCollection);
  });
};

export default template;