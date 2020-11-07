import React from "react";
import {slugify} from "../../utils/slugify";

const Tags = ({ tagString }) => {
    let tagsArr = tagString.split(",");
    return (
        <div className="tags-area">
            {tagsArr.map(tag => (
                <a key={`${tag}`} href={`/trails/${slugify(tag)}`}><h6>{tag.replace(/-/gi, ' ')}</h6></a>
            ))}
        </div>
    );
};

export default Tags;
