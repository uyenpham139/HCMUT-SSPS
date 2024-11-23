import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import logo from '@/assets/01_logobachkhoasang.png'; 

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={`${styles.col} ${styles.name}`}>
                <Image src={logo} alt="BKLogo" objectFit="cover" className={styles.logo}/>
                Hệ thống in thông minh dành cho sinh viên - HCMUT-SSPS
            </div>

            <div className={`${styles.col} ${styles.links}`}>
                <p>Khám phá</p>
                <Link href={"/printdocuments"}>In tài liệu</Link>
                <Link href={"/history"}>Lịch sử in</Link>
                <Link href={"/buyprints"}>Mua trang in</Link>
            </div>
            <div className={`${styles.col} ${styles.contact}`}>
                <p>Liên hệ</p>
                <div className={styles.item}>
                    <IoMailOutline size={20} className={styles.icon} />
                    ssps@hcmut.edu.vn
                </div>
                <div className={styles.item}>
                    <LuPhone size={20} className={styles.icon} />
                    +84 0123 456 789
                </div>
                <div className={styles.item}>
                    <FaRegBuilding size={20} className={styles.icon} />
                    CS1 Đại học Bách Khoa TPHCM, 268 Lý Thường Kiệt, P.14, Q.10, TPHCM
                </div>
            </div>
        </div>
    );
}

export default Footer;