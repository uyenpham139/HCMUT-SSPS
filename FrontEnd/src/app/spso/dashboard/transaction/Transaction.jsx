import styles from './transaction.module.css';
import Image from 'next/image';
import userImg from '@/assets/user-profile.png';

const Transaction = () => {
    return ( 
        <div className={styles.container}>
            <h2 className={styles.title}>Lượt in gần đây</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Họ và Tên</td>
                        <td>MSSV</td>
                        <td>Thời gian</td>
                        <td>Số lượng</td>
                        <td>Máy in</td>
                    </tr>
                </thead>
                <tbody>
                    {/* Lấy thông tin từ database */}
                    {/* User 1 */}
                    <tr>
                        {/* Tên + Avatar */}
                        <td className={styles.user}>
                            <Image 
                            src={userImg}
                            alt="Avatar"
                            width={40}
                            height={40}
                            className={styles.userImage}
                            />
                            Nguyen Van A
                        </td>
                        {/* Mã số sinh viên */}
                        <td>
                            2252875
                        </td>
                        {/* Thời gian in */}
                        <td>
                            11:59 09-12-2022
                        </td>
                        {/* Số lượng */}
                        <td>
                            10
                        </td>
                        {/* Máy in */}
                        <td>
                            B6-P21
                        </td>
                    </tr>
                    {/* User 2 */}
                    <tr>
                        {/* Tên + Avatar */}
                        <td className={styles.user}>
                            <Image 
                            src={userImg}
                            alt="Avatar"
                            width={40}
                            height={40}
                            className={styles.userImage}
                            />
                            Nguyen Van A
                        </td>
                        {/* Mã số sinh viên */}
                        <td>
                            2252875
                        </td>
                        {/* Thời gian in */}
                        <td>
                            11:59 09-12-2022
                        </td>
                        {/* Số lượng */}
                        <td>
                            10
                        </td>
                        {/* Máy in */}
                        <td>
                            B6-P21
                        </td>
                    </tr>
                    {/* User 3 */}
                    <tr>
                        {/* Tên + Avatar */}
                        <td className={styles.user}>
                            <Image 
                            src={userImg}
                            alt="Avatar"
                            width={40}
                            height={40}
                            className={styles.userImage}
                            />
                            Nguyen Van A
                        </td>
                        {/* Mã số sinh viên */}
                        <td>
                            2252875
                        </td>
                        {/* Thời gian in */}
                        <td>
                            11:59 09-12-2022
                        </td>
                        {/* Số lượng */}
                        <td>
                            10
                        </td>
                        {/* Máy in */}
                        <td>
                            B6-P21
                        </td>
                    </tr>
                    {/* User 4 */}
                    <tr>
                        {/* Tên + Avatar */}
                        <td className={styles.user}>
                            <Image 
                            src={userImg}
                            alt="Avatar"
                            width={40}
                            height={40}
                            className={styles.userImage}
                            />
                            Nguyen Van A
                        </td>
                        {/* Mã số sinh viên */}
                        <td>
                            2252875
                        </td>
                        {/* Thời gian in */}
                        <td>
                            11:59 09-12-2022
                        </td>
                        {/* Số lượng */}
                        <td>
                            10
                        </td>
                        {/* Máy in */}
                        <td>
                            B6-P21
                        </td>
                    </tr>
                    {/* User 5 */}
                    <tr>
                        {/* Tên + Avatar */}
                        <td className={styles.user}>
                            <Image 
                            src={userImg}
                            alt="Avatar"
                            width={40}
                            height={40}
                            className={styles.userImage}
                            />
                            Nguyen Van A
                        </td>
                        {/* Mã số sinh viên */}
                        <td>
                            2252875
                        </td>
                        {/* Thời gian in */}
                        <td>
                            11:59 09-12-2022
                        </td>
                        {/* Số lượng */}
                        <td>
                            10
                        </td>
                        {/* Máy in */}
                        <td>
                            B6-P21
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default Transaction;