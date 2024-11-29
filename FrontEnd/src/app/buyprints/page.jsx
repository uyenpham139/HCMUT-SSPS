import styles from './page.module.css';
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { BiSolidArrowToLeft } from 'react-icons/bi';
import visa from '@/assets/visa.png';
import mastercard from '@/assets/mastercard.png';
import momo from '@/assets/momo.png';
import internetbanking from '@/assets/internetbanking.png'; 

// function handleUploadClick() {
//   document.getElementById('fileInput').click();
// }

// function handleFileChange(event) {
//   const file = event.target.files[0];
//   if (file) {
//     console.log('File selected:', file.name);
//   }
// }
const LoginSD = ()=> {
return (
    <div className={styles.container}>
        <div className={styles.rectangle}>
        <div className={styles.leftHalf}>
        <div className={styles.item}>
                    <BiSolidArrowToLeft size={20} className={styles.icon} />
                    Quay lại
                </div>
            <div className={styles.titleContainer}>
            <div className={styles.titleh1}>Chọn khổ giấy: </div>
            <button className={`${styles.button} ${styles.titleh2}`}>A3</button>
            <button className={`${styles.button} ${styles.titleh2}`}>A4</button>
            <button className={`${styles.button} ${styles.titleh2}`}>A5</button>
            </div>


            <div className={styles.orderTitle}>Đơn hàng của bạn</div>
            <div className={styles.orderContainer}>
            <div className={styles.orderQuantity}>Số lượng </div>
            <div className={styles.orderPrice}>Giá tiền </div>
            </div>


            <div className={styles.totalContainer}>
            <div className={styles.totalText}>Tổng cộng: </div>
            </div>

            </div>
            <div className={styles.rightHalf}>
            <div className={styles.paymentContainer}>
              <div className={styles.paymentTitle}>Phương thức thanh toán</div>
              <div className={styles.paymentSubtitle}>Chọn phương thức thanh toán</div>
              <button className={styles.smallshowpttt}>
              <Image src={visa} alt="visalogo" objectFit="cover" className={styles.logo}/>
              Visa</button>
              <button className={styles.smallshowpttt}>MasterCard</button>
              <button className={styles.smallshowpttt}>MoMo</button>
              <button className={styles.smallshowpttt}>Internet Banking</button>
              <div className={styles.confirmButtons}>
              <button className={styles.confirmButton}>Xác nhận</button>
              <button className={styles.backHomeButton}>Quay lại trang chủ</button>
</div>
      </div>

            </div>
        </div>
    </div>
);
}
export default LoginSD;