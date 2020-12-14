import React from 'react';


const DownloadGPX = ({file,title}) => {
    
    
    const downloadGpxFile = () => {
        const element = document.createElement("a");
        const preparedFile = new Blob([file], { type: "text/plain" });
        element.href = URL.createObjectURL(preparedFile);
        element.download = `thetrailmap.com_${title || `gpxfile`}.gpx`;
        document.body.appendChild(element);
        element.click();
    };


    return (
        <div className="download-area">
            Need to get the gpx file fetched from laravel once clicked
            <button onClick={downloadGpxFile}>Download GPX File</button>
        </div>
    );
};

export default DownloadGPX;