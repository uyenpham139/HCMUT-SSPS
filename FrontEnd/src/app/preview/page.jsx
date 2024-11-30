'use client';
import styles from './page.module.css';
import * as React from 'react';
import { useEdgeStore } from '@/lib/edgestore.ts'; // Do not use .ts extension here
import { MultiFileDropzone } from '../../components/multiFileDropZone/MultiFileDropZone.jsx'; 
import { useState } from 'react';
import SelectedFiles from '@/components/selectedFiles/SelectedFiles.jsx';
import Link from 'next/link';
import Droplist from '@/components/Droplist/Droplist.jsx';

const Preview = () => {

  return (
    <div className={styles.container}>
      <div className={styles.viewSection}>
        
      </div>
      <div className={styles.settingSection}>
        <h1>In</h1>
        <p></p>
        <div className={styles.body}>
          <div className={styles.item}>
            <p>Máy in</p>
            <Droplist />
          </div>
          <div className={styles.item}>
            <p>Số bản</p>
            <Droplist />
          </div>
          <div className={styles.item}>
            <p>Thiết lập in</p>
            <Droplist />
          </div>
          <div className={styles.item}>
            <p>Chiều in văn bản</p>
            <Droplist />
          </div>
          <div className={styles.item}>
            <p>Khổ giấy</p>
            <Droplist />
          </div>
          <div className={styles.item}>
            <p>Màu</p>
            <Droplist />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="/printdocuments" className={styles.btn}>Quay lại</Link>
          <Link href="#" className={styles.printBtn}>In</Link>
        </div>
      </div>
    </div>
  );
};

export default Preview;
