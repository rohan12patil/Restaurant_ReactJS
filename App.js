import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/imgs/restaurant.png';
/**
 *
 * Header
 *  - Logo
 *  - Navbar list
 * Body
 *  - Search Bar
 *  - Restaurant Container
 *  - Restaurant Card
 *
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img src={logo}></img>
      </div>
      <div className='navbar'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
