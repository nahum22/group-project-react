// NavLinkModule.js
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Custom NavLink component for consistent styling and behavior across the app.
 *
 * @param {{ to, children }} props - Standard NavLink props plus any additional props you wish to pass.
 */
const CustomNavLink = ({ to, children,...props }) => {
  return (
    <NavLink {...props} to={to} className={({ isActive }) => isActive? 'active' : ''}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
