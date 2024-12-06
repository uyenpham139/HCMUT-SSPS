"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiSolidArrowToLeft } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { HiOutlineNewspaper } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import visa from "@/assets/visa.jpg";
import mastercard from "@/assets/mastercard.png";
import momo from "@/assets/momo.png";
import internetbanking from "@/assets/internetbanking.png";
import React, { useState, useEffect } from "react";

const LoginSD = () => {
  const [orders, setOrders] = useState([]); // Lưu danh sách đơn hàng
  const [printingCostPerPage, setPrintingCostPerPage] = useState(0);

  // Fetch printing cost per page from the backend
  useEffect(() => {
    const fetchPrintingCost = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/policies");
        const data = await response.json();
        setPrintingCostPerPage(data.printingCostPerPage);
      } catch (error) {
        console.error("Error fetching printing cost:", error);
      }
    };

    fetchPrintingCost();
  }, []);

  // Handle paper selection and update price
  const handlePaperSelection = (type, quantity) => {
    const existingOrder = orders.find((order) => order.paperType === type);

    // Calculate the equivalent A4 pages for the selected paper type
    let a4Equivalent = quantity; // Default is A4 quantity
    if (type === "Khổ giấy A3") {
      a4Equivalent = quantity * 2; // A3 is equivalent to 2 A4 pages
    } else if (type === "Khổ giấy A5") {
      a4Equivalent = quantity * 0.5; // A5 is equivalent to 0.5 A4 pages
    }

    const price = a4Equivalent * printingCostPerPage;

    if (existingOrder) {
      // Update the quantity and price of an existing order
      setOrders(
        orders.map((order) =>
          order.paperType === type
            ? {
                ...order,
                quantity: order.quantity + quantity,
                price: (order.quantity + quantity) * printingCostPerPage,
              }
            : order
        )
      );
    } else {
      // If the paper type doesn't exist, add a new order
      setOrders([
        ...orders,
        { paperType: type, quantity: quantity, price: price },
      ]);
    }
  };

  // Handle deleting an order
  const handleDeleteOrder = (type) => {
    setOrders(orders.filter((order) => order.paperType !== type));
  };

  // Handle increasing or decreasing quantity
  const handleQuantityChange = (type, delta) => {
    setOrders(
      (prevOrders) =>
        prevOrders
          .map((order) => {
            if (order.paperType === type) {
              const newQuantity = Math.max(order.quantity + delta, 0);

              // Calculate A4 equivalents for price adjustment
              let a4Equivalent = 1; // Default for A4
              if (type === "Khổ giấy A3") {
                a4Equivalent = 2; // A3 is equivalent to 2 A4 pages
              } else if (type === "Khổ giấy A5") {
                a4Equivalent = 0.5; // A5 is equivalent to 0.5 A4 pages
              }

              const newPrice = newQuantity * a4Equivalent * printingCostPerPage;

              return newQuantity > 0
                ? { ...order, quantity: newQuantity, price: newPrice }
                : null; // Return null to filter out zero-quantity orders
            }
            return order;
          })
          .filter((order) => order !== null) // Remove null entries (zero-quantity orders)
    );
  };

  // Calculate total price
  const totalPrice = orders.reduce((total, order) => total + order.price, 0);

  const handlePurchase = async () => {
    const totalA4Equivalents = orders.reduce((total, order) => {
      let a4Equivalent = order.quantity;
      if (order.paperType === "Khổ giấy A3") {
        a4Equivalent = order.quantity * 2;
      } else if (order.paperType === "Khổ giấy A5") {
        a4Equivalent = order.quantity * 0.5;
      }
      return total + a4Equivalent;
    }, 0);

    try {
      const response = await fetch("http://localhost:8080/api/user/buy-paper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: totalA4Equivalents,
          totalCost: totalPrice,
        }),
        credentials: "include",
      });

      if (response.ok) {
        alert("Purchase successful!");
        setOrders([]); // Clear the orders after purchase
        window.location.href = "/buyprints/momo";
      } else {
        const errorData = await response.json();
        const errorMessage = errorData?.message || "Unknown error occurred";
        alert(`Failed to purchase paper: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error purchasing paper:", error);
      alert("An error occurred during purchase");
    }
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
            <button
              className={`${styles.button} ${styles.titleh2}`}
              onClick={() => handlePaperSelection("Khổ giấy A3", 1)}
            >
              A3
            </button>
            <button
              className={`${styles.button} ${styles.titleh2}`}
              onClick={() => handlePaperSelection("Khổ giấy A4", 1)}
            >
              A4
            </button>
            <button
              className={`${styles.button} ${styles.titleh2}`}
              onClick={() => handlePaperSelection("Khổ giấy A5", 1)}
            >
              A5
            </button>
          </div>

          <div className={styles.orderTitle}>Đơn hàng của bạn</div>
          <div className={styles.orderContainer}>
            <div className={styles.orderQuantity}>Số lượng</div>
            <div className={styles.orderPrice}>Giá tiền</div>
          </div>

          {orders.map((order) => (
            <div key={order.paperType} className={styles.orderItemContainer}>
              <div className={styles.title}>
                <h3 onClick={() => handleDeleteOrder(order.paperType)}>
                  <AiFillDelete size={20} className={styles.icon1} />
                </h3>
                <div className={styles.title}>
                  <HiOutlineNewspaper size={20} className={styles.icon1} />
                  {order.paperType}
                </div>
                <div className={styles.merge}>
                  <h3 onClick={() => handleQuantityChange(order.paperType, -1)}>
                    <CiCircleMinus size={20} className={styles.icon2_1} />
                  </h3>
                  <div className={styles.quantity}>{order.quantity}</div>
                  <h3 onClick={() => handleQuantityChange(order.paperType, 1)}>
                    <CiCirclePlus size={20} className={styles.icon2} />
                  </h3>
                </div>
                <div className={styles.titprice}>{order.price}</div>
              </div>
            </div>
          ))}
          <div className={styles.totalContainer}>Tổng cộng: {totalPrice}</div>
        </div>
        <div className={styles.rightHalf}>
          <div className={styles.paymentTitle}>Phương thức thanh toán</div>
          <div className={styles.subpaymentTitle}>
            Chọn phương thức thanh toán
          </div>
          <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${styles.title}`}>
              <Image
                src={visa}
                alt="visalogo"
                objectFit="cover"
                className={styles.logo}
              />
              Visa
            </button>
            <button className={`${styles.button} ${styles.title}`}>
              <Image
                src={mastercard}
                alt="MClogo"
                objectFit="cover"
                className={styles.logo}
              />
              Master Card
            </button>
            <button className={`${styles.button} ${styles.title}`}>
              <Image
                src={momo}
                alt="momologo"
                objectFit="cover"
                className={styles.logo}
              />
              MoMo
            </button>
            <button className={`${styles.button} ${styles.title}`}>
              <Image
                src={internetbanking}
                alt="iblogo"
                objectFit="cover"
                className={styles.logo}
              />
              Internet Banking
            </button>
          </div>
          <div className={styles.confirmButtons}>
            <button className={styles.confirmButton} onClick={handlePurchase}>
              Xác nhận
            </button>

            <button className={styles.backHomeButton}>
              <Link href="/">Quay lại trang chủ</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSD;
