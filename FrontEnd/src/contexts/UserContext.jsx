"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Initialize the state from localStorage on load
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUserRole = localStorage.getItem("userRole");

    if (storedIsLoggedIn === "true" && storedUserRole) {
      setIsLoggedIn(true);
      setUserRole(storedUserRole);
    }
  }, []);

  const login = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);

    // Save to localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", role);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);

    // Clear from localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the context
export const useUser = () => useContext(UserContext);
