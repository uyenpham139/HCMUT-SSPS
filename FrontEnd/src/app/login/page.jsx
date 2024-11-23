"use client";
import Image from 'next/image';
import styles from './page.module.css';
import printer from '@/assets/printer.png'; 
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // for routes
import { useUser } from "@/contexts/UserContext";  // Import the user context

const Login = () => {
  const [roleSelected, setRoleSelected] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Initialize the router
  const router = useRouter();
  // Access the updateUserRole function from the context
  const { updateUserRole } = useUser();

  const handleRoleSelect = (role) => {
    setRoleSelected(role);
    console.log("Selected role:", role);
  };


  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form behavior (page reload)

    // Simulate the login process (replace with actual logic for authentication)
    const loginSuccessful = true;
    

    if (loginSuccessful) {
      console.log('Login successful!');
      updateUserRole(roleSelected);
      // Navigate based on the role after successful login
      if (roleSelected === 'student') {
        router.push('/'); // Redirect to homepage for students
      } else if (roleSelected === 'spso') {
        router.push('/spso/dashboard'); // Redirect to SPSO dashboard
      }
    } else {
      console.log('Navigating to SPSO dashboard...');
      // Handle login failure here (e.g., show an error message)
      console.log('Login failed');
    }
  };

  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.loginForm}>
          <h2 className={styles.title}>Đăng nhập</h2>

          {/* Select role xong rồi mới đăng nhập bình thường */}
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
              <form action="" method='post' onSubmit={handleSubmit}>
                <div className={styles.inputBox}>
                    <input type="text" className={styles.input} name="username" onChange={(e) => setUsername(e.target.value)} required/>
                    <label htmlFor="username">Tên đăng nhập</label>
                </div>
                <div className={styles.inputBox}>
                    <input type="password" className={styles.input} name="password" onChange={(e) => setPassword(e.target.value)} required/>
                    <label htmlFor="password">Mật khẩu</label>
                </div>
                <button type="submit" className={styles.loginButton} >Đăng nhập</button>
              </form>
            </>
          )}

        </div>
        <div className={styles.text}>
          <h2>Welcome <br />back!</h2>
          <Image src={printer} alt="printer" objectFit="cover" className={styles.printerImg}/>
        </div>
      </div>
    </div>
  );
}

export default Login;