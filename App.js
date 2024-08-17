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

const RestaurantCard = ({ name, cuisine, rating }) => {
  return (
    <div className='res-card'>
      <h3>{name}</h3>
      <img src='https://www.mytasteofindia.com/site/assets/images/uploads/69_4_c677058d84f8_o.jpg'></img>
      <h3>{cuisine}</h3>
      <h4>{rating} Stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search-container'>Search</div>
      <div className='restaurant-container'>
        <RestaurantCard
          name='Taste Of India'
          cuisine='North Indian, Indo-Chinese '
          rating='4.5'
        />
        <RestaurantCard
          name='Bombay Curry'
          cuisine='Indian, Indo-Chinese, Biryani, Kebab  '
          rating='4.2'
        />
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
