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

const RestaurantCard = () => {
  return (
    <div className='res-card'>
      <h3>Taste of India</h3>
      <img src='https://www.mytasteofindia.com/site/assets/images/uploads/69_4_c677058d84f8_o.jpg'></img>
      <h3>Biryani, Curries & much more</h3>
      <h4>4.6 Stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search-container'>Search</div>
      <div className='restaurant-container'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
