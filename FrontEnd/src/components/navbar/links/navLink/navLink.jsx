"use client";

import { usePathname } from 'next/navigation';
import styles from './navLink.module.css';
import Link from 'next/link';

const NavLink = ({item}) => {

    const pathName = usePathname();

    const isActive =
        pathName === item.path || (pathName === "/preview" && item.path === "/printdocuments");
    return (
        <Link href={item.path} className={`${styles.container} ${isActive && styles.active}`}>
            {item.title}
        </Link>
    );
}

export default NavLink;