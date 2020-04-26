import styled from "styled-components" 
import BackgroundOne from "../../asset/Image.png"
import BlockOneAvatar from "../../asset/Avatar.png"
import BlockOneIcon from "../../asset/ic_bookmark.png"


export const StyledMainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const StyledImagesContainer = styled.div`
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
    height: 330px;
    background-image: url(${BackgroundOne});
`
export const StyledDivImage = styled.div`
    grid-column: 1/-1;
    grid-row: 1/5; 
`

export const StyledImagesTitle = styled.h1`
    color: white;
    grid-column:1/-1;
    grid-row: 1/2;
    align-self: end;
    margin: 0;
    margin-bottom: 1px;
    font-size: 16px;
`
export const StyledImagesSubtitle = styled.p`
    color: white;
    grid-row: 2/3;
    grid-column: 1/-1;
    color: white;
    // margin-top: 1px;
    margin: 0;
`

export const StyledImageAvatar = styled.div`
    background-size: cover;
    background-position: center;
    background-image: url(${BlockOneAvatar});
    border-radius: 50%;
    width: 40px;
    height: 40px;
`

export const StyledImageName = styled.div`
    grid-row: 3/4;
    grid-column: 2/3;
    color: white;
`

export const StyledImageDate = styled.div`
    grid-row: 4/5;
    grid-column: 2/3;
    color: white;
`

export const StyledImageIcon = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${BlockOneIcon});
    opacity: 0.3;
`

