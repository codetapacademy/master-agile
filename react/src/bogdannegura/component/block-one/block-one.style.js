import styled from "styled-components";
import BlogAvatar1 from "../../asset/avatar.png";
import BlockOneImage from "../../asset/image.png";
import { BlockContainer, BlogAvatar } from "../blog-block/blog-blocks.style";

export const StyledBlockOneImage = styled(BlockContainer)`
  background-image: url(${BlockOneImage});
  height: 330px;
  grid-template-rows: 185px 30px 45px 20px 20px;
  margin-bottom: 20px;
`;

export const StyledBlockAvatarOne = styled(BlogAvatar)`
  background-image: url(${BlogAvatar1});
`;
