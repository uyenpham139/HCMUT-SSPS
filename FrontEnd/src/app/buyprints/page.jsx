import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import pickpagebuy from "@/components/pickpagebuy/pickpagebuy";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { BiSolidArrowToLeft } from 'react-icons/bi';
import visa from '@/assets/visa.jpg';
import mastercard from '@/assets/mastercard.png';
import momo from '@/assets/momo.png';
import internetbanking from '@/assets/internetbanking.png'; 

const LoginSD = ()=> {
    const [selectedPaper, setSelectedPaper] = useState(null);

    const handlePaperSelection = (type) => {
      setSelectedPaper(type);
    };
return (
    <div className={styles.container}>
        <div className={styles.rectangle}>
        <div className={styles.leftHalf}>
        <div className={styles.item}>
            <Link href="/" className={styles.link}>
            <BiSolidArrowToLeft size={20} className={styles.icon} />
            <h3>Quay lại</h3>
            </Link>
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
            <div className={styles.paymentTitle}>Phương thức thanh toán</div>
            <div className={styles.subpaymentTitle}>Chọn phương thức thanh toán</div>
            <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${styles.title}`}>
            <Image src={visa} alt="visalogo" objectFit="cover" className={styles.logo}/>
            Visa
            </button>
            <button className={`${styles.button} ${styles.title}`}>
            <Image src={mastercard} alt="MClogo" objectFit="cover" className={styles.logo}/>
            Master Card
            </button>
            <button className={`${styles.button} ${styles.title}`}>
            <Image src={momo} alt="momologo" objectFit="cover" className={styles.logo}/>
            MoMo
            </button>
            <button className={`${styles.button} ${styles.title}`}>
            <Image src={internetbanking} alt="iblogo" objectFit="cover" className={styles.logo}/>
            Internet Banking
            </button>
            </div>
            <div className={styles.confirmButtons}>
                <button className={styles.confirmButton}>Xác nhận</button>
                <button className={styles.backHomeButton}>
                    <Link href="/"> Quay lại trang chủ
                    </Link>
                </button>
            </div>
      </div>

        </div>
    </div>
);
}
export default LoginSD;