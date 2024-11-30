import React from 'react';
import { formatFileSize } from '@edgestore/react/utils';
import { CheckCircleIcon, FileIcon, LucideFileWarning, Trash2Icon, XIcon } from 'lucide-react';
import styles from './selectedFiles.module.css';

const SelectedFiles = ({ value, onChange }) => {
  return (
    <div className={styles['file-list']}>
      {value?.map(({ file, abortController, progress }, i) => (
        <div key={i} className={styles['file-item']}>
          <div className={styles['file-item-header']}>
            <FileIcon size="30" className={styles['file-icon']} />
            <div className={styles['file-info']}>
              <div className={styles['file-name']}>{file.name}</div>
              <div className={styles['file-size']}>{formatFileSize(file.size)}</div>
            </div>
            <div className={styles['file-actions']}>
              {progress === 'PENDING' ? (
                <button
                  type="button"
                  className={styles['file-delete-button']}
                  onClick={() => {
                    void onChange?.(value.filter((_, index) => index !== i));
                  }}
                >
                  <Trash2Icon className={styles.icon} />
                </button>
              ) : progress === 'ERROR' ? (
                <LucideFileWarning className={styles.icon + ' ' + styles.error} />
              ) : progress !== 'COMPLETE' ? (
                <div className={styles['progress-container']}>
                  {abortController && (
                    <button
                      type="button"
                      className={styles['abort-button']}
                      disabled={progress === 100}
                      onClick={() => {
                        abortController.abort();
                      }}
                    >
                      <XIcon className={styles.icon} />
                    </button>
                  )}
                  <div>{Math.round(progress)}%</div>
                </div>
              ) : (
                <CheckCircleIcon className={styles.icon + ' ' + styles.success} />
              )}
            </div>
          </div>
          {/* Progress Bar */}
          {typeof progress === 'number' && (
            <div className={styles['progress-bar']}>
              <div className={styles['progress-bar-bg']}>
                <div
                  className={styles['progress-bar-fill']}
                  style={{
                    width: progress ? `${progress}%` : '0%',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectedFiles;