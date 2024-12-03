"use client";
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BiSolidArrowToLeft } from 'react-icons/bi';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from "react-icons/ci";
import { HiOutlineNewspaper } from 'react-icons/hi';
import { AiFillDelete } from 'react-icons/ai';
import visa from '@/assets/visa.jpg';
import mastercard from '@/assets/mastercard.png';
import momo from '@/assets/momo.png';
import internetbanking from '@/assets/internetbanking.png'; 
import React, { useState } from 'react';

const LoginSD = ()=> {
    const [orders, setOrders] = useState([]); // Lưu danh sách đơn hàng

    const handlePaperSelection = (type, price) => {
      const existingOrder = orders.find((order) => order.paperType === type);
  
      if (existingOrder) {
        setOrders(
          orders.map((order) =>
            order.paperType === type
              ? { ...order, quantity: order.quantity + 1 }
              : order
          )
        );
      } else {
        // Nếu loại giấy chưa tồn tại, thêm mới
        setOrders([
          ...orders,
          { paperType: type, quantity: 1, price: price },
        ]);
      }
    };
    const handleDeleteOrder = (type) => {
        setOrders(orders.filter((order) => order.paperType !== type));
      };
      const handleQuantityChange = (type, delta) => {
        setOrders(
          orders
            .map((order) =>
              order.paperType === type
                ? { ...order, quantity: Math.max(order.quantity + delta, 0) }
                : order
            )
            .filter((order) => order.quantity > 0) // Loại bỏ mục có số lượng = 0
        );
      };
    
      // Tính tổng tiền
      const totalPrice = orders.reduce(
        (total, order) => total + order.quantity * parseFloat(order.price.replace('.', '')),
        0
      );
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
                <button
                    className={`${styles.button} ${styles.titleh2}`}
                    onClick={() => handlePaperSelection('Khổ giấy A3', '10000')}
                >A3
                </button>
                <button
                    className={`${styles.button} ${styles.titleh2}`}
                    onClick={() => handlePaperSelection('Khổ giấy A4', '8000')}
                >A4
                </button>
                <button
                    className={`${styles.button} ${styles.titleh2}`}
                    onClick={() => handlePaperSelection('Khổ giấy A5', '5000')}
                >A5
                </button>
            </div>

            <div className={styles.orderTitle}> Đơn hàng của bạn</div>
            <div className={styles.orderContainer}>
            <div className={styles.orderQuantity}>Số lượng </div>
            <div className={styles.orderPrice}>Giá tiền </div>
            </div>

            {orders.map((order) => (
            <div className={styles.orderItemContainer}>
            <div key={order.paperType} className={styles.title}>
                <h3 onClick={() => handleDeleteOrder(order.paperType)}><AiFillDelete size={20} className={styles.icon1}/></h3>
                <div className={styles.title}><HiOutlineNewspaper size={20} className={styles.icon1} />{order.paperType}</div>
              <div>
                <div className={styles.merge}>
                    <h3 onClick={() => handleQuantityChange(order.paperType, -1)}><CiCircleMinus size={20} className={styles.icon2_1}/></h3>
                    <div className={styles.quantity}>{order.quantity}</div>
                    <h3 onClick={() => handleQuantityChange(order.paperType, 1)}><CiCirclePlus size={20} className={styles.icon2}/></h3>
                </div>
              </div>
              <div className={styles.titprice}>{order.quantity*order.price}</div>
              </div>
            </div>

          ))}
      <div className={styles.totalContainer}>Tổng cộng: {totalPrice}</div>

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
                <Link href="/buyprints/momo" className={styles.link}>
                <button className={styles.confirmButton} onClick={() => localStorage.setItem('totalPrice', totalPrice)}>Xác nhận</button>
                </Link>
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