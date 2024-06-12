import CustomNavLink from "./CustomNavLink";
import "./navbar.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";

const NavigationBar = () => {
  return (
    <>
      <ToastContainer />
      <nav>
        <ul>
          <li>
            <CustomNavLink to="/">Login Page</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/addCar">Add Car</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/DisplayCars">Display Cars</CustomNavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
