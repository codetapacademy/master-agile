import styled from "styled-components" 

export const StyledMainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const StyledImagesContainer = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 30px;
    grid-template-rows: 1fr 46px 20px 20px;
    grid-gap: 10px;
    padding: 20px;
    margin-bottom: 1px;
    margin: 10px 0;
    background-size: cover;
    background-position: center;
    background-image: url();
`

export const StyledImagesTitle = styled.h1`
    color: #FFFFFF;
    grid-columns: 2/-1;
    align-self: center;
    padding-bottom: 1px;
`

export const StyledImagesSubtitle = styled.p`
    grid-colums: 2/-1;
    // grid-row: 2/3;
    font-size: 14px;
`