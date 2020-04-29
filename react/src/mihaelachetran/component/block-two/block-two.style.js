import styled from "styled-components"
import BackgroundTwo from "../../asset/Image2.png"
import BlockTwoAvatar from "../../asset/Avatar2.png"
import { ImageContainer, ImageAvatar, ImageSubtitle, } from "../../mihaela-chetran.style"


export const StyledImagesContainer = styled(ImageContainer)`
    height: 150px;
    background-image: url(${BackgroundTwo});
`


export const StyledImagesSubtitle = styled(ImageSubtitle)`
    opacity: 0.3;
`

export const StyledImageAvatar = styled(ImageAvatar)`
    background-image: url(${BlockTwoAvatar});
`
