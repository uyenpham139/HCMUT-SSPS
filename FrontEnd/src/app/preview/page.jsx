"use client";

import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import Link from "next/link";
import Droplist from "@/components/Droplist/Droplist.jsx";
import { useUrls } from "@/contexts/UrlContext";

import { copyOptions } from "@/components/Droplist/data/copyOptions.js";
import { setupOptions } from "@/components/Droplist/data/setupOptions.js";
import { orientationOptions } from "@/components/Droplist/data/orientationOptions.js";
import { paperSizeOptions } from "@/components/Droplist/data/paperSizeOptions.js";
import { colorOptions } from "@/components/Droplist/data/colorOptions.js";

const Preview = () => {
  const { urls } = useUrls(); // Access the global URLs

  const docs = urls.map((url) => ({
    uri: url,
    fileType: url.split(".").pop(),
    fileName: url.split("/").pop(),
  }));

  const [printerOptions, setPrinterOptions] = useState([]);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [formData, setFormData] = useState({
    copies: 1,
    setup: "oneSided",
    orientation: "portrait",
    paperSize: "A4",
    color: "BlackAndWhite",
  });

  // Fetch printer options on mount
  useEffect(() => {
    const fetchPrinters = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/printers/available"
        );
        const data = await response.json();
        setPrinterOptions(
          data.map((printer) => ({ id: printer.id, name: printer.model }))
        );
      } catch (error) {
        console.error("Error fetching printers:", error);
      }
    };

    fetchPrinters();
  }, []);

  const handlePrint = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/print-history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          printerId: selectedPrinter?.id,
          fileName: urls[0]?.fileName || "Document",
          numberOfPages: 10, // Replace with actual page count
          numberOfCopies: formData.copies,
          side: formData.setup,
          orientation: formData.orientation,
          paperSize: formData.paperSize,
          color: formData.color,
          timestamp: new Date().toISOString(),
        }),
        credentials: "include",
      });

      if (response.ok) {
        alert("Print request submitted successfully!");
        window.location.href = "/printdocuments";
      } else {
        const error = await response.json();
        alert(`Print request failed: ${error.message}`);
      }
    } catch (error) {
      console.error("Error submitting print request:", error);
      alert("An error occurred while submitting the print request.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.viewSection}>
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
      </div>
      <div className={styles.settingSection}>
        <h1>In</h1>
        <div className={styles.body}>
          <div className={styles.item}>
            <p>Máy in</p>
            <Droplist
              options={printerOptions}
              onChange={(value) => setSelectedPrinter(value[0])}
            />
          </div>
          <div className={styles.item}>
            <p>Số bản</p>
            <Droplist
              options={copyOptions}
              onChange={(value) =>
                setFormData({
                  ...formData,
                  copies: value[0]?.name.split(" ")[0],
                })
              }
            />
          </div>
          <div className={styles.item}>
            <p>Thiết lập in</p>
            <Droplist
              options={setupOptions}
              onChange={(value) =>
                setFormData({
                  ...formData,
                  setup: value[0]?.name.toLowerCase(),
                })
              }
            />
          </div>
          <div className={styles.item}>
            <p>Chiều in văn bản</p>
            <Droplist
              options={orientationOptions}
              onChange={(value) =>
                setFormData({
                  ...formData,
                  orientation: value[0]?.name.toLowerCase(),
                })
              }
            />
          </div>
          <div className={styles.item}>
            <p>Khổ giấy</p>
            <Droplist
              options={paperSizeOptions}
              onChange={(value) =>
                setFormData({ ...formData, paperSize: value[0]?.name })
              }
            />
          </div>
          <div className={styles.item}>
            <p>Màu</p>
            <Droplist
              options={colorOptions}
              onChange={(value) =>
                setFormData({
                  ...formData,
                  color: value[0]?.name.replace(" ", ""),
                })
              }
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="/printdocuments" className={styles.btn}>
            Quay lại
          </Link>
          <button onClick={handlePrint} className={styles.printBtn}>
            In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
