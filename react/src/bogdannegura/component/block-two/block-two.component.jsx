import React from "react";
import blogDetail from "../../data/blog-block.json";
import { StyledBlockTwoImage, StyledBlockAvatarTwo } from "./block-two.style";
import {
  StyledBlogTitle,
  StyledBlogSubtitle,
  StyledBlogName,
  StyledBlogDate,
  StyledBlogIcon,
} from "../blog-block/blog-blocks.style";

const BlockTwo = () => {
  const { title, subtitle, name, date } = blogDetail[1];

  return (
    <StyledBlockTwoImage>
      <StyledBlogTitle>{title}</StyledBlogTitle>
      <StyledBlogSubtitle>{subtitle}</StyledBlogSubtitle>
      <StyledBlockAvatarTwo></StyledBlockAvatarTwo>
      <StyledBlogName>{name}</StyledBlogName>
      <StyledBlogDate>{date}</StyledBlogDate>
      <StyledBlogIcon></StyledBlogIcon>
    </StyledBlockTwoImage>
  );
};

export { BlockTwo };
