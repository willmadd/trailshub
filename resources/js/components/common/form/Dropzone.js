import React from "react";
import Dropzone from "react-dropzone";

const DropBox = ({handleGpxFile}) => {

    const prepareGpxFile = (acceptedFiles) => {
        acceptedFiles.forEach(file => {
            var fr = new FileReader();
            fr.onload = function(e) {
                handleGpxFile(e.target.result)
            };
            fr.readAsText(file);
        });
    };

    return (
        <Dropzone onDrop={acceptedFiles => prepareGpxFile(acceptedFiles)}>
            {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                    <section >
                        <div className={'button'} {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p>Drop GPX file here ...</p>
                            ) : (
                                <p>Upload a GPX file</p>
                            )}
                        </div>
                    </section>
                );
            }}
        </Dropzone>
    );
};

export default DropBox;
