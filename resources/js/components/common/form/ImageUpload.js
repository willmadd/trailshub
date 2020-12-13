import React from "react";
import ImageUploading from "react-images-uploading";
import "./imageupload.scss";
import { __ } from "../../../translations/translator";
// import Compress from "react-image-file-resizer";
const Compress = require("compress.js");
const compress = new Compress();
import resizebase64 from "resize-base64";

const ImageUpload = ({ onImageChange, images }) => {
    const maxNumber = 24;

    

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onImageChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            className={"drag-area"}
                        >
                            {`${__("Click or Drop here")}`}
                        </button>
                        <div className={"image-preview-area"}>
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img
                                        src={image["data_url"] || image}
                                        alt=""
                                        width="100"
                                    />
                                    <div className="image-item__btn-wrapper">
                                        {/* <button style={{display:"none"}} onClick={() => onImageUpdate(index)}>Update</button> */}
                                        <button
                                            className={"remove-button"}
                                            onClick={() => onImageRemove(index)}
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={onImageRemoveAll}
                            className={"remove-images-button"}
                        >
                            Remove all images
                        </button>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};

export default ImageUpload;
