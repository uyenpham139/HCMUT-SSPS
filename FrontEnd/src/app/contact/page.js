import Image from "next/image";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    overflow: "hidden", // Đảm bảo ảnh nền không kéo dài ngoài khung
    position: "relative", // Cần thiết để `backgroundImageStyle` nằm bên trong
  },
  rightRectangle: {
    width: "500px",
    backgroundColor: "#1488DB", // Blue color
    position: "absolute",
    right: 0, // Align to the right edge
    top: 0, // Align to the top edge
    bottom: 0, // Stretch to the bottom edge
    top: 0, // Align to the top edge
    fontWeight: "bold",
    color: "black",
    fontFamily: "Russo One, sans-serif",
  },

  bottomRectangle: {
    width: "100%",
    height: "150px",
    backgroundColor: "black", // Blue color
    position: "absolute",
    right: 0, // Align to the right edge
    left: 0, // Align to the top edge
    bottom: 0, // Stretch to the bottom edge
    fontWeight: "bold",
    color: "black",
    fontFamily: "Roboto, sans-serif",
  },

  smallrectangle: {
    width: "60px",
    height: "50px",
    backgroundColor: "#1488DB",
    borderRadius: "2px",
    zIndex: 1,
  },
  rectangle: {
    width: "500px",
    height: "400px",
    backgroundColor: "black",
    borderRadius: "20px",
    zIndex: 1,
    top: 110, // Align to the top edge
    right: 300,
    position: "absolute", // Ensure it sticks to the top
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    // Align to the top edge
  },
  button: {
    fontWeight: "bold",
    color: "#FFFFFF",
    backgroundColor: "#1488DB",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    whiteSpace: "nowrap", // Prevent text from wrapping
    textAlign: "left", // Align text to the left
    textIndent: 0, // Add an indent to the text
  },
};

const backgroundImageStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  filter: "blur(5px)",
  backgroundColor: "#F1F6F6",
};

const iconBKStyle = {
  width: "40px",
  height: "40px",
  position: "absolute",
  top: "15px",
  left: "90px",
  zIndex: 1,
  filter: "blur(0px)",
};

export default function LoginSD() {
  return (
    <div style={styles.container}>
      <div style={backgroundImageStyle}></div>
      <div
        style={{
          marginRight: "900px",
          marginTop: "300px",
          fontSize: "50px",
          letterSpacing: "0.05",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Liên Hệ
      </div>
      <div
        style={{
          marginRight: "660px",
          fontSize: "20px",
          letterSpacing: "0.05",
          color: "gray",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.5",
        }}
      >
        Hãy liên hệ với chúng tôi nếu bạn cần trợ giúp. <br />
        Chúng tôi sẽ phản hồi bạn sớm nhất có thể <br />
      </div>
      <input
        type="text"
        placeholder="Họ và Tên"
        style={{
          ...styles.button,
          padding: "20px 80px 20px 10px",
          marginBottom: "20px",
          marginTop: "40px",
          marginRight: "810px",
          borderRadius: "10px",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          border: "2px solid #1488DB",
        }}
      />
      <input
        type="email"
        placeholder="Email"
        style={{
          ...styles.button,
          padding: "20px 80px 20px 10px",
          marginBottom: "20px",
          borderRadius: "10px",
          marginRight: "810px",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          border: "2px solid #1488DB",
        }}
      />
      <input
        type="text"
        placeholder="Tin nhắn"
        style={{
          ...styles.button,
          padding: "20px 80px 20px 10px",
          marginBottom: "500px",
          borderRadius: "10px",
          marginRight: "810px",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          border: "2px solid #1488DB",
        }}
      />
      <button
        style={{
          ...styles.button,
          padding: "10px 40px",
          marginBottom: "-280px",
          borderRadius: "10px",
          marginRight: "810px",
          fontSize: "15px",
          position: "absolute",
        }}
      >
        Gửi
      </button>
      <div style={styles.rightRectangle}></div>

      <div style={styles.rectangle}>
        <div
          style={{
            marginLeft: "80px",
            marginTop: "20px",
            display: "inline-block",
            fontSize: "36px",
            color: "whitesmoke",
          }}
        >
          Thông tin liên hệ
        </div>{" "}
        <br />
        <br />
        <div
          style={{
            marginLeft: "80px",
            marginTop: "20px",
            display: "inline-block",
            fontSize: "16px",
            lineHeight: "1.5",
            color: "whitesmoke",
          }}
        >
          ssps@hcmut.edu.vn
          <br />
          <br />
          +84 0123 456 789 <br /> <br />
          CS1 Đại học Bách Khoa TP.HCM,
          <br />
          Lý Thường Kiệt, Quận 10, TP.HCM <br />
          <br />
          7h30 - 18h, Thứ 2 - Thứ 6
        </div>
      </div>

      <div style={styles.bottomRectangle}>
        <div
          style={{
            marginLeft: "150px",
            marginTop: "20px",
            display: "inline-block",
            fontSize: "16px",
            color: "white",
            marginRight: "500px",
          }}
        >
          Hệ thống in thông minh dành cho
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "inline-block",
            fontSize: "16px",
            color: "white",
            marginRight: "132px",
          }}
        >
          Khám phá
        </div>
        <div
          style={{ display: "inline-block", fontSize: "16px", color: "white" }}
        >
          Liên hệ
        </div>{" "}
        <br />
        <div
          style={{
            marginLeft: "150px",
            marginTop: "5px",
            display: "inline-block",
            fontSize: "16px",
            color: "white",
            marginRight: "577px",
          }}
        >
          sinh viên HCMUT-SSPS
        </div>
        <a
          href="#"
          style={{
            marginTop: "6px",
            display: "inline-block",
            fontSize: "12px",
            color: "white",
            fontWeight: "normal",
            marginRight: "162px",
          }}
        >
          In tài liệu
        </a>
        <a
          href="#"
          style={{
            display: "inline-block",
            fontSize: "12px",
            color: "white",
            fontWeight: "normal",
          }}
        >
          ssps@hcmut.edu.vn
        </a>
        <br />
        <a
          href="#"
          style={{
            marginLeft: "906px",
            marginTop: "6px",
            display: "inline-block",
            fontSize: "12px",
            color: "white",
            fontWeight: "normal",
            marginRight: "158px",
          }}
        >
          Lịch sử in
        </a>
        <a
          href="#"
          style={{
            display: "inline-block",
            fontSize: "12px",
            color: "white",
            fontWeight: "normal",
          }}
        >
          +84 0123 456 789
        </a>
        <br />
        <a
          href="#"
          style={{
            marginLeft: "906px",
            marginTop: "6px",
            display: "inline-block",
            fontSize: "12px",
            color: "white",
            fontWeight: "normal",
            marginRight: "142px",
          }}
        >
          Mua trang in
        </a>
        <a
          href="#"
          style={{
            display: "inline-block",
            fontSize: "12px",
            color: "white",
            fontWeight: "normal",
          }}
        >
          CS1 Đại học Bách Khoa TPHCM, 268
        </a>
        <br />
        <a
          href="#"
          style={{
            marginLeft: "1116px",
            marginTop: "6px",
            display: "inline-block",
            fontSize: "12px",
            color: "white",
            fontWeight: "normal",
          }}
        >
          Lý Thường Kiệt,P.14,Q.10,TPHCM
        </a>
        <br />
      </div>
    </div>
  );
}
