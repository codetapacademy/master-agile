import React from "react";
import { BlockOne } from "../block-one/block-one.component";
import { BlockTwo } from "../block-two/block-two.component";


const BlockBlogs = () => {
    return (
        <div>
            <h1>Block Blogs</h1>
            <BlockOne/>
            <BlockTwo/>
        </div>
    )
}

export { BlockBlogs}