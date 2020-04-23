import styled from "styled-components" 


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
    background-color:turquoise;
    width: 540px;
    height: 330px;
    background-image: url(../Image.png);
`

export const StyledImagesTitle = styled.div`
    color: black;
    grid-column:2/4;
    // grid-row: 1/1;
    color: white;
    // margin-bottom: 1px;
    align-self: end;
`
export const StyledImagesSubtitle = styled.div`
    color: black;
    grid-row: 2/3;
    grid-column: 2/4;
    color: white;
    // margin-top: 1px;
`

export const StyledImageAvatar = styled.div`
    // background-color: black;
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
    colour: black;
`

