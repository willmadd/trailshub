import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const TrailText = ({text}) => {
    return (
        <div className="trail-text">
            {decodeURIComponent(ReactHtmlParser(text) )}
        </div>
    );
};

export default TrailText;