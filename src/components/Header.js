import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import { Link } from 'react-router-dom';
import { Nav } from './Nav';

import './Header.scss';
import GCN from '../images//GCNLogoTxt.svg';
import facebook from '../images/IconCrc_Facebook.png';
import twitter from '../images/IconCrc_Twitter.png';
import instagram from '../images/IconCrc_Instagram.png';

export const Header = () => {
  const { setMenuStatus, setSearchboxStatus, setSearchCriteria } =
    useContext(DataContext);

  const clearAll = () => {
    setSearchboxStatus(false); // clears Search Box
    setMenuStatus(false); // clears main menu
    setSearchCriteria(''); // clears search string
  };

  return (
    <header>
      <div id='topbar'>
        <div className='container'>
          <Link to='/' id='logo' onClick={clearAll}>
            <img src={GCN} alt='Global Cycling Network' />
          </Link>
          <div className='social_container'>
            {' '}
            <a
              href='https://facebook.com/globalcyclingnetwork'
              target='_blank'
              rel='noreferrer'
              className='topbar_social'
            >
              <img src={facebook} alt='Link to GCN Facebook' />
            </a>
            <a
              href='https://twitter.com/gcntweet'
              target='_blank'
              rel='noreferrer'
              className='topbar_social'
            >
              <img src={twitter} alt='Link to GCN Twitter' />
            </a>
            <a
              href='https://instagram.com/globalcyclingnetwork/?hl=en'
              target='_blank'
              rel='noreferrer'
              className='topbar_social'
            >
              <img src={instagram} alt='Link to GCN Instagram' />
            </a>
          </div>
          <div className='topbar_nav'>
            <Link to='/Events' onClick={clearAll}>
              Events
            </Link>
            <Link to='/Club' onClick={clearAll}>
              Club
            </Link>
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
