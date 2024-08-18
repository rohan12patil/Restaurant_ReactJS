import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/imgs/restaurant.png';
import { resList } from './data';
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

const imgURL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

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

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, deliveryTime } =
    resData?.info;
  return (
    <div className='res-card'>
      <h3>{name}</h3>
      <img src={imgURL + cloudinaryImageId}></img>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search-container'>Search</div>
      <div className='restaurant-container'>
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
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
