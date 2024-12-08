import styles from "./card.module.css";
import {
  MdPrint,
  MdLocalPrintshop,
  MdSupervisedUserCircle,
} from "react-icons/md";

const Card = ({ icon, title, number, detail }) => {
  // Map icons to a dictionary for clarity and extensibility
  const icons = {
    prints: <MdPrint size={32} />,
    printer: <MdLocalPrintshop size={32} />,
    students: <MdSupervisedUserCircle size={32} />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[icon] || null}</div>
      <div className={styles.text}>
        <span className={styles.title}>{title || "Untitled"}</span>{" "}
        {/* Fallback for missing title */}
        <span className={styles.number}>{number || "N/A"}</span>{" "}
        {/* Fallback for missing number */}
        <span className={styles.detail}>{detail || ""}</span>{" "}
        {/* Fallback for missing detail */}
      </div>
    </div>
  );
};

export default Card;
