import styled from "styled-components";
import Background from "../asset/Image.png"
import Avatar from "../asset/nenea.png"

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
    color: yellow;
    font-weight: 16px;
    grid-column: 1/-1;
`
export const StyledImageAvatar = styled.div`
    background-size: cover;
    background-image: url(${Avatar});
    width: 40px;
    height: 40px;
`
