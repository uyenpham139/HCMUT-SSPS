import styles from './page.module.css';

// function handleUploadClick() {
//   document.getElementById('fileInput').click();
// }

// function handleFileChange(event) {
//   const file = event.target.files[0];
//   if (file) {
//     console.log('File selected:', file.name);
//   }
// }
const LoginSD = ()=> {
return (
    <div style={styles.container}>
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
export default LoginSD;