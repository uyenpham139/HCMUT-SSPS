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
    height: '550px',
    backgroundColor: '#f0f0f0',
    borderRadius: '20px',
    display: 'flex',
    zIndex: 1,
    position: 'absolute', // Ensure it sticks to the top
    top: 120, // Align to the top edge
  },
  button: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#1488DB',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    whiteSpace: 'nowrap', // Prevent text from wrapping
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

const iconBKStyle = {
  width: '35px',
  height: '35px',
  position: 'absolute',
  top: '9px',
  left: '150px',
  zIndex: 1,
  filter: 'blur(0px)',
};

export default function LoginSD() {
  return (
    <div style={styles.container}>
      <div style={backgroundImageStyle}></div>
      <div style={styles.topRectangle}>
        <div style={iconBKStyle}>
          
        </div>
        <div style={{ marginLeft: '200px', marginTop: '15px', display: 'inline-block', fontSize: '24px',fontFamily:'Russo One, sans-serif',fontWeight:'bold' }}>SSPS</div>
        <a href="#" style={{ marginLeft: '500px', marginTop: '15px', display: 'inline-block', fontSize: '16px' }}>Trang chủ</a>
        <a href="#" style={{ marginLeft: '30px', marginTop: '15px', display: 'inline-block', fontSize: '16px' }}>In tài liệu</a>
        <a href="#" style={{ marginLeft: '30px', marginTop: '15px', display: 'inline-block', fontSize: '16px' }}>Lịch sử in</a>
        <a href="#" style={{ marginLeft: '30px', marginTop: '15px', display: 'inline-block', fontSize: '16px' }}>Mua trang in</a>
        <a href="#" style={{ marginLeft: '30px', marginTop: '15px', display: 'inline-block', fontSize: '16px' }}>Liên hệ</a>
      </div>

      <button style={{ ...styles.button, marginLeft: '30px', padding: '10px 30px', borderRadius: '10px', fontSize: '30px', position: 'absolute', bottom: '120px', marginRight:'1000px' }}>In tài liệu</button>
      <div style={{ marginRight: '820px', top:'100px', fontSize: '50px', letterSpacing: '0.05', color:'black', fontWeight: 'bold', fontFamily: 'Inter, sans-serif',lineHeight:'1.5' }}>
        Hệ thống in <br />
        thông minh cho <br />
        sinh viên - <br />
      </div>
      <div style={{ marginRight: '840px', top:'100px', fontSize: '50px', letterSpacing: '0.05', color:'#1488DB', fontWeight: 'bold', fontFamily: 'Inter, sans-serif',lineHeight:'1.5' }}>HCMUT - SSPS</div>
      <div style={{ marginRight: '900px', top:'100px', fontSize: '25px', letterSpacing: '0.05', color:'#143e8d', fontFamily: 'Inter, sans-serif',lineHeight:'1.5' }}>In tiện lợi, học tập dễ dàng</div>
    </div>
  );
}