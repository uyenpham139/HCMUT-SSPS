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
    const [open, setOpen] = useState(false);

    // set Session (modify)
    const session = false;
    const isStudent = true
    return (
        <div className={styles.container}>
            <div className={styles.links}> 
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
            </div>
            {session ? (
                <>
                    <Link href={"/"}>
                        <BiBasket size={25} />
                    </Link>
                    
                    <Link href={"/"}>
                        <FaRegUserCircle size={25} />
                    </Link>
                    
                    <Link href={"/"} className={styles.logout}>
                        <MdLogout size={25} />
                    </Link>
                </>
            ) : (
                    <Link href={"/login"} className={styles.login}>Đăng nhập</Link>
            )}
            <button onClick={() => setOpen((prev) => !prev)} className={styles.menuBtn}>
                <GiHamburgerMenu size={30}/>
            </button>
            <div className={`${styles.sidebar} ${open && styles.sidebarOpen}`}>
                <button onClick={() => setOpen(!open)} className={styles.menuBtn}>
                    <IoClose size={30} className={styles.closeBtn}/>
                </button>                    
                {links.map((link) => (
                <NavLink item={link} key={link.title} />
                ))}
            </div>
        </div>
        
    );
};

export default Links;
