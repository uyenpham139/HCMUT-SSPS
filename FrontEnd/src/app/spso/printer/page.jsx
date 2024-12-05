"use client";

import { useState, useEffect } from "react";
import Card from "./card/Card";
import styles from "./page.module.css";
import { IoIosAddCircle } from "react-icons/io";

const Printer = () => {
  const [printers, setPrinters] = useState([]);
  const [locations, setLocations] = useState([]); // To store distinct locations
  const [status, setStatus] = useState(""); // For status filter
  const [location, setLocation] = useState(""); // For location filter
  const [showModal, setShowModal] = useState(false); // To toggle modal visibility
  const [newPrinter, setNewPrinter] = useState({
    id: "",
    location: "",
    status: "AVAILABLE",
    model: "",
    paperCapacity: 0,
  });

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

    const fetchLocations = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/printers/locations"
        );
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchPrinters();
    fetchLocations();
  }, []);

  // Delete a printer
  const deletePrinter = async (printerId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/printers/${printerId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setPrinters((prevPrinters) =>
          prevPrinters.filter((p) => p.id !== printerId)
        );
        alert("Printer deleted successfully!");
      } else {
        alert("Failed to delete printer.");
      }
    } catch (error) {
      console.error("Error deleting printer:", error);
    }
  };

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

  // Handle input change for the new printer form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPrinter((prev) => ({
      ...prev,
      [name]:
        name === "paperCapacity" || name === "paperAvailable"
          ? parseInt(value, 10)
          : value,
    }));
  };

  // Add a new printer
  const handleAddPrinter = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/printers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPrinter),
      });

      if (response.ok) {
        const addedPrinter = await response.json();
        setPrinters((prev) => [...prev, addedPrinter]); // Update state
        setShowModal(false); // Close the modal
        alert("Printer added successfully!");
      } else {
        alert("Failed to add printer.");
      }
    } catch (error) {
      console.error("Error adding printer:", error);
    }
  };

  const updatePrinter = async (updatedPrinter) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/printers/${updatedPrinter.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPrinter),
        }
      );
      if (response.ok) {
        const updated = await response.json();
        setPrinters((prevPrinters) =>
          prevPrinters.map((printer) =>
            printer.id === updated.id ? updated : printer
          )
        );
        alert("Printer updated successfully!");
      } else {
        alert("Failed to update printer.");
      }
    } catch (error) {
      console.error("Error updating printer:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Tình trạng máy in</h2>
      <div className={styles.select}>
        <div className={styles.dropdown}>
          <label htmlFor="status">Trạng thái: </label>
          <select name="Status" id="status" onChange={handleStatusChange}>
            <option value="">Chọn trạng thái</option>
            <option value="AVAILABLE">Đang hoạt động</option>
            <option value="BUSY">Tạm dừng hoạt động</option>
            <option value="OUT_OF_SERVICE">Ngừng hoạt động</option>
          </select>
        </div>

        <div className={styles.dropdown}>
          <label htmlFor="location">Địa điểm: </label>
          <select name="Location" id="location" onChange={handleLocationChange}>
            <option value="">Chọn địa điểm</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <button
          className={styles.addPrinter}
          onClick={() => setShowModal(true)}
        >
          <IoIosAddCircle size={24} />
          Add Printer
        </button>
      </div>

      <div className={styles.printers}>
        {filteredPrinters.length === 0 ? (
          <p>No printers found</p>
        ) : (
          filteredPrinters.map((printer) => (
            <Card
              key={printer.id}
              printer={printer}
              deletePrinter={deletePrinter}
              updatePrinter={updatePrinter}
            />
          ))
        )}
      </div>

      {/* Add Printer Modal */}
      {showModal && (
        <div className={styles.modal}>
          <h3>Add New Printer</h3>
          <div className={styles.formGroup}>
            <label>ID:</label>
            <input
              type="text"
              name="id"
              value={newPrinter.id}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={newPrinter.location}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Status:</label>
            <select
              name="status"
              value={newPrinter.status}
              onChange={handleInputChange}
            >
              <option value="AVAILABLE">Available</option>
              <option value="BUSY">Busy</option>
              <option value="OUT_OF_SERVICE">Out of Service</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Model:</label>
            <input
              type="text"
              name="model"
              value={newPrinter.model}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Paper Capacity:</label>
            <input
              type="number"
              name="paperCapacity"
              value={newPrinter.paperCapacity}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Paper Available:</label> {/* New Field */}
            <input
              type="number"
              name="paperAvailable"
              value={newPrinter.paperAvailable}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleAddPrinter} className={styles.saveButton}>
            Save
          </button>
          <button
            onClick={() => setShowModal(false)}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Printer;
