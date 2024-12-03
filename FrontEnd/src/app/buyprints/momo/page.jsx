"use client";
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BiSolidArrowToLeft } from 'react-icons/bi';
import momo from '@/assets/momo.png';
import qrmomo from '@/assets/qrcodemomo.png';
import React, { useState } from 'react';
import { useEffect} from 'react';


const LoginSD = ()=> {
      const [timeLeft, setTimeLeft] = useState(300);

      useEffect(() => {
          const timer = setInterval(() => {
              setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
          }, 1000);

          return () => clearInterval(timer);
      }, []);

      const formatTime = (seconds) => {
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = seconds % 60;
          return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };

return (
    <div className={styles.container}>
        <div className={styles.leftHalf}>
            <div className={styles.item}>
                <Link href="/" className={styles.link}>
                <BiSolidArrowToLeft size={20} className={styles.icon} />
                <h3>Quay lại</h3>
                </Link>
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.titleh1}>Đơn hàng hết hạn sau: </div>
                <div className={styles.countdown}>{formatTime(timeLeft)}</div>
            </div>

            <div className={styles.orderTitle}> Nhà cung cấp</div>
            <div className={styles.orderprice}>ĐẠI HỌC BÁCH KHOA </div>
            <div className={styles.orderTitle}>Số tiền </div>
            <div className={styles.orderprice}>
                {localStorage.getItem('totalPrice') ? `${localStorage.getItem('totalPrice')} VND` : '0 VND'}
            </div>
            <div className={styles.orderTitle}>Thông tin </div>
            <div className={styles.orderTitle}>Đơn hàng </div>
            <div className={styles.orderprice}>
                {Math.floor(Math.random() * 900000000) + 100000000}
            </div>
            </div>

        <div className={styles.rightHalf}>
            <div className={styles.paymentTitle}>Quét mã để thanh toán</div>
            <Image src={qrmomo} alt="qrcodelogo" objectFit="cover" className={styles.logoqr} />
            <div className={styles.NoteTitle}>Sử dụng app MoMo hoặc</div>
            <div className={styles.NoteTitle}>ứng dụng camera hỗ trợ QR code để quét mã</div>

      </div>

    </div>
);
}
export default LoginSD;