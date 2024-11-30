"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import NavbarSpso from "@/components/navbarSpso/NavbarSpso";
import { UserProvider, useUser } from "@/contexts/UserContext";
import { EdgeStoreProvider } from "@/lib/edgestore.ts";  // Import EdgeStoreProvider
import { UrlProvider } from "@/contexts/UrlContext";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <EdgeStoreProvider>
      <UserProvider>
        <UrlProvider> 
          <MainLayout>{children}</MainLayout>
        </UrlProvider>
      </UserProvider>
    </EdgeStoreProvider>
  );
}

const MainLayout = ({ children }) => {
  const { userRole } = useUser();  
  return (
    <html lang="en">
      <body className={roboto.className}>
        {userRole === "student" ? (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        ) : (
          <div className="container">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="content">
              <NavbarSpso />
              {children}
            </div>
          </div>
        )}
      </body>
    </html>
  );
};