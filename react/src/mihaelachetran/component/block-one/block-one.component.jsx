import React from "react";
// import Image from "../Image.png";

import { StyledImagesTitle, StyledMainBox, StyledImagesContainer, StyledImagesSubtitle, StyledImageAvatar, StyledImageDate, StyledImageName, StyledImageIcon} from "./block-one.style.js";

const BlockOne = () => {
    return (
        <>
        <StyledMainBox>
          <StyledImagesContainer>
            <img src="{Image}" alt=""/>
            <StyledImagesTitle>Effective Forms Advertising Internet Web Site</StyledImagesTitle>
            <StyledImagesSubtitle>Comment On The Importance Of Human Life</StyledImagesSubtitle>
              <StyledImageAvatar><img src="{avatar}" alt=""/></StyledImageAvatar>
                <StyledImageName>Lora Stevenson</StyledImageName>
                <StyledImageDate>Aug 15</StyledImageDate>
              <StyledImageIcon><img src="" alt=""/></StyledImageIcon>
          </StyledImagesContainer>
        </StyledMainBox>
        </>
    )
}
export { BlockOne };
