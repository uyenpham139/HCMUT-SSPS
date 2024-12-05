import styles from './card.module.css';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";

const Card = ({ printer }) => {
  return (
    <div className={styles.container}>
      <button className={styles.editButton}>
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
          className={`${styles.status} ${printer.status === 'AVAILABLE'
              ? styles.active
              : printer.status === 'BUSY'
                ? styles.onHold
                : styles.inactive
            }`}
        >
          {printer.status === 'AVAILABLE'
            ? 'Đang hoạt động'
            : printer.status === 'BUSY'
              ? 'Đang bận'
              : 'Ngừng hoạt động'}
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
      <button className={styles.deleteButton}>
        <RiDeleteBin5Line size={24} />
      </button>
    </div>
  );
};

export default Card;
