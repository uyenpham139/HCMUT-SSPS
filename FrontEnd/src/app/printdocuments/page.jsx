'use client';

import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import { useEdgeStore } from '@/lib/edgestore.ts';
import { MultiFileDropzone } from '../../components/multiFileDropZone/MultiFileDropZone.jsx';
import SelectedFiles from '@/components/selectedFiles/SelectedFiles.jsx';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import { useUrls } from '@/contexts/UrlContext.jsx';

const PrintDoc = () => {
  const [fileStates, setFileStates] = useState([]);
  const [showMessage, setShowMessage] = useState(''); // To control message visibility
  const { edgestore } = useEdgeStore();
  const { urls, setUrls } = useUrls();
  const router = useRouter(); // Initialize useRouter for navigation

  // Clear URLs when the component mounts
  useEffect(() => {
    setUrls([]); // Reset the URLs whenever the component is loaded
  }, [setUrls]);

  // Check if all files are completed
  const areAllFilesComplete = fileStates.every((file) => file.progress === 'COMPLETE');
  const isFileListEmpty = fileStates.length === 0;

  function updateFileProgress(key, progress) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  const handlePrintClick = (e) => {
    e.preventDefault(); // Prevent navigation by default

    if (isFileListEmpty) {
      setShowMessage("Vui lòng tải lên ít nhất một tệp để tiếp tục.");
    } else if (!areAllFilesComplete) {
      setShowMessage("Hãy đợi cho đến khi tất cả các tệp được tải lên hoàn tất.");
    } else {
      setShowMessage(""); // Hide the message if conditions are met
      router.push('/preview'); // Programmatically navigate to /preview if conditions are met
    }
  };

  return (
    <div className={styles.container}>
      {/* Main Section */}
      <div className={styles.rectangle}>
        {/* Title */}
        <div className={styles.title}>Đăng tải file</div>
        <div className={styles.bodySection}>
          {/* MultiFileDropZone Section */}
          <div className={styles.leftRectangle}>
            <div className={styles.uploadRectangle}>
              <MultiFileDropzone
                value={fileStates}
                onChange={(files) => setFileStates(files)}
                onFilesAdded={async (addedFiles) => {
                  setFileStates([...fileStates, ...addedFiles]);
                  await Promise.all(
                    addedFiles.map(async (addedFileState) => {
                      try {
                        const res = await edgestore.publicFiles.upload({
                          file: addedFileState.file,
                          onProgressChange: async (progress) => {
                            updateFileProgress(addedFileState.key, progress);
                            if (progress === 100) {
                              await new Promise((resolve) =>
                                setTimeout(resolve, 1000)
                              );
                              updateFileProgress(addedFileState.key, 'COMPLETE');
                            }
                          },
                        });

                        setUrls((prevUrls) => [...prevUrls, res.url]);
                      } catch (err) {
                        console.log(err);
                        updateFileProgress(addedFileState.key, 'ERROR');
                      }
                    })
                  );
                }}
              />
            </div>
          </div>

          {/* Uploaded Files Section */}
          <div className={styles.rightRectangle}>
            <div className={styles.box}>
              <div className={styles.title}>CÁC FILE TẢI LÊN</div>
              <div className={styles.list}>
                <SelectedFiles value={fileStates} onChange={setFileStates} />
              </div>
            </div>

            {/* Print button and message */}
            <div className={styles.bottomSection}>
              {/* Changed to a button */}
              <button
                className={styles.printButton}
                onClick={handlePrintClick} // Handle click to control navigation
              >
                Tiến hành in
              </button>
              {showMessage && (
                <p className={styles.errorMessage}>{showMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintDoc;
