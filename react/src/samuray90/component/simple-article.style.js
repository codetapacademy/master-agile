import styled from "styled-components";
import Background from "../asset/Image.png";
import Avatar from "../asset/nenea.png";
import Bookmark from "../asset/ic_bookmark.png";

export const StyledSecondBlock = styled.div`
     display:grid;
    grid-template-columns: 40px 1fr 40px;
    grid-template-rows: 1fr 15px 15px;
    background-color: blue;
    background-position: center;
    background-size: cover;
    grid-gap: 10px;
    width: 255px;
    height: 155px;
    padding: 20px;
`

export const StyledBlock = styled.div`
    display:flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    background-color: green;
    border-color: solid blue;
    border: 21px solid pink;
`
export const StyledPicture = styled.div`
    display:grid;
    grid-template-columns: 40px 1fr 40px;
    grid-template-rows: 1fr 15px 15px;
    background-color: blue;
    background-image:url(${Background});
    background-position: center;
    background-size: cover;
    grid-gap: 10px;
    width: 255px;
    height: 155px;
    padding: 20px;
`

export const StyledTitle = styled.div`
    color: white;
    font-weight: medium;
    font-size: 17px;
    grid-column: 1/-1;
    font-family: 'Roboto';
`
export const StyledMiniTitle = styled.div`
    grid-column:2/3;
    grid-row: 2/3;
    font-weight:medium;
    color:white;
    font-size:13px;
    font-family: 'Roboto';
`

export const StyledMiniDate = styled.div`
    grid-column:2/3;
    grid-row:3/4;
    color: white;
    opacity: 60%;
    font-weight:medium;
    font-size:12px;
    font-family: 'Roboto';
`

export const StyledMiniBookmark = styled.div`
    grid-row:3/4;
    grid-column:3/4;
    background-image:url(${Bookmark});
    background-position: center;
    margin-top: -7px;
    opacity: 60%;
`

export const StyledImageAvatar = styled.div`
    background-size: cover;
    background-image: url(${Avatar});
    width: 40px;
    height: 40px;
`
