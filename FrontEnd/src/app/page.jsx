"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import printer from "@/assets/printer-1-removebg.png";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { useUser } from "@/contexts/UserContext"; // Import the user context

const Home = () => {
  const { isLoggedIn } = useUser(); // Get the logged-in status from the user context

  // Handle the redirect for the print documents button
  const handlePrintClick = () => {
    if (!isLoggedIn) {
      window.location.href = "/login"; // Redirect to login page if not logged in
    } else {
      window.location.href = "/printdocuments"; // If logged in, proceed to print documents page
    }
  };

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <div>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>
              Hệ thống in thông minh cho sinh viên <span>HCMUT-SSPS</span>
            </h1>
            <h3>In tiện lợi, học tập dễ dàng</h3>
            <button onClick={handlePrintClick} className={styles.printBtn}>
              In tài liệu
            </button>
          </div>
          <div className={styles.heroImg}>
            <Image
              src={printer}
              alt="hero-img"
              objectFit="cover"
              className={styles.img}
            />
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.decorativeBar}></div>
        <div className={styles.container}>
          <h1 className={styles.contactTitle}>Liên hệ</h1>
          <div className={styles.components}>
            <div className={styles.contactForm}>
              <h3>
                Hãy liên hệ với chúng tôi nếu bạn cần trợ giúp. Chúng tôi sẽ
                phản hồi bạn sớm nhất có thể.
              </h3>
              <form>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    className={styles.input}
                    name="name"
                    required
                  />
                  <label htmlFor="name">Họ và tên</label>
                </div>
                <div className={styles.inputBox}>
                  <input
                    type="email"
                    className={styles.input}
                    name="email"
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className={styles.inputBox}>
                  <textarea
                    name="message"
                    id="message"
                    className={styles.input}
                    required="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <label htmlFor="message">Tin nhắn</label>
                </div>
                <button type="submit">Gửi</button>
              </form>
            </div>

            <div className={styles.contactInfoBox}>
              <h3>Thông tin liên hệ</h3>
              <div className={styles.item}>
                <IoMailOutline size={40} className={styles.icon} />
                ssps@hcmut.edu.vn
              </div>
              <div className={styles.item}>
                <LuPhone size={40} className={styles.icon} />
                +84 0123 456 789
              </div>
              <div className={styles.item}>
                <FaRegBuilding size={65} className={styles.icon} />
                CS1 Đại học Bách Khoa TPHCM, 268 Lý Thường Kiệt, P.14, Q.10,
                TPHCM
              </div>
              <div className={styles.item}>
                <FaRegClock size={40} className={styles.icon} />
                7:30 - 18:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
