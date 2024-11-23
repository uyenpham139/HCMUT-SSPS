"use client";
import { usePathname } from 'next/navigation';
import styles from './navbarSpso.module.css';
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

const NavbarSpso = () => {
    const pathName = usePathname();

    let title = '';
    switch (pathName.split('/').pop()) {
        case 'dashboard':
            title = 'Bảng điều khiển';
            break;
        case 'printer':
            title = 'Máy in';
            break;
        case 'setting':
            title = 'Cấu hình';
            break;
        case 'statistic':
            title = 'Thống kê';
            break;
        case 'history':
            title = 'Lịch sử';
            break;
        default:
            title = 'Bảng điều khiển';
            break;
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {title} 
            </div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch />
                    <input type="text" placeholder='Search' className={styles.searchInput}/>
                </div>
                <div className={styles.icon}>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/>
                </div>
            </div>
        </div>
    );
}

export default NavbarSpso;