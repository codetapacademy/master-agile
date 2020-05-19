import styled from "styled-components";
import BlogIcon from "../../asset/icon.png";

export const BlockContainer = styled.div`
  background-size: cover;
  background-position: center;
  width: 540px;
  height: 330px;
  padding: 30px 30px 10px;
  display: grid;
  grid-template-columns: 40px 1fr 1fr 30px;
  grid-column-gap: 15px;
  font-family: "Roboto", sans-serif;
`;

export const StyledBlogTitle = styled.div`
  grid-column: 1/-1;
  grid-row: 2/3;
  font-size: 16px;
  color: white;
`;

export const StyledBlogSubtitle = styled.div`
  grid-column: 1/-1;
  grid-row: 3/4;
  padding-bottom: 25px;
  font-size: 14px;
  color: white;
  opacity: 0.6;
`;

export const BlogAvatar = styled.div`
  grid-row: 4/6;
  grid-column: 1/2;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const StyledBlogName = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;
  font-size: 13px;
  color: white;
`;

export const StyledBlogDate = styled.div`
  grid-column: 2/3;
  grid-row: 5/6;
  font-size: 12px;
  color: white;
  opacity: 0.6;
`;

export const StyledBlogIcon = styled.div`
  background-image: url(${BlogIcon});
  grid-row: 4/6;
  grid-column: 4/5;
  height: 30px;
  width: 30px;
  opacity: 0.6;
`;
