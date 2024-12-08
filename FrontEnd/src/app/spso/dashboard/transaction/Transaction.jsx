import styles from "./transaction.module.css";
import Image from "next/image";
import userImg from "@/assets/user-profile.png";

const Transaction = ({ recentPrints }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lượt in gần đây</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Họ tên</td>
            <td>MSSV</td>
            <td>Thời gian in</td>
            <td>Số trang</td>
            <td>Máy in</td>
          </tr>
        </thead>
        <tbody>
          {recentPrints.map((print) => (
            <tr key={print.id}>
              <td className={styles.user}>
                <Image
                  src={userImg}
                  alt="Avatar"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                {print.studentName || "Unknown"}
              </td>
              <td>{print.studentId || "N/A"}</td>
              <td>{new Date(print.timestamp).toLocaleString()}</td>
              <td>{print.numberOfPages}</td>
              <td>{print.printerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
