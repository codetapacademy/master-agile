import React from "react";
import { StyledImagesContainer, StyledImagesSubtitle, StyledImageAvatar } from "./block-one.style.js";
import { StyledMainBox, StyledImagesTitle, StyledImageIcon, StyledImageName, StyledImageDate } from "../../mihaela-chetran.style.js";


const BlockOne = () => {
    return (
        <>
          <StyledMainBox>
            <StyledImagesContainer>
              <StyledImagesTitle>Effective Forms Advertising Internet Web Site</StyledImagesTitle>
              <StyledImagesSubtitle>Comment On The Importance Of Human Life</StyledImagesSubtitle>
              <StyledImageAvatar></StyledImageAvatar>
              <StyledImageName>Lora Stevenson</StyledImageName>
              <StyledImageDate>Aug 15</StyledImageDate>
              <StyledImageIcon></StyledImageIcon>
            </StyledImagesContainer>
          </StyledMainBox>
        </>
    )
}
export { BlockOne };
