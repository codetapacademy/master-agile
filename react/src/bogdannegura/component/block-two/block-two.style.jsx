import styled from "styled-components";
import BlockTwoImage from "../../asset/image2.png";
import BlogAvatar2 from "../../asset/avatar2.png";
import { BlockContainer, BlogAvatar } from "../blog-block/blog-blocks.style";

export const StyledBlockTwoImage = styled(BlockContainer)`
  background-image: url(${BlockTwoImage});
  grid-template-rows: 10px 30px 45px 20px 20px;
  height: 150px;
`;

export const StyledBlockAvatarTwo = styled(BlogAvatar)`
  background-image: url(${BlogAvatar2});
`;
