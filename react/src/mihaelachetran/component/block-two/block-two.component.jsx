import React from "react";
import { StyledImagesContainer, StyledImagesSubtitle, StyledImageAvatar } from "../block-two/block-two.style";
import { StyledMainBox, StyledImagesTitle, StyledImageIcon, StyledImageName, StyledImageDate } from "../../mihaela-chetran.style";

const BlockTwo = () => {
    return (
        <>
          <StyledMainBox>
            <StyledImagesContainer>
              <StyledImagesTitle>Comment On The Importance Of Human Life</StyledImagesTitle>
              <StyledImagesSubtitle>Dude You Re Getting A Telescope</StyledImagesSubtitle>
              <StyledImageAvatar></StyledImageAvatar>
              <StyledImageName>Ivan Jimenez</StyledImageName>
              <StyledImageDate>May 18</StyledImageDate>
              <StyledImageIcon></StyledImageIcon>
            </StyledImagesContainer>
          </StyledMainBox>
        </>
    )
}
export { BlockTwo };
