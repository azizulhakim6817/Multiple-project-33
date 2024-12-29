import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-0">
          Copyright © {new Date().getFullYear()} - All rights reserved by React
          Industries Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
