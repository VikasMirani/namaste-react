import React from 'react';

import { LOGO_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button className='login'>login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;