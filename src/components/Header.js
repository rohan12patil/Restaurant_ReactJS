import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/restaurant.png';

export const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img src={logo}></img>
      </div>
      <div className='navbar'>
        <ul>
          <li>
            <Link to='/'> Home</Link>
          </li>
          <li>
            <Link to='/about'> About</Link>
          </li>
          <li>
            <Link to='/contact'> Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
