import Image from 'next/image';
import styles from './page.module.css';
import React  from 'react';
import FileUpload from '../../components/FileUpload/FileUpload';

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      // Add your file handling logic here
    }
  };
  

const PrintDoc = () => {
  return (
    <div className={styles.container}>
      {/* Khung chính */}
      <div className={styles.rectangle}>
        {/* Tiêu đề */}
        <div className={styles.title}>Đăng tải file</div>
        <div className={styles.bodySection}>
          {/* Khung tải file */}
          <div className={styles.leftRectangle}>
            <div className={styles.uploadRectangle}>
                <FileUpload />
            </div>
            <div className={styles.chooseButton}>
              <button>Chọn file</button>
            </div>
          </div>


          {/* Danh sách file đã tải */}
          <div className={styles.rightRectangle} >
            <div className={styles.title}>CÁC FILE TẢI LÊN</div>
            

            {/* Danh sách file cụ thể */}
            <div className={styles.list}>

            </div>
            
            <div className={styles.bottomSection}>
              <button className={styles.printButton} >Tiến hành in</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PrintDoc;
