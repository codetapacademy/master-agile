import React from "react";
import blogDetail from "../../data/blog-block.json";
import { StyledBlockOneImage, StyledBlockAvatarOne } from "./block-one.style";
import {
  StyledBlogTitle,
  StyledBlogSubtitle,
  StyledBlogName,
  StyledBlogDate,
  StyledBlogIcon,
} from "../blog-block/blog-blocks.style";

const BlockOne = () => {
  const { title, subtitle, name, date } = blogDetail[0];
  return (
    <StyledBlockOneImage>
      <StyledBlogTitle>{title}</StyledBlogTitle>
      <StyledBlogSubtitle>{subtitle}</StyledBlogSubtitle>
      <StyledBlockAvatarOne></StyledBlockAvatarOne>
      <StyledBlogName>{name}</StyledBlogName>
      <StyledBlogDate>{date}</StyledBlogDate>
      <StyledBlogIcon></StyledBlogIcon>
    </StyledBlockOneImage>
  );
};

export { BlockOne };
