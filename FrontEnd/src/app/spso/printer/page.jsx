import Card from './card/Card';
import styles from './page.module.css';
import { IoIosAddCircle } from "react-icons/io";

const Printer = () => {
  return (
    <div className={styles.container}>
        <h2>Tình trạng máy in</h2>
        <div className={styles.select}>
          <div className={styles.dropdown}>
            <label htmlFor="status">Trạng thái: </label>
            <select name="Status" id="status">
              <option value="choose-status">Chọn trạng thái</option>
              <option value="active">Đang hoạt động</option>
              <option value="on-hold">Tạm dừng hoạt động</option>
              <option value="inactive">Ngừng hoạt động</option>
            </select>
          </div>

          <div className={styles.dropdown}>
            <label htmlFor="location">Địa điểm: </label>
            <select name="Location" id="location">
              <option value="choose-location">Chọn địa điểm</option>
            </select>
          </div>

          <button className={styles.addPrinter}>
            <IoIosAddCircle size={24}/>
            Add Printer
          </button>
        </div>
        <div className={styles.printers}>
            {/* Dropdown menu */}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div> 
  );
}

export default Printer;