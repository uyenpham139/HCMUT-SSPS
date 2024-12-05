"use client";

import Image from 'next/image';
import styles from './page.module.css';
import printer from '@/assets/printer.png';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from "@/contexts/UserContext";

const Login = () => {
  const { login } = useUser(); // Access the login function from the context
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [roleSelected, setRoleSelected] = useState(null); // State for role selection
  const router = useRouter();

  const handleRoleSelect = (role) => {
    setRoleSelected(role);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (response.ok) {
        console.log("Login successful!");
        login(roleSelected); // Update the global session state with the selected role

        if (roleSelected === "student") {
          router.push("/");
        } else if (roleSelected === "spso") {
          router.push("/spso/dashboard");
        }
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.loginForm}>
          <h2 className={styles.title}>Đăng nhập</h2>

          {!roleSelected ? (
            <>
              <div className={styles.options}>
                <p>Đăng nhập tài khoản của bạn: </p>
                <button className={styles.role} onClick={() => handleRoleSelect('student')}>
                  Sinh viên HCMUT
                </button>
                <button className={styles.role} onClick={() => handleRoleSelect('spso')}>
                  SPSO
                </button>
              </div>
            </>
          ) : (
            <>
              <form action="" method="post" onSubmit={handleSubmit}>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    className={styles.input}
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label htmlFor="username">Tên đăng nhập</label>
                </div>
                <div className={styles.inputBox}>
                  <input
                    type="password"
                    className={styles.input}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Mật khẩu</label>
                </div>
                <button type="submit" className={styles.loginButton}>
                  Đăng nhập
                </button>
              </form>
            </>
          )}
        </div>
        <div className={styles.text}>
          <h2>Welcome <br />back!</h2>
          <Image src={printer} alt="printer" objectFit="cover" className={styles.printerImg} />
        </div>
      </div>
    </div>
  );
};

export default Login;
