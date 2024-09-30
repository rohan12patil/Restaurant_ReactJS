import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/restaurant.png';
import { useOnlineStatus } from '../utils/useOnlineStatus';

export const Header = () => {
  const isOnline = useOnlineStatus();
  return (
    <div className='header'>
      <div className='logo-container'>
        <img src={logo}></img>
      </div>
      <div className='navbar'>
        <ul>
          <li>{isOnline ? <span>🟢</span>:<span> 🛑 </span>}</li>
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
