import styled from "styled-components" 
import BackgroundOne from "../../asset/Image.png"
import BlockOneAvatar from "../../asset/Avatar.png"
import { ImageContainer, ImageAvatar, ImageSubtitle } from "../../mihaela-chetran.style"


export const StyledImagesContainer = styled(ImageContainer)`
    height: 330px;
    background-image: url(${BackgroundOne});
`

export const StyledImagesSubtitle = styled(ImageSubtitle)`
    opacity: 0.6;
`

export const StyledImageAvatar = styled(ImageAvatar)`
    background-image: url(${BlockOneAvatar});
`
