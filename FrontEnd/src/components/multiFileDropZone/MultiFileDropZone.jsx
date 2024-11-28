'use client';

import { formatFileSize } from '@edgestore/react/utils';
import { UploadCloudIcon } from 'lucide-react';
import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import uploadImg from '@/assets/cloud-computing.png';
import styles from './multiFileDropZone.module.css';

const ERROR_MESSAGES = {
  fileTooLarge(maxSize) {
    return `The file is too large. Max size is ${formatFileSize(maxSize)}.`;
  },
  fileInvalidType() {
    return 'Invalid file type.';
  },
  tooManyFiles(maxFiles) {
    return `You can only add ${maxFiles} file(s).`;
  },
  fileNotSupported() {
    return 'The file is not supported.';
  },
};

const MultiFileDropzone = React.forwardRef(
  ({ dropzoneOptions, value, className, disabled, onFilesAdded, onChange }, ref) => {
    const [customError, setCustomError] = React.useState();

    if (dropzoneOptions?.maxFiles && value?.length) {
      disabled = disabled ?? value.length >= dropzoneOptions.maxFiles;
    }

    const {
      getRootProps,
      getInputProps,
      fileRejections,
      isFocused,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      disabled,
      onDrop: (acceptedFiles) => {
        const files = acceptedFiles;
        setCustomError(undefined);
        if (
          dropzoneOptions?.maxFiles &&
          (value?.length ?? 0) + files.length > dropzoneOptions.maxFiles
        ) {
          setCustomError(ERROR_MESSAGES.tooManyFiles(dropzoneOptions.maxFiles));
          return;
        }
        if (files) {
          const addedFiles = files.map((file) => ({
            file,
            key: Math.random().toString(36).slice(2),
            progress: 'PENDING',
          }));
          void onFilesAdded?.(addedFiles);
          void onChange?.([...(value ?? []), ...addedFiles]);
        }
      },
      ...dropzoneOptions,
    });

    const dropZoneClassName = `${styles.dropzone} ${isFocused ? styles['dropzone-active'] : ''} ${disabled ? styles['dropzone-disabled'] : ''} ${isDragReject || fileRejections[0] ? styles['dropzone-reject'] : ''} ${isDragAccept ? styles['dropzone-accept'] : ''} ${className || ''}`.trim();

    const errorMessage = React.useMemo(() => {
      if (fileRejections[0]) {
        const { errors } = fileRejections[0];
        if (errors[0]?.code === 'file-too-large') {
          return ERROR_MESSAGES.fileTooLarge(dropzoneOptions?.maxSize ?? 0);
        } else if (errors[0]?.code === 'file-invalid-type') {
          return ERROR_MESSAGES.fileInvalidType();
        } else if (errors[0]?.code === 'too-many-files') {
          return ERROR_MESSAGES.tooManyFiles(dropzoneOptions?.maxFiles ?? 0);
        } else {
          return ERROR_MESSAGES.fileNotSupported();
        }
      }
      return undefined;
    }, [fileRejections, dropzoneOptions]);

    return (
      <div className={styles['file-dropzone-container']}>
        <div className={styles['file-dropzone']}>
          <div {...getRootProps({ className: dropZoneClassName })}>
            <input ref={ref} {...getInputProps()} />
            <div className={styles['file-dropzone-text']}>
              <UploadCloudIcon className={styles.icon} />
              <div>Kéo và thả hoặc nhấp để tải lên</div>
            </div>
          </div>

          {/* Error Text */}
          <div className={styles['error-message']}>{customError ?? errorMessage}</div>
        </div>
      </div>
    );
  }
);

MultiFileDropzone.displayName = 'MultiFileDropzone';

export { MultiFileDropzone };
