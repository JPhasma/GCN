import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

import './IconBar.scss';

import { FaHome as HomeIcon } from 'react-icons/fa';
import facebook from '../images/IconCrc_Facebook.png';
import twitter from '../images/IconCrc_Twitter.png';
import instagram from '../images/IconCrc_Instagram.png';
import { FaSearch as SearchIcon } from 'react-icons/fa';
import { FiMenu as MenuIcon } from 'react-icons/fi';

export const IconBar = () => {
  const { menuStatus, setMenuStatus } = useContext(DataContext);

  const menuToggle = (e) => {
    e.preventDefault();
    setMenuStatus(!menuStatus); // toggles value for menu open/close
  };

  const searchToggle = (e) => {
    e.preventDefault();
    setMenuStatus(false); // clears main menu if it is open
    // TODO make the Search Box toggle
    alert('TODO make the Search Box toggle');
  };

  return (
    <div className='iconbar'>
      <ul className='iconbar_links'>
        <li>
          <Link to='/'>
            <HomeIcon alt='Home' />
          </Link>
        </li>
        <li>
          <a
            href='https://facebook.com/globalcyclingnetwork'
            target='_blank'
            rel='noreferrer'
          >
            <img src={facebook} alt='Link to GCN Facebook' />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/gcntweet'
            target='_blank'
            rel='noreferrer'
          >
            <img src={twitter} alt='Link to GCN Twitter' />
          </a>
        </li>
        <li>
          <a
            href='https://instagram.com/globalcyclingnetwork/?hl=en'
            target='_blank'
            rel='noreferrer'
          >
            <img src={instagram} alt='Link to GCN Instagram' />
          </a>
        </li>
        {/* <!-- not included google+ as its gone --> */}
        <li>
          <a href='/Search' onClick={searchToggle}>
            <SearchIcon alt='Search' />
          </a>
        </li>
        <li>
          <a href='/Menu' onClick={menuToggle}>
            <MenuIcon alt='Menu Toggle Button' />
          </a>
        </li>
      </ul>
    </div>
  );
};