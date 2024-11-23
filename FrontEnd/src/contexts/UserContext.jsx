"use client";
import React, { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);

// UserContext provider component
export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("student");  // Default role, can be "student" or "spso"

  const updateUserRole = (role) => {
    setUserRole(role);
  };

  return (
    <UserContext.Provider value={{ userRole, updateUserRole }}>
      {children}
    </UserContext.Provider>
  );
};
