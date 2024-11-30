'use client';
import styles from './page.module.css';
import * as React from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
// import { useUrls } from "@/contexts/UrlContext";
import Link from 'next/link';
import Droplist from '@/components/Droplist/Droplist.jsx';

import { printerOptions } from '@/components/Droplist/data/printerOptions.js';
import { copyOptions } from '@/components/Droplist/data/copyOptions.js';
import { setupOptions } from '@/components/Droplist/data/setupOptions.js';
import { orientationOptions } from '@/components/Droplist/data/orientationOptions.js';
import { paperSizeOptions } from '@/components/Droplist/data/paperSizeOptions.js';
import { colorOptions } from '@/components/Droplist/data/colorOptions.js';
import { useUrls } from "@/contexts/UrlContext";

const Preview = () => {

  const { urls } = useUrls(); // Access the global URLs

  const docs = urls.map((url) => ({
    uri: url,
    fileType: url.split(".").pop(),
    fileName: url.split("/").pop(),
  }));

  return (
    <div className={styles.container}>
      <div className={styles.viewSection}>
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} className={styles.docViewer}/>;
      </div>
      <div className={styles.settingSection}>
        <h1>In</h1>
        <p></p>
        <div className={styles.fileList}>

        </div>
        <div className={styles.body}>
          <div className={styles.item}>
            <p>Máy in</p>
            <Droplist options={printerOptions} />
          </div>
          <div className={styles.item}>
            <p>Số bản</p>
            <Droplist options={copyOptions} />
          </div>
          <div className={styles.item}>
            <p>Thiết lập in</p>
            <Droplist options={setupOptions} />
          </div>
          <div className={styles.item}>
            <p>Chiều in văn bản</p>
            <Droplist options={orientationOptions} />
          </div>
          <div className={styles.item}>
            <p>Khổ giấy</p>
            <Droplist options={paperSizeOptions} />
          </div>
          <div className={styles.item}>
            <p>Màu</p>
            <Droplist options={colorOptions} />
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
