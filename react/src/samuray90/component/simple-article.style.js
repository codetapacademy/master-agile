import styled from "styled-components";
import Background from "../asset/Image.png";
import Avatar from "../asset/nenea.png";
import Bookmark from "../asset/ic_bookmark.png";
import Adoua from "../asset/Avatar.png";
import SecondOne from "../asset/backOne.png";
import Spoky from "../asset/ic_bookmark.png";


export const StyledBackGround = styled.div`
    display:grid;
    background-position: center;
    grid-template-columns: 40px 1fr 40px;
    grid-template-rows: 1fr 15px 15px;
    grid-gap: 10px;
    width: 255px;
    height: 155px;
    padding: 20px;
    background-image:url(${SecondOne});
`

export const StyledPicture = styled.div`
    display:grid;
    grid-template-columns: 40px 1fr 40px;
    grid-template-rows: 1fr 15px 15px;
    background-image:url(${Background});
    background-position: center;
    background-size: cover;
    grid-gap: 10px;
    width: 255px;
    height: 155px;
    padding: 20px;
`

export const StyleSecondTile = styled.div`
    display:grid;
    grid-column: 1/-1;
    color: white;
    font-weight: medium;
    font-size: 17px;
    font-family: 'Roboto';
`
export const StyledElSecundo = styled.div`
    grid-column:2/3;
    grid-row: 3/4;
    font-weight:medium;
    color:white;
    font-size:13px;
    font-family: 'Roboto';
`

export const StyledSecondBlock = styled.div`
    display: block;
    flex-direction: column;
    margin: 10px;
    padding: 5px;
`

export const StyledBlock = styled.div`
    display:flex;
    flex-direction: column;
    margin: 10px;
    padding: 5px;
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
export const StyledEdad = styled.div`
    grid-column: 2/3;
    grid-row: 4/5;
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

export const StyledSpok = styled.div`
    grid-row:3/4;
    grid-column: 3/4;
    background-image:url(${Spoky});
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
export const StyledSecondPicture = styled.div`
    width: 40px;
    height: 40px;
    background-size: cover;
    background-image:url(${Adoua});
    display:grid;
    grid-row: 3/4;
    grid-column: 1/2;
`