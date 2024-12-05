"use client";

import { useState, useEffect } from "react";
import Card from "./card/Card";
import styles from "./page.module.css";
import { IoIosAddCircle } from "react-icons/io";

const Printer = () => {
  const [printers, setPrinters] = useState([]);
  const [status, setStatus] = useState(""); // For status filter
  const [location, setLocation] = useState(""); // For location filter

  // Fetch printers from the backend
  useEffect(() => {
    const fetchPrinters = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/printers");
        const data = await response.json();
        setPrinters(data);
      } catch (error) {
        console.error("Error fetching printers:", error);
      }
    };
    fetchPrinters();
  }, []);

  // Handle filter change for status
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // Handle filter change for location
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Filter printers based on status and location
  const filteredPrinters = printers.filter((printer) => {
    return (
      (status ? printer.status === status : true) &&
      (location ? printer.location.includes(location) : true)
    );
  });

  return (
    <div className={styles.container}>
      <h2>Tình trạng máy in</h2>
      <div className={styles.select}>
        <div className={styles.dropdown}>
          <label htmlFor="status">Trạng thái: </label>
          <select name="Status" id="status" onChange={handleStatusChange}>
            <option value="">Chọn trạng thái</option>
            <option value="ACTIVE">Đang hoạt động</option>
            <option value="ON_HOLD">Tạm dừng hoạt động</option>
            <option value="INACTIVE">Ngừng hoạt động</option>
          </select>
        </div>

        <div className={styles.dropdown}>
          <label htmlFor="location">Địa điểm: </label>
          <select name="Location" id="location" onChange={handleLocationChange}>
            <option value="">Chọn địa điểm</option>
            <option value="Campus B4">Campus B4</option>
            <option value="Library">Library</option>
            <option value="Campus A1">Campus A1</option>
          </select>
        </div>

        <button className={styles.addPrinter}>
          <IoIosAddCircle size={24} />
          Add Printer
        </button>
      </div>

      <div className={styles.printers}>
        {filteredPrinters.length === 0 ? (
          <p>No printers found</p>
        ) : (
          filteredPrinters.map((printer) => <Card key={printer.id} printer={printer} />)
        )}
      </div>
    </div>
  );
};

export default Printer;
