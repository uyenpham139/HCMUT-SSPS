"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

const Setting = () => {
  const [policy, setPolicy] = useState({
    defaultPageAllocation: 100,
    maxFileSize: 10,
    permittedFileTypes: "",
    printingCostPerPage: 0.1,
  });

  const [isLoading, setIsLoading] = useState(true);

  // Fetch system policy on component mount
  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/policies");
        const data = await response.json();
        setPolicy({
          ...data,
          permittedFileTypes: data.permittedFileTypes.join(", "), // Convert array to comma-separated string
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch policy:", error);
      }
    };

    fetchPolicy();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPolicy((prev) => ({
      ...prev,
      [name]:
        name === "printingCostPerPage" ||
        name === "maxFileSize" ||
        name === "defaultPageAllocation"
          ? parseFloat(value)
          : value,
    }));
  };

  // Save policy changes
  const handleSave = async () => {
    try {
      const updatedPolicy = {
        ...policy,
        permittedFileTypes: policy.permittedFileTypes
          .split(",")
          .map((type) => type.trim()), // Convert string to array
      };

      const response = await fetch("http://localhost:8080/api/policies", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPolicy),
      });

      if (response.ok) {
        alert("Policy updated successfully!");
      } else {
        alert("Failed to update policy.");
      }
    } catch (error) {
      console.error("Failed to save policy:", error);
    }
  };

  // Reset policy to defaults
  const handleReset = () => {
    setPolicy({
      defaultPageAllocation: 100,
      maxFileSize: 10,
      permittedFileTypes: "PDF, DOCX, TXT",
      printingCostPerPage: 0.1,
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h2>Cấu hình hệ thống</h2>
      <div className={styles.formGroup}>
        <label htmlFor="defaultPageAllocation" className={styles.label}>
          Số trang được cấp mặc định
        </label>
        <input
          type="number"
          id="defaultPageAllocation"
          name="defaultPageAllocation"
          value={policy.defaultPageAllocation}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="maxFileSize" className={styles.label}>
          Kích cỡ file tối đa (MB)
        </label>
        <input
          type="number"
          id="maxFileSize"
          name="maxFileSize"
          value={policy.maxFileSize}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="permittedFileTypes" className={styles.label}>
          Cái loại file được phép in (cách nhau bằng dấu phẩy)
        </label>
        <input
          type="text"
          id="permittedFileTypes"
          name="permittedFileTypes"
          value={policy.permittedFileTypes}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="printingCostPerPage" className={styles.label}>
          Giá một trang in (VND)
        </label>
        <input
          type="number"
          id="printingCostPerPage"
          name="printingCostPerPage"
          step="0.01"
          value={policy.printingCostPerPage}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>
      <div className={styles.buttonGroup}>
        <button
          onClick={handleSave}
          className={`${styles.button} ${styles.saveButton}`}
        >
          Save
        </button>
        <button
          onClick={handleReset}
          className={`${styles.button} ${styles.resetButton}`}
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};

export default Setting;
