import React from "react";
import { BlogBlock } from "./component/blog-block/blog-blocks.component";
import { StyledWrapper } from "./bogdan-negura.style";

const BogdanNegura = () => {
  return (
    <StyledWrapper>
      <h1 style={{ width: "100%", paddingLeft: "20px" }}>Blog Blocks </h1>
      <BlogBlock />
    </StyledWrapper>
  );
};

export { BogdanNegura };
