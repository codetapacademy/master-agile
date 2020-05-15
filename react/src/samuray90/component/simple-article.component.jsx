import React from "react";
import { StyledBlock, StyledPicture, StyledTitle, StyledImageAvatar, StyledMiniTitle, StyledMiniDate, StyledMiniBookmark, StyledSecondBlock } from "./simple-article.style";

const SecondArticle = () => {
  return (
    <>
      <StyledSecondBlock>
      </StyledSecondBlock>
    </>
  )
}

const SimpleArticle = () => {
  return (
    <>
      <StyledBlock>
        <StyledPicture>
          <StyledTitle> The Idea Of God Is Not
          Henceforth Relevant </StyledTitle>
          <StyledMiniTitle>Elmer Adkins</StyledMiniTitle>
          <StyledMiniDate>June 22</StyledMiniDate>
          <StyledMiniBookmark></StyledMiniBookmark>
          <StyledImageAvatar></StyledImageAvatar>
        </StyledPicture>
      </StyledBlock>
    </>
  )
}


export { SimpleArticle }
export { SecondArticle }