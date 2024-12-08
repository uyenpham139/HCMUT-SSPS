"use client";

import { useEffect, useState } from "react";
import Card from "./card/Card";
import Transaction from "./transaction/Transaction";
import styles from "./page.module.css";

const Dashboard = () => {
  const [statistics, setStatistics] = useState(null);
  const [recentPrints, setRecentPrints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const extendedStatsResponse = await fetch(
        "http://localhost:8080/api/print-history/extended-statistics",
        { method: "GET" }
      );

      const recentResponse = await fetch(
        "http://localhost:8080/api/print-history",
        { method: "GET" }
      );

      if (!recentResponse.ok || !extendedStatsResponse.ok) {
        setError("Failed to fetch data");
        return;
      }

      const statsData = await extendedStatsResponse.json();
      const recentData = await recentResponse.json();
      setStatistics(statsData);
      setRecentPrints(recentData.slice(0, 5)); // Limit to 5 recent prints
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {statistics && (
            <>
              <Card
                icon="students"
                title="Tổng số sinh viên"
                number={statistics.totalStudents || "N/A"}
                detail=""
              />
              <Card
                icon="prints"
                title="Lượt in trung bình một sinh viên"
                number={statistics.averagePrintsPerUser.toFixed(2) || "N/A"}
                detail=""
              />
              <Card
                icon="printer"
                title="Tổng số máy in đang hoạt động"
                number={statistics.availablePrinters || "N/A"}
                detail=""
              />
            </>
          )}
        </div>
        <Transaction recentPrints={recentPrints} />
      </div>
    </div>
  );
};

export default Dashboard;
