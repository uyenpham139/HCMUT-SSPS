import styles from './card.module.css';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";

const Card = () => {
    return (
        <div className={styles.container}>
            <button className={styles.editButton}>
                <HiOutlinePencilAlt size={24}/>
            </button>
            <div className={styles.printerInfo}>
                <p className={styles.title}>
                    Loại:
                    {/* Lấy từ database */}
                    <span> Máy in màu</span>
                </p>
                <p className={styles.idNumber}>
                    ID:
                    {/* Lấy từ database */}
                    <span> P21</span>
                </p>
                {/* Status lấy từ database */}
                {/* active: Đang hoạt động
                inactive: Ngừng hoạt động
                onHold: Tạm dừng hoạt động */}
                <span className={`${styles.status} ${styles.active}`}>
                    Đang hoạt động
                </span>
            </div>
            <div className={styles.detail}>
                <p>
                    Địa điểm: 
                    <span> B6</span>
                </p>
                <p>
                    Số yêu cầu đã tiếp nhận: 
                    <span> 52</span>
                </p>
                <p>
                    Số yêu cầu dang xử lý: 
                    <span> 10</span>
                </p>
                <p>
                    Số yêu cầu đã xử lý: 
                    <span> 23</span>
                </p>
                <p>
                    Số lượng giấy có sẵn: 
                    <span> 100</span>
                </p>
            </div>
            <button className={styles.deleteButton}>
                <RiDeleteBin5Line size={24}/>
            </button>
        </div>
    );
}
 
export default Card;
