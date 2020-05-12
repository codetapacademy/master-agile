import styled from "styled-components";
import Background from "../../asset/background.png";
import Bookmark from "../../asset/ic_bookmark.png";
import Bookmark2 from "../../asset/bookmark.png";
import Avatar from "../../asset/Avatar3.png";
import Avatar2 from "../../asset/Avatar4.png";


export const StyledCardWrapper = styled.div`
  display: flex;
  padding: 40px;
  background-color: aqua;
  align-self: flex-start;
`

export const StyledArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: 50px 15px 15px;
  grid-gap: 10px;
  margin: 10px;
  padding: 20px;
  width: 255px;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  box-shadow : 3px 3px 5px 2px grey;
`

export const StyledArticlesTitle = styled.p`
  grid-column: 1/-1;
  font-size: 16px;
  align-self: center;
  margin-top: 6px;
  color: #FFFFFF;
`
export const StyledArticlesName = styled.div`
  grid-column: 2/3;
  font-size: 13px;
  margin-left: 5px;
  margin-top: 3px;
  color: #FFFFFF;
`

export const StyledArticlesDate = styled.div`
  grid-row: 3/4;
  grid-column: 2/3;
  font-size: 12px;
  margin-left: 5px;
  color: #FFFFFF;
  opacity: 0.6;
`

export const StyledArticlesAvatar = styled.div`
  background-position: center;
  grid-column: 1/2;
  grid-row: 2/4;
  height: 40px;
  width: 40px;
  background-image: url(${Avatar});
`

export const StyledArticlesIcon = styled.div`
  grid-column: 3/4;
  grid-row: 2/4;
  background-position: center;
  width: 30px;
  height: 30px;
  color: #FFFFFF;
  opacity: 0.3;
  margin-top: 5px;
  background-image: url(${Bookmark});
`

export const StyledArticlesWrapper2 = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: 50px 15px 15px;
  grid-gap: 10px;
  margin: 10px;
  padding: 20px;
  width: 255px;
  background-color: #FFFFFF;
  box-shadow : 3px 3px 5px 2px grey;
`

export const StyledArticlesTitle2 = styled.p`
  grid-column: 1/-1;
  font-size: 16px;
  align-self: center;
  margin-top: 6px;
  color: #808080;
`

export const StyledArticlesName2 = styled.div`
  grid-column: 2/3;
  font-size: 13px;
  margin-left: 5px;
  margin-top: 3px;
  color: #808080;
  margin-top: 3px;
`

export const StyledArticlesDate2 = styled.div`
  grid-row: 3/4;
  grid-column: 2/3;
  font-size: 12px;
  margin-left: 5px;
  color: #B3B3B3;
`

export const StyledArticlesAvatar2 = styled.div`
background-position: center;
grid-column: 1/2;
grid-row: 2/4;
height: 40px;
width: 40px;
background-image: url(${Avatar2});
`

export const StyledArticlesIcon2 = styled.div`
  grid-column: 3/4;
  grid-row: 2/4;
  background-position: center;
  width: 30px;
  height: 30px;
  color: #D8D8D8;
  margin-top: 5px;
  background-image: url(${Bookmark2});
`