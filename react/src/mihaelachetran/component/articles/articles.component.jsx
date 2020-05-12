import React from "react";
import { StyledCardWrapper, StyledArticlesWrapper, StyledArticlesTitle, StyledArticlesName, StyledArticlesDate, StyledArticlesAvatar, StyledArticlesIcon, StyledArticlesWrapper2, StyledArticlesTitle2, StyledArticlesName2, StyledArticlesDate2, StyledArticlesAvatar2, StyledArticlesIcon2, } from "./articles.style.js";


const Articles = () => {
    return (
        <>
          <StyledCardWrapper>
            <StyledArticlesWrapper>
              <StyledArticlesTitle>The Idea Of God Is Not Henceforth Relevant</StyledArticlesTitle>
              <StyledArticlesName>Elmer Adkins</StyledArticlesName>
              <StyledArticlesDate>Jun 21</StyledArticlesDate>
              <StyledArticlesAvatar></StyledArticlesAvatar>
              <StyledArticlesIcon></StyledArticlesIcon>
            </StyledArticlesWrapper>
            <StyledArticlesWrapper2>
              <StyledArticlesTitle2>Effective Form Advertising Internet Web Site</StyledArticlesTitle2>
              <StyledArticlesName2>Randall Erickson</StyledArticlesName2>
              <StyledArticlesDate2>Jun 21</StyledArticlesDate2>
              <StyledArticlesAvatar2></StyledArticlesAvatar2>
              <StyledArticlesIcon2></StyledArticlesIcon2>
            </StyledArticlesWrapper2>
          </StyledCardWrapper>
        </>
    )
}

export { Articles };