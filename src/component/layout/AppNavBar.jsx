import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const AppNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="50" />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/RechartPage"
                className="nav-link"
                activeClassName="active"
              >
                Rechart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ImagePdfPage"
                className="nav-link"
                activeClassName="active"
              >
                Image-To-Pdf
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/ExcelFilePage"
                className="nav-link "
                activeClassName="active"
              >
                Excel-File
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/imgCompressorMbPage"
                className="nav-link "
                activeClassName="active"
              >
                Img-Compressor-MB
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/VsCodeEditorPage"
                className="nav-link "
                activeClassName="active"
              >
                Code-Editor
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-info fw-bold" type="submit">
            Lore more
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppNavBar;
