import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MarianZbulea } from "src/marianzburlea/marianzburlea.component";
import { CornelCristianFilip } from "src/psyhedeliq/cornel-cristian-filip.component";
const appRoutes: Routes = [
  { path: "marianzburlea", component: MarianZbulea },
  { path: "cornel-cristian-filip", component: CornelCristianFilip },
];
@NgModule({
  declarations: [
    AppComponent,
    // Add your main component, the one with your solutions here
    MarianZbulea,
    CornelCristianFilip,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
