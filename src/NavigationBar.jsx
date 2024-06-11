import CustomNavLink from "./CustomNavLink";

import React from "react";

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <CustomNavLink to="/">Home</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/addCar">Add Car</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/about">About</CustomNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
