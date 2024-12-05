"use client";

import Link from "next/link";
import styles from "./links.module.css";
import { MdLogout } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BiBasket } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext"; // Import the user context

const links = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "In tài liệu",
    path: "/printdocuments",
  },
  {
    title: "Lịch sử in",
    path: "/history",
  },
  {
    title: "Mua trang in",
    path: "/buyprints",
  },
  {
    title: "Liên hệ",
    path: "/contact",
  },
];

const Links = () => {
  const { isLoggedIn, logout } = useUser(); // Access session info and logout function
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        credentials: "include", // Include the cookie for session management
      });
      logout(); // Update the session state globally
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      {isLoggedIn ? (
        <>
          <Link href={"/"}>
            <BiBasket size={25} />
          </Link>

          <Link href={"/"}>
            <FaRegUserCircle size={25} />
          </Link>

          <button onClick={handleLogout} className={styles.logout}>
            <MdLogout size={25} />
          </button>
        </>
      ) : (
        <Link href={"/login"} className={styles.login}>Đăng nhập</Link>
      )}
      <button onClick={() => setOpen((prev) => !prev)} className={styles.menuBtn}>
        <GiHamburgerMenu size={30} />
      </button>
      <div className={`${styles.sidebar} ${open && styles.sidebarOpen}`}>
        <button onClick={() => setOpen(!open)} className={styles.menuBtn}>
          <IoClose size={30} className={styles.closeBtn} />
        </button>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
    </div>
  );
};

export default Links;
