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
        height: '450px',
        backgroundColor: '#F4FCFF',
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
    width: '60%',
    height: '100%',
    backgroundColor: '#F4FCFF',
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
    width: '40%',
    height: '100%',
    backgroundColor: '#F4FCFF',
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
};
const backgroundImageStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
  filter: 'blur(5px)',
  backgroundColor: '#F4FCFF'
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
            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '16px', color: '#1488DB', marginTop: '5px' }}> &lt; Quay lại </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '24px', color: 'black', marginTop: '50px' }}>Chọn khổ giấy: </div>
            <button style={{ ...styles.button, padding: '5px', width: '60px', marginTop: '50px', borderRadius: '6px', marginLeft: '50px',backgroundColor:'white',border: '2px solid #1488DB', color:'#1488DB' }}>A3</button>
            <button style={{ ...styles.button, padding: '5px', width: '60px', marginTop: '50px', borderRadius: '6px', marginLeft: '50px',backgroundColor:'white',border: '2px solid #1488DB', color:'#1488DB' }}>A4</button>
            <button style={{ ...styles.button, padding: '5px', width: '60px', marginTop: '50px', borderRadius: '6px', marginLeft: '50px',backgroundColor:'white',border: '2px solid #1488DB', color:'#1488DB' }}>A5</button>
            </div>


            <div style={{ marginLeft: '30px', display: 'inline-block', fontSize: '32px', color: 'black', marginTop: '50px',fontWeight:'bold' }}>Đơn hàng của bạn</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '250px', display: 'inline-block', fontSize: '14px', color: 'gray', marginTop: '15px' }}>Số lượng: </div>
            <div style={{ marginLeft: '50px', display: 'inline-block', fontSize: '14px', color: 'gray', marginTop: '15px' }}>Gía tiền: </div>
            </div>


            <div style={{ 
                marginTop: '230px',
                marginLeft: '15px',
                width: '90%', 
                border: '0.5px solid rgba(0, 0, 0, 0.7)', 
                position: 'relative'
            }}> </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '50px', display: 'inline-block', fontSize: '20px', color: 'black', marginTop: '15px' }}>Tổng cộng: </div>
            </div>

            </div>
            <div style={styles.rightHalf}>
            <div style={{ 
                marginTop: '30px',
                width: '100%', 
                height: '100%',
                backgroundColor: 'white',
                position: 'relative',
                boxShadow: '2px 2px 6px gray',
                textAlign: 'left',
            }}>
              <div style={{ marginLeft: '40px', fontSize: '24px', color: '#032B91', marginTop: '30px',fontWeight:'bold'}}>Phương thức thanh toán</div>
              <div style={{ marginLeft: '40px', fontSize: '16px', color: 'black',marginTop:'20px',fontWeight:'bold' }}>Chọn phương thức thanh toán</div>
              <button style={styles.smallshowpttt}>Visa</button>
              <button style={styles.smallshowpttt}>MasterCard</button>
              <button style={styles.smallshowpttt}>MoMo</button>
              <button style={styles.smallshowpttt}>Internet Banking</button>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', marginTop: '35px' }}>
              <button style={{ ...styles.button, padding: '7px', width: '320px', borderRadius: '6px' }}>Xác nhận</button>
              <button style={{ ...styles.button, padding: '7px', width: '320px',marginTop:'10px', borderRadius: '6px', backgroundColor: 'white', border: '2px solid #1488DB', color: '#1488DB' }}>Quay lại trang chủ</button>
</div>
      </div>

            </div>
        </div>
    </div>
);
}