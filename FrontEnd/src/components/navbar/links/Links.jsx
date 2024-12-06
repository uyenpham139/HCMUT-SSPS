"use client";

import Link from "next/link";
import styles from "./links.module.css";
import { MdLogout } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BiBasket } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import NavLink from "./navLink/navLink";
import { useState, useEffect } from "react";
import { useUser } from "@/contexts/UserContext"; // Import the user context

const links = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Liên hệ",
    path: "/contact",
  },
];

const Links = () => {
  const { isLoggedIn, logout } = useUser(); // Access session info and logout function
  const [open, setOpen] = useState(false);
  const [sessionUser, setSessionUser] = useState(null); // State to store session user

  // Function to check session
  const checkSession = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/me", {
        method: "GET",
        credentials: "include", // Include cookies for session handling
      });
      if (response.ok) {
        const user = await response.json();
        setSessionUser(user); // Store user info in state
      } else {
        console.log("No active session found");
        setSessionUser(null); // Clear session user if unauthorized
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setSessionUser(null);
    }
  };

  // Run `checkSession` on mount and when `isLoggedIn` changes
  useEffect(() => {
    checkSession();
  }, [isLoggedIn]);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        credentials: "include", // Include the cookie for session management
      });
      logout(); // Update the session state globally
      setSessionUser(null); // Clear the session user
      alert("Logged out successfully!");
      window.location.href = "/";
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
        {isLoggedIn && (
          <>
            <NavLink item={{ title: "In tài liệu", path: "/printdocuments" }} />
            <NavLink item={{ title: "Lịch sử in", path: "/history" }} />
            <NavLink item={{ title: "Mua trang in", path: "/buyprints" }} />
          </>
        )}
      </div>
      {isLoggedIn ? (
        <>
          {sessionUser && (
            <div className={styles.sessionInfo}>
              <span>Xin chào, {sessionUser.displayName}. </span>{" "}
              {/* Display displayName */}
              <span>Số dư A4: {sessionUser.paperBalance} tờ</span>{" "}
              {/* Display paperBalance */}
            </div>
          )}
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
        <Link href={"/login"} className={styles.login}>
          Đăng nhập
        </Link>
      )}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuBtn}
      >
        <GiHamburgerMenu size={30} />
      </button>
      <div className={`${styles.sidebar} ${open && styles.sidebarOpen}`}>
        <button onClick={() => setOpen(!open)} className={styles.menuBtn}>
          <IoClose size={30} className={styles.closeBtn} />
        </button>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {isLoggedIn && (
          <>
            <NavLink item={{ title: "In tài liệu", path: "/printdocuments" }} />
            <NavLink item={{ title: "Lịch sử in", path: "/history" }} />
            <NavLink item={{ title: "Mua trang in", path: "/buyprints" }} />
          </>
        )}
      </div>
    </div>
  );
};

export default Links;
