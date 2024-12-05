import { useState } from "react";
import styles from "./card.module.css";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";

const Card = ({ printer, deletePrinter, updatePrinter }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [updatedPrinter, setUpdatedPrinter] = useState({ ...printer });

  const handleDelete = () => {
    if (
      window.confirm(`Are you sure you want to delete printer ${printer.id}?`)
    ) {
      deletePrinter(printer.id);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPrinter((prev) => ({
      ...prev,
      [name]:
        name === "paperCapacity" || name === "paperAvailable"
          ? parseInt(value)
          : value,
    }));
  };

  const handleSave = () => {
    updatePrinter(updatedPrinter);
    setShowEditModal(false);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.editButton}
        onClick={() => setShowEditModal(true)}
      >
        <HiOutlinePencilAlt size={24} />
      </button>
      <div className={styles.printerInfo}>
        <p className={styles.title}>
          Loại: <span>{printer.model}</span>
        </p>
        <p className={styles.idNumber}>
          ID: <span>{printer.id}</span>
        </p>
        <span
          className={`${styles.status} ${
            printer.status === "AVAILABLE"
              ? styles.active
              : printer.status === "BUSY"
              ? styles.onHold
              : styles.inactive
          }`}
        >
          {printer.status === "AVAILABLE"
            ? "Đang hoạt động"
            : printer.status === "BUSY"
            ? "Đang bận"
            : "Ngừng hoạt động"}
        </span>
      </div>
      <div className={styles.detail}>
        <p>
          Địa điểm: <span>{printer.location}</span>
        </p>
        <p>
          Số yêu cầu đã tiếp nhận: <span>{printer.requestsReceived}</span>
        </p>
        <p>
          Số yêu cầu đang xử lý: <span>{printer.requestsProcessing}</span>
        </p>
        <p>
          Số yêu cầu đã xử lý: <span>{printer.requestsProcessed}</span>
        </p>
        <p>
          Số lượng giấy có sẵn: <span>{printer.paperAvailable}</span>
        </p>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        <RiDeleteBin5Line size={24} />
      </button>

      {/* Edit Modal */}
      {showEditModal && (
        <div className={styles.modal}>
          <h3>Edit Printer</h3>
          <div className={styles.formGroup}>
            <label>ID:</label>
            <input type="text" name="id" value={updatedPrinter.id} readOnly />
          </div>
          <div className={styles.formGroup}>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={updatedPrinter.location}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Status:</label>
            <select
              name="status"
              value={updatedPrinter.status}
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
              value={updatedPrinter.model}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Paper Capacity:</label>
            <input
              type="number"
              name="paperCapacity"
              value={updatedPrinter.paperCapacity}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Paper Available:</label>
            <input
              type="number"
              name="paperAvailable"
              value={updatedPrinter.paperAvailable}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleSave} className={styles.saveButton}>
            Save
          </button>
          <button
            onClick={() => setShowEditModal(false)}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
