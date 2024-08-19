import logo from '../../assets/imgs/restaurant.png';

export const Header = () => {
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
