import React from "react";
import AppNavBar from "./AppNavBar";
import Footer from "../layout/Footer";
const Layout = (props) => {
  return (
    <div>
      <AppNavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
