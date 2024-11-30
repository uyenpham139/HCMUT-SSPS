'use client';

import Image from 'next/image';
import styles from './page.module.css';
import * as React from 'react';
import { useEdgeStore } from '@/lib/edgestore.ts'; // Do not use .ts extension here
import { MultiFileDropzone } from '../../components/multiFileDropZone/MultiFileDropZone.jsx'; 
import { useState } from 'react';
import SelectedFiles from '@/components/selectedFiles/SelectedFiles.jsx';
import Link from 'next/link';

const PrintDoc = () => {
  const [fileStates, setFileStates] = useState([]);
  const { edgestore } = useEdgeStore();  

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
                onChange={(files) => {
                  setFileStates(files);
                }}
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
                              // wait 1 second to set it to complete
                              // so that the user can see the progress bar at 100%
                              await new Promise((resolve) => setTimeout(resolve, 1000));
                              updateFileProgress(addedFileState.key, 'COMPLETE');
                            }
                          },
                        });
                        console.log(res);
                      } catch (err) {
                        updateFileProgress(addedFileState.key, 'ERROR');
                      }
                    })
                  );
                }}
              />
            </div>
            {/* {urls?.url && <Link href={urls.url} target='_blank'>URL</Link>}
            {urls?.thumbnailUrl && <Link href={urls.thumbnailUrl} target='_blank'>THUMBNAIL</Link>} */}
          </div>

          {/* Uploaded Files Section */}
          <div className={styles.rightRectangle}>
            <div className={styles.box}>
              <div className={styles.title}>CÁC FILE TẢI LÊN</div>
              {/* File List */}
              <div className={styles.list}>
                <SelectedFiles value={fileStates} onChange={setFileStates} />
              </div>
            </div>

            <div className={styles.bottomSection}>
              <Link className={styles.printButton} href='/preview'>Tiến hành in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintDoc;
