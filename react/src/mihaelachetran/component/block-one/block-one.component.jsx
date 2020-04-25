import React from "react";

import { StyledImagesTitle, StyledMainBox, StyledImagesContainer, StyledImagesSubtitle, StyledImageAvatar, StyledImageDate, StyledImageName, StyledImageIcon, } from "./block-one.style.js";


const BlockOne = () => {
    return (
        <>
        <StyledMainBox>
          <div className="images-container"></div>
          <StyledImagesContainer>
            {/* <StyledImage src={require("../assets/images/Image.png")} /> */}
            <img src="./miha.jpg" alt="Miha"/>
            <StyledImagesTitle>Effective Forms Advertising Internet Web Site</StyledImagesTitle>
            <StyledImagesSubtitle>Comment On The Importance Of Human Life</StyledImagesSubtitle>
              <StyledImageAvatar><img src="./Avatar.png" alt=""/></StyledImageAvatar>
                <StyledImageName>Lora Stevenson</StyledImageName>
                <StyledImageDate>Aug 15</StyledImageDate>
              <StyledImageIcon><img src="" alt=""/></StyledImageIcon>
          </StyledImagesContainer>
        </StyledMainBox>
        </>
    )
}
export { BlockOne };
