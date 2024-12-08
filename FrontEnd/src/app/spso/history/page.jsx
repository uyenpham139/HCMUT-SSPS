"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const AdminBuyReceipts = () => {
  const [receipts, setReceipts] = useState([]);
  const [filteredReceipts, setFilteredReceipts] = useState([]);
  const [searchUserId, setSearchUserId] = useState("");
  const [timeFilter, setTimeFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReceipts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/receipts", {
        method: "GET",
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Failed to fetch receipts");
        setReceipts([]);
      } else {
        const data = await response.json();
        setReceipts(data);
        setFilteredReceipts(data); // Initially, show all data
      }
    } catch (err) {
      console.error("Error fetching receipts:", err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...receipts];

    // Filter by User ID
    if (searchUserId.trim()) {
      filtered = filtered.filter((receipt) =>
        receipt.userId.includes(searchUserId.trim())
      );
    }

    // Filter by Time
    const now = new Date();
    filtered = filtered.filter((receipt) => {
      const receiptDate = new Date(receipt.purchaseDate);

      if (timeFilter === "today") {
        return (
          receiptDate.toDateString() === now.toDateString() // Same day
        );
      } else if (timeFilter === "week") {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
        return receiptDate >= oneWeekAgo && receiptDate <= now;
      } else if (timeFilter === "month") {
        return (
          receiptDate.getMonth() === now.getMonth() &&
          receiptDate.getFullYear() === now.getFullYear()
        );
      }
      return true; // All time
    });

    setFilteredReceipts(filtered);
  };

  useEffect(() => {
    fetchReceipts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchUserId, timeFilter]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Admin: Tất cả hóa đơn mua giấy</h1>

      {/* Filters */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Tìm theo MSSV"
          value={searchUserId}
          onChange={(e) => setSearchUserId(e.target.value)}
          className={styles.searchBar}
        />
        <select
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          className={styles.timeFilter}
        >
          <option value="all">Tất cả</option>
          <option value="today">Hôm nay</option>
          <option value="week">Tuần này</option>
          <option value="month">Tháng này</option>
        </select>
      </div>

      {/* Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>User ID</th>
            <th>Pages Purchased</th>
            <th>Total Cost</th>
            <th>Purchase Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredReceipts.length === 0 ? (
            <tr>
              <td colSpan="5" className={styles.noData}>
                No receipts found.
              </td>
            </tr>
          ) : (
            filteredReceipts.map((receipt) => (
              <tr key={receipt.id}>
                <td>{receipt.id}</td>
                <td>{receipt.userId}</td>
                <td>{receipt.pagesPurchased}</td>
                <td>
                  {receipt.totalCost.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
                <td>{new Date(receipt.purchaseDate).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBuyReceipts;
