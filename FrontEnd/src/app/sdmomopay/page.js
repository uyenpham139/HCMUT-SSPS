import Image from 'next/image';
import backgroundImage from '../../../../public/hcmutschool.jpg'; // Ensure this path is correct and the file exists
import iconBK1 from '../../../..//public/HCMUT_official_logo.png'; // Ensure this path is correct and the file exists
import iconBK from '../../../..//public/logobkblack.jpg'; // Ensure this path is correct and the file exists
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
        width: '100%',
        height: '100%',
        backgroundColor: '#F4FCFF',
        borderRadius: '20px',
        zIndex: 1,
        top: 60, // Align to the top edge
        position: 'absolute', // Ensure it sticks to the top
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
        display: 'flex', // Add this line to align children next to each other
      },
      button: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        backgroundColor: '#1488DB',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        whiteSpace: 'nowrap', // Prevent text from wrapping
        textAlign: 'center', // Align text to the left
        textIndent: 0, // Add an indent to the text
  },
  leftHalf: {
    width: '40%',
    height: '100%',
    backgroundColor: '#AEE7EC',
    display: 'flex',
    flexDirection: 'column', // Align items in a column
    justifyContent: 'flex-start', // Align items to the top
    fontSize: '54px', // Adjust font size as needed
    fontWeight: 'bold',
    color: '#1488DB',
    fontFamily: 'Roboto, sans-serif',
  },
  rightHalf: {
    width: '60%',
    height: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column', // Align items in a column
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center', // Align items to the center
    fontSize: '64px', // Adjust font size as needed
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Roboto, sans-serif',
  },

  smallshowpttt: {
    marginLeft: '40px', 
    marginTop: '35px',
    width: '140px', 
    height: '60px',
    backgroundColor: 'white',
    position: 'relative',
    boxShadow: '1px 1px 4px gray', // Đổ bóng ở cạnh dưới và phải                
    borderRadius: '5px',
    cursor:'pointer',
    color: 'black',
    textIndent: '30px',
    fontWeight: 'bold',
  },
  bottomRectangle: {
    width: '100%',
    height:'200px',
    backgroundColor: 'black', // Blue color
    position: 'absolute',
    right: 0, // Align to the right edge
    left: 0, // Align to the top edge
    bottom: 0, // Stretch to the bottom edge
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Roboto, sans-serif',
  },
};
const backgroundImageStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
  filter: 'blur(5px)',
  backgroundColor: 'white'
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
const iconBKStyle = {
  width: '40px',
  height: '40px',
  position: 'absolute',
  top: '15px',
  left: '90px',
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
        <div style={styles.leftHalf}>
            <div style={{ marginLeft: '150px', display: 'inline-block', fontSize: '16px', color: '#1488DB', marginTop: '15px' }}> &lt; Quay lại </div>
            <div style={{ marginLeft: '150px', display: 'inline-block', fontSize: '32px', color: '#032B91', marginTop: '20px',fontWeight:'bold' }}>Đơn hàng hết hạn sau</div>
            <div style={{ marginLeft: '120px', display: 'inline-block', fontSize: '20px', color: '#032B91', marginTop: '90px',fontWeight:'normal' }}>Nhà cung cấp</div>
            <div style={{ marginLeft: '150px', display: 'inline-block', fontSize: '20px', color: 'black', marginTop: '10px',fontWeight:'bold' }}>Đại học Bách Khoa TPHCM</div>
            <div style={{ marginLeft: '120px', display: 'inline-block', fontSize: '20px', color: '#032B91', marginTop: '30px',fontWeight:'normal' }}>Số tiền</div>
            <div style={{ marginLeft: '150px', display: 'inline-block', fontSize: '20px', color: 'black', marginTop: '10px',fontWeight:'bold' }}>xxx.xxx.xxx</div>
            <div style={{ marginLeft: '120px', display: 'inline-block', fontSize: '20px', color: '#032B91', marginTop: '30px',fontWeight:'normal' }}>Thông tin</div>
            <div style={{ marginLeft: '150px', display: 'inline-block', fontSize: '20px', color: 'black', marginTop: '10px',fontWeight:'bold' }}>xxx.xxx.xxx</div>
            <div style={{ marginLeft: '120px', display: 'inline-block', fontSize: '20px', color: '#032B91', marginTop: '30px',fontWeight:'normal' }}>Đơn hàng</div>
            <div style={{ marginLeft: '150px', display: 'inline-block', fontSize: '20px', color: 'black', marginTop: '10px',fontWeight:'bold' }}>xxx.xxx.xxx</div>
            </div>
            <div style={styles.rightHalf}>
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
    </div>
);
}