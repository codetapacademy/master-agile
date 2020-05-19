import React from "react";
import { StyledBlock, StyledPicture, StyledTitle, StyledImageAvatar, StyledMiniTitle, StyledMiniDate, StyledMiniBookmark, StyledSecondBlock, StyledBackGround, StyleSecondTile, StyledSecondPicture, StyledElSecundo, StyledEdad, StyledSpok } from "./simple-article.style";

const SecondArticle = () => {
  return (
    <>
      <StyledSecondBlock>
        <StyledBackGround>
          <StyleSecondTile>Effective Forms Advertising 
          Internet Web Site</StyleSecondTile>
          <StyledSecondPicture></StyledSecondPicture>
          <StyledElSecundo>Randall Erickson</StyledElSecundo>
          <StyledEdad>Jun 21</StyledEdad>
          <StyledSpok></StyledSpok>
          </StyledBackGround>
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


export { SimpleArticle, SecondArticle }
