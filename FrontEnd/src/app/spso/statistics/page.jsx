"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { MdPrint, MdOutlinePages, MdLocalPrintshop } from "react-icons/md";

const Statistics = () => {
  const [statistics, setStatistics] = useState(null);
  const [printHistory, setPrintHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRange, setFilterRange] = useState("all");

  const fetchStatistics = async () => {
    try {
      const statsResponse = await fetch(
        "http://localhost:8080/api/print-history/statistics",
        { method: "GET" }
      );

      const historyResponse = await fetch(
        "http://localhost:8080/api/print-history",
        {
          method: "GET",
        }
      );

      if (!statsResponse.ok || !historyResponse.ok) {
        const errorData = await statsResponse.json();
        setError(errorData.message || "Failed to fetch statistics");
        setStatistics(null);
        setPrintHistory([]);
        setFilteredHistory([]);
      } else {
        const statsData = await statsResponse.json();
        const historyData = await historyResponse.json();
        setStatistics(statsData);
        setPrintHistory(historyData);
        setFilteredHistory(historyData); // Initialize filtered history
      }
    } catch (err) {
      console.error("Error fetching statistics or history:", err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const filterHistory = () => {
    const now = new Date();
    let filtered = printHistory;

    // Filter based on time range
    if (filterRange !== "all") {
      const startDate = new Date();
      if (filterRange === "today") {
        startDate.setHours(0, 0, 0, 0);
      } else if (filterRange === "week") {
        startDate.setDate(now.getDate() - 7);
      } else if (filterRange === "month") {
        startDate.setMonth(now.getMonth() - 1);
      }

      filtered = filtered.filter((record) => {
        const recordDate = new Date(record.timestamp);
        return recordDate >= startDate && recordDate <= now;
      });
    }

    // Filter based on search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((record) =>
        record.studentId.includes(searchQuery.trim())
      );
    }

    setFilteredHistory(filtered);
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  useEffect(() => {
    filterHistory();
  }, [searchQuery, filterRange, printHistory]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Thống kê in</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <MdPrint size={40} />
          <div className={styles.text}>
            <span className={styles.title}>Tổng lượt in: </span>
            <span className={styles.number}>{statistics.totalPrints}</span>
          </div>
        </div>
        <div className={styles.card}>
          <MdOutlinePages size={40} />
          <div className={styles.text}>
            <span className={styles.title}>Tổng số trang in: </span>
            <span className={styles.number}>
              {statistics.totalPagesPrinted} trang A4
            </span>
          </div>
        </div>
        <div className={styles.card}>
          <MdLocalPrintshop size={40} />
          <div className={styles.text}>
            <span className={styles.title}>Máy in được dùng nhiều nhất: </span>
            <span className={styles.number}>{statistics.mostUsedPrinter}</span>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <h2 className={styles.heading}>Lịch sử in</h2>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Tìm theo MSSV"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchBar}
        />
        <select
          value={filterRange}
          onChange={(e) => setFilterRange(e.target.value)}
          className={styles.filterDropdown}
        >
          <option value="all">Tất cả</option>
          <option value="today">Hôm nay</option>
          <option value="week">Tuần này</option>
          <option value="month">Tháng này</option>
        </select>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>MSSV</th>
            <th>Loại giấy</th>
            <th>Số trang</th>
            <th>Số mặt in</th>
            <th>Máy in</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>
          {filteredHistory.map((record) => (
            <tr key={record.id}>
              <td>{record.studentId}</td>
              <td>{record.paperSize}</td>
              <td>{record.numberOfPages}</td>
              <td>
                {record.side === "double side" ? (
                  <span className={styles.doubleSided}>Hai mặt</span>
                ) : (
                  <span className={styles.singleSided}>Một mặt</span>
                )}
              </td>
              <td>{record.printerId}</td>
              <td>{new Date(record.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
