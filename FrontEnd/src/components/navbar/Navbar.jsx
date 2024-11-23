"use client";

import Link from "./links/Links";
import Image from 'next/image';
import React, { useEffect } from "react";
import { useState } from "react";
import styles from './navbar.module.css'; 
import backgroundImage from '@/assets/hcmutschool.jpg'; 
import logo from '@/assets/HCMUT_official_logo.png'; 
import Links from './links/Links'; 

const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.brandName}>
                    <Image src={logo} alt="BKLogo" objectFit="cover" className={styles.logo}/>
                    SSPS
                </div>
                <div>
                    <Links />
                </div>
            </div>
        </div>
    );
}

export default Navbar;