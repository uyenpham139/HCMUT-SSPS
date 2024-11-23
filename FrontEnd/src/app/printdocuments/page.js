import Image from 'next/image';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflow: 'hidden', // Đảm bảo ảnh nền không kéo dài ngoài khung
    position: 'relative', // Cần thiết để `backgroundImageStyle` nằm bên trong
  },

  bottomRectangle: {
    width: '100%',
    height:'150px',
    backgroundColor: 'black', // Blue color
    position: 'absolute',
    right: 0, // Align to the right edge
    left: 0, // Align to the top edge
    bottom: 0, // Stretch to the bottom edge
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Roboto, sans-serif',
  },
  
  topRectangle: {
    width: '100%',
    height: '60px', // Decreased height to 70px
    color: 'white',
    justifyContent: 'center',
    backgroundColor: '#F4FCFF',
    borderRadius: '0px',
    position: 'absolute', // Ensure it sticks to the top
    top: 0, // Align to the top edge
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Russo One, sans-serif',
  },
      rectangle: {
        width: '1000px',
        height: '450px',
        backgroundColor: 'white',
        borderRadius: '40px',
        zIndex: 1,
        top: 90, // Align to the top edge
        position: 'absolute', // Ensure it sticks to the top
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
         // Align to the top edge
          },
      button: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        backgroundColor: '#1488DB',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        whiteSpace: 'nowrap', // Prevent text from wrapping
        textAlign: 'left', // Align text to the left
        textIndent: 0, // Add an indent to the text
  },
};
const uploadRectangle = {
  width: '400px',
  height: '270px',
  border: '2px dashed #1488DB',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'absolute',
  top: '100px',
  left: '50px',
  zIndex: 2,
  backgroundColor: 'rgba(72, 184, 233, 0.3)', // 30% opacity
};
const backgroundImageStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
  filter: 'blur(5px)',
  backgroundColor: '#AEE7EC'
};

const iconBKStyle = {
  width: '40px',
  height: '40px',
  position: 'absolute',
  top: '15px',
  left: '90px',
  zIndex: 1,
  filter: 'blur(0px)',
};
const modifiedIconBKStyle = {
  width: '35px',
  height: '35px',
  position: 'absolute',
  top: '9px',
  left: '150px',
  zIndex: 1,
  filter: 'blur(0px)',
};
function handleUploadClick() {
  document.getElementById('fileInput').click();
}

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    console.log('File selected:', file.name);
  }
}
export default function LoginSD() {
  return (
    <div style={styles.container}>
      <div style={backgroundImageStyle}></div>
      <div style={styles.topRectangle}>
        <div style={modifiedIconBKStyle}>
          <Image src={iconBK1} alt="iconBK" layout="fill" objectFit="cover" />
        </div>
        <div style={{ marginLeft: '200px', marginTop: '15px', display: 'inline-block', fontSize: '24px' }}>SSPS</div>
        <a href="#" style={{ marginLeft: '500px', marginTop: '15px', display: 'inline-block', fontSize: '16px' }}>Trang chủ</a>
        <a href="#" style={{ marginLeft: '30px', marginTop: '15px', display: 'inline-block', fontSize: '16px' }}>In tài liệu</a>
        <a href="#" style={{ marginLeft: '30px', marginTop: '15px', display: 'inline-block', fontSize: '16px' }}>Lịch sử in</a>
        <a href="#" style={{ marginLeft: '30px', marginTop: '15px', display: 'inline-block', fontSize: '16px' }}>Mua trang in</a>
        <a href="#" style={{ marginLeft: '30px', marginTop: '15px', display: 'inline-block', fontSize: '16px' }}>Liên hệ</a>
      </div>

      <div style={styles.rectangle}>
        <div style={{ marginLeft: '80px', marginTop: '20px', display: 'inline-block', fontSize: '36px', color: 'black', marginTop: '40px' }}>Đăng tải file</div>
        <div style={{ ...uploadRectangle, border: '2px dashed rgba(20, 136, 219, 0.3)' }}></div>
        <div style={{ 
          width: '450px', 
          height: '290px', 
          border: '0.5px solid rgba(0, 0, 0, 0.3)', 
          borderRadius: '10px', 
          marginLeft: '500px', 
        }}>
          <div style={{ marginLeft: '20px', display: 'inline-block', fontSize: '26px', color: 'black', marginTop: '20px',fontWeight:'bold' }}>CÁC FILE TẢI LÊN</div>
          <div style={{ 
          marginTop: '20px',
          width: '100%', 
          border: '0.5px solid rgba(0, 0, 0, 0.7)', 
          position: 'relative'
        }}> </div>
        </div>
        <button style={{...styles.button, padding:'8px 20px', marginTop:'15px', marginLeft:'665px'}}>Tiến hành in</button>

      </div>

      <div style={styles.bottomRectangle}>
        <div style={iconBKStyle}>
          <Image src={iconBK} alt="iconBK" layout="fill" objectFit="cover" />
        </div>
        <div style={{ marginLeft: '150px', marginTop: '20px', display: 'inline-block', fontSize: '16px', color: 'white', marginRight: '500px' }}>Hệ thống in thông minh dành cho</div>
        <div style={{ marginTop: '20px', display: 'inline-block', fontSize: '16px', color: 'white', marginRight: '132px' }}>Khám phá</div>
        <div style={{ display: 'inline-block', fontSize: '16px', color: 'white' }}>Liên hệ</div> <br />

        <div style={{ marginLeft: '150px', marginTop: '5px', display: 'inline-block', fontSize: '16px', color: 'white', marginRight: '577px' }}>sinh viên HCMUT-SSPS</div>
        <a href="#" style={{marginTop: '6px', display: 'inline-block', fontSize: '12px', color: 'white', fontWeight: 'normal', marginRight: '162px' }}>In tài liệu</a>
        <a href="#" style={{ display: 'inline-block', fontSize: '12px', color: 'white', fontWeight: 'normal' }}>ssps@hcmut.edu.vn</a><br />

        <a href="#" style={{ marginLeft: '906px', marginTop: '6px', display: 'inline-block', fontSize: '12px', color: 'white', fontWeight: 'normal', marginRight: '158px' }}>Lịch sử in</a>
        <a href="#" style={{ display: 'inline-block', fontSize: '12px', color: 'white', fontWeight: 'normal' }}>+84 0123 456 789</a><br />
        <a href="#" style={{ marginLeft: '906px', marginTop: '6px', display: 'inline-block', fontSize: '12px', color: 'white', fontWeight: 'normal', marginRight: '142px' }}>Mua trang in</a>
        <a href="#" style={{ display: 'inline-block', fontSize: '12px', color: 'white', fontWeight: 'normal' }}>CS1 Đại học Bách Khoa TPHCM, 268</a><br />
        <a href="#" style={{ marginLeft: '1116px', marginTop: '6px', display: 'inline-block', fontSize: '12px', color: 'white', fontWeight: 'normal' }}>Lý Thường Kiệt,P.14,Q.10,TPHCM</a><br />
      </div>
    </div>
  );
}