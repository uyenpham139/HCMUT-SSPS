"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css"; // CSS module
import { useUser } from "@/contexts/UserContext"; // Import your user context

const PrintHistory = () => {
  const { isLoggedIn } = useUser(); // Access user authentication info
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch print history
  const fetchHistory = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/print-history/user",
        {
          method: "GET",
          credentials: "include", // Include cookies for session handling
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Failed to fetch history");
        setHistory([]);
      } else {
        const data = await response.json();
        setHistory(data);
      }
    } catch (err) {
      console.error("Error fetching print history:", err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchHistory();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className={styles.notLoggedIn}>
        <p>Bạn cần đăng nhập để xem lịch sử in của mình.</p>
        <a href="/login" className={styles.notLoggedIn}>
          Đăng nhập
        </a>
      </div>
    );
  }

  if (loading) {
    return <div className={styles.loading}>Đang tải...</div>;
  }

  if (error) {
    return <div className={styles.error}>Lỗi: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Lịch Sử In</h1>
      {history.length === 0 ? (
        <p>Bạn chưa có lịch sử in.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Thời Gian</th>
              <th>Loại Giấy</th>
              <th>Số Trang</th>
              <th>Mặt In</th>
              <th>Máy In</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => (
              <tr key={record.id}>
                <td>{new Date(record.timestamp).toLocaleString()}</td>
                <td>{record.paperSize}</td>
                <td>{record.numberOfPages}</td>
                <td>{record.side === "double side" ? "Hai mặt" : "Một mặt"}</td>
                <td>{record.printerId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PrintHistory;
