import styled from "styled-components"
import BlockIcon from "./asset/ic_bookmark.png"

export const ImageSubtitle = styled.p`
    color: white;
    grid-row: 2/3;
    grid-column: 1/-1;
    color: white;
    margin: 0;
    font-size: 14px;
    font-family: Roboto;
`

export const ImageAvatar = styled.div`
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: 5px;
`

export const ImageContainer =styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    grid-template-rows: 1fr 20px 20px 20px;
    grid-gap: 10px;
    padding: 30px;
    margin-bottom: 1px;
    margin: 10px 0;
    background-size: cover;
    background-position: center;
    width: 540px;
`

export const StyledMainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const StyledImagesTitle = styled.h1`
    color: white;
    grid-column:1/-1;
    grid-row: 1/2;
    align-self: end;
    margin: 0;
    margin-bottom: 1px;
    font-size: 16px;
    font-family: Roboto;
`

export const StyledImageIcon = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${BlockIcon});
    opacity: 0.3;
    grid-row: 3/4;
    grid-column: 3/4;
    margin-top: 8px;
`
export const StyledImageName = styled.div`
    grid-row: 3/4;
    grid-column: 2/3;
    color: white;
    font-size: 13px;
    font-family: Roboto;
    padding-top: 7px;
    margin-left: 5px;
`

export const StyledImageDate = styled.div`
    grid-row: 4/5;
    grid-column: 2/3;
    color: white;
    font-size: 12px;
    opacity: 0.6;
    font-family: Roboto;
    margin-left: 5px;
`
