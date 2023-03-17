import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SocialLinksLg from "../components/SocialLinksLg";

const Layout = () => {
  return (
    <>
      <Navbar />
      <SocialLinksLg />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
