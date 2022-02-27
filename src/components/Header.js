import { Link } from 'react-router-dom';
import { Nav } from './Nav';

import './Header.scss';
import GCN from '../images//GCNLogoTxt.svg';

export const Header = () => {
  return (
    <header>
      <div id='topbar'>
        <div className='container'>
          <Link to='/' id='logo'>
            <img src={GCN} alt='Global Cycling Network' />
          </Link>
          <div className='topbar_nav'>
            <Link to='/Events'>Events</Link>
            <Link to='/Club'>Club</Link>
            <Link to='https://shop.globalcyclingnetwork.com/' target='_blank'>
              Shop
            </Link>
            <Link
              to='https://www.youtube.com/subscription_center?add_user=globalcyclingnetwork'
              target='_blank'
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  );
};
