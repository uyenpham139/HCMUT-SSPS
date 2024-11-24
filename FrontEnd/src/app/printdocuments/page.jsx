import Image from 'next/image';
import styles from './pageprint.module.css';
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
      {/* Hình nền */}
      <div className={styles.backgroundImage}></div>

      {/* Khung chính */}
      <div className={styles.rectangle}>
        {/* Tiêu đề */}
        <div className={styles.title} style={{marginLeft: '150px', marginTop: '20px'}}>Đăng tải file</div>

        {/* Khung tải file */}
        <div className={styles.uploadRectangle}>
            <FileUpload />
</div>


        {/* Danh sách file đã tải */}
        <div className={styles.rectangle} style={{ width: '500px', height: '400px',position:'absolute', marginLeft: '550px', marginTop:'0px',backgroundColor: '#AEE7EC'  }}>
          <div className={styles.title} style={{fontSize: '20px', fontWeight: '1000',justifyContent: 'center', textAlign:'center', marginTop: '10px' }}>CÁC FILE TẢI LÊN</div>
          <button className={styles.title}style={{fontSize: '20px',color:'white', fontWeight: 'bold',alignItems:'center',marginLeft:'200px', marginTop: '250px',borderRadius: '15px',backgroundColor:'#1488DB'  }} >Tiến hành in</button>

          {/* Danh sách file cụ thể */}

        </div>

        {/* Nút tiến hành in */}
        
      </div>
    </div>
  );
};

export default PrintDoc;
