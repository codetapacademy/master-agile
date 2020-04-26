import React from "react";
import { BlockOne } from "./component/block-one/block-one.component";
import { BlockTwo } from "./component/block-two/block-two.component";
import { StyledBogdan } from "./mihaela-chetran.style";

const MihaelaChetran = () => {
    return (
        <>
            <BlockOne/>
            <BlockTwo/>
            <div className="image-container">
                <h1>img</h1>
                <StyledBogdan src="./assets/Image.png" alt=""/>
            </div>
        </>
    )
}
export { MihaelaChetran };
