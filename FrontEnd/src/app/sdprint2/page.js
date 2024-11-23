import Image from 'next/image';
import backgroundImage from '../../../../public/hcmutschool.jpg'; // Ensure this path is correct and the file exists
import iconBK1 from '../../../..//public/HCMUT_official_logo.png'; // Ensure this path is correct and the file exists

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
        width: '1000px',
        height: '600px',
        backgroundColor: 'white',
        borderRadius: '20px',
        zIndex: 1,
        top: 90, // Align to the top edge
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
    width: '30%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    display: 'flex',
    flexDirection: 'column', // Align items in a column
    justifyContent: 'flex-start', // Align items to the top
    fontSize: '54px', // Adjust font size as needed
    fontWeight: 'bold',
    color: '#1488DB',
    fontFamily: 'Roboto, sans-serif',
  },
  rightHalf: {
    width: '70%',
    height: '100%',
    backgroundColor: '#D9D9D9',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column', // Align items in a column
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center', // Align items to the center
    fontSize: '64px', // Adjust font size as needed
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Roboto, sans-serif',
    marginTop: 0,
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
  backgroundColor: '#AEE7EC'
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
        <div style={styles.leftHalf}>
            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '36px', color: 'black', marginTop: '15px' }}>In</div>
            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '12px', color: 'black', marginTop: '5px',fontWeight:'normal' }}>Tổng cộng 10 trang giấy</div>
            <div style={{ 
                marginTop: '20px',
                marginLeft: '15px',
                width: '90%', 
                border: '0.5px solid rgba(0, 0, 0, 0.7)', 
                position: 'relative'
            }}> </div>
            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '16px', color: 'black', marginTop: '10px' }}>Máy in</div>
            <select style={{ marginLeft: '30px', marginTop: '10px', padding: '3px',width:'200px', fontSize: '16px', borderRadius: '5px', border: '0.5px solid rgba(0, 0, 0, 0.3)',backgroundColor:'white',color:'black' }}>
                    <option value="printer1">Printer 1</option>
                    <option value="printer2">Printer 2</option>
                    <option value="printer3">Printer 3</option>
            </select>
            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '16px', color: 'black', marginTop: '10px' }}>Số bản</div>
            <select style={{ marginLeft: '30px', marginTop: '10px', padding: '3px',width:'200px', fontSize: '16px', borderRadius: '5px', border: '0.5px solid rgba(0, 0, 0, 0.3)',backgroundColor:'white',color:'black' }}>
                    <option value="printer1">Printer 1</option>
                    <option value="printer2">Printer 2</option>
                    <option value="printer3">Printer 3</option>
            </select>
            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '16px', color: 'black', marginTop: '10px' }}>Thiết lập in</div>
            <select style={{ marginLeft: '30px', marginTop: '10px', padding: '3px',width:'200px', fontSize: '16px', borderRadius: '5px', border: '0.5px solid rgba(0, 0, 0, 0.3)',backgroundColor:'white',color:'black' }}>
                    <option value="printer1">In 1 mặt</option>
                    <option value="printer2">In 2 mặt</option>
            </select>
            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '16px', color: 'black', marginTop: '10px' }}>Chiều in văn bản</div>
            <select style={{ marginLeft: '30px', marginTop: '10px', padding: '3px',width:'200px', fontSize: '16px', borderRadius: '5px', border: '0.5px solid rgba(0, 0, 0, 0.3)',backgroundColor:'white',color:'black' }}>
                    <option value="printer1">Dọc</option>
                    <option value="printer2">Ngang</option>
            </select>
            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '16px', color: 'black', marginTop: '10px' }}>Khổ giấy</div>
            <select style={{ marginLeft: '30px', marginTop: '10px', padding: '3px',width:'200px', fontSize: '16px', borderRadius: '5px', border: '0.5px solid rgba(0, 0, 0, 0.3)',backgroundColor:'white',color:'black' }}>
                    <option value="printer1">A4</option>
                    <option value="printer2">A3</option>
                    <option value="printer2">A5</option>
            </select>
            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '16px', color: 'black', marginTop: '10px' }}>Màu</div>
            <select style={{ marginLeft: '30px', marginTop: '10px', padding: '3px',width:'200px', fontSize: '16px', borderRadius: '5px', border: '0.5px solid rgba(0, 0, 0, 0.3)',backgroundColor:'white',color:'black' }}>
                    <option value="printer1">Trắng đen</option>
                    <option value="printer2">Màu</option>
            </select>
            <div style={{ 
                marginTop: '20px',
                marginLeft: '15px',
                width: '90%', 
                border: '0.5px solid rgba(0, 0, 0, 0.7)', 
                position: 'relative'
            }}> </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button style={{ ...styles.button, padding: '7px', width: '80px', marginTop: '15px', borderRadius: '6px', marginLeft: '40px' }}>In</button>
                <button style={{ ...styles.button, padding: '7px', width: '80px', marginTop: '15px', borderRadius: '6px', marginLeft: '50px',backgroundColor:'white',border: '2px solid #1488DB', color:'#1488DB' }}>Quay lại</button>
            </div>

            </div>
            <div style={styles.rightHalf}>
            <div style={{ 
                marginTop: '30px',
                width: '60%', 
                height: '90%',
                border: '1px solid white', 
                backgroundColor: 'white',
                position: 'relative'
            }}> </div>

            </div>
        </div>
    </div>
);
}