import styled from "styled-components";
import Background from "../../asset/background.png"

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
`

export const StyledArticlesIcon = styled.div`
  grid-column: 3/4;
  grid-row: 2/4;
  background-position: center;
  width: 30px;
  height: 30px;
  color: #FFFFFF;
  opacity: 0.3;
`