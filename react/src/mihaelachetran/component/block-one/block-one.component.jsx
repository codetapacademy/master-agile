import React from "react";

import { StyledImagesTitle, StyledMainBox, StyledImagesContainer, StyledImagesSubtitle, StyledImageAvatar, StyledImageDate, StyledImageName, StyledImageIcon } from "./block-one.style.js";


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
