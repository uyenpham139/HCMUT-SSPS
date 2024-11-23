import Image from 'next/image';
import styles from './sidebar.module.css';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FiPrinter } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import logo from '@/assets/01_logobachkhoasang.png'; 
import MenuLink from './menuLink/MenuLink';

const menuItems = [
    {
        title: "Bảng điều khiển",
        path: "/spso/dashboard",
        icon: <TbLayoutDashboardFilled size={22}/>
    },
    {
        title: "Máy in",
        path: "/spso/printer",
        icon: <FiPrinter size={22}/>
    },
    {
        title: "Cấu hình",
        path: "/spso/setting",
        icon: <IoSettingsOutline size={22}/>
    },
    {
        title: "Thống kê",
        path: "/spso/statistics",
        icon: <FaChartLine size={22}/>
    },
    {
        title: "Lịch sử",
        path: "/spso/history",
        icon: <FaHistory size={22}/>
    }
]
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.brandName}>
                <Image src={logo} alt="BKLogo" objectFit="cover" className={styles.logo}/>
                SSPS
            </div>
            <div className={styles.menu}>
                {menuItems.map((item) => (
                    <MenuLink key={item.title} item={item} />
                ))}
            </div>
            <div className={styles.logout}>
                <button>
                    <MdLogout size={20}/>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Sidebar;