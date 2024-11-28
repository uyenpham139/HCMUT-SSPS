'use client';  // Add this line at the top of your file
import React, { useRef, useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {

    const inputRef = React.useRef();

    //State variable for tracking the file name
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [progress, setProgress] = React.useState(0);
    const [uploadStatus, setUploadStatus] = React.useState('selected');

    // Handle file change event
    const handleFileChange = (event) => {
        if(event.target.files && event.target.files.length > 0) {
            setleSelectedFile(event.target.files[0]);
        }
    };

    // Function to trigger the file input element
    const onChooseFile = () => {
        inputRef.current.click();
    };

    return (
        <div> 
            {/* File input element with a refernce*/}
            <input
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                />
            
            {/* Button to trigger the file input element */}
            {!selectedFile && (
                <button className="file-btn" onClick={InchooseFileClick}>
                    <span className="material-symbols-outlined">upload</span> Upload File
                </button>
            )}        
        </div>
    );
};

export default FileUpload;