import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

import { SearchBox } from './SearchBox';
import './IconBar.scss';

import { FaHome as HomeIcon } from 'react-icons/fa';
import facebook from '../images/IconCrc_Facebook.png';
import twitter from '../images/IconCrc_Twitter.png';
import instagram from '../images/IconCrc_Instagram.png';
import { FaSearch as SearchIcon } from 'react-icons/fa';
import { FiMenu as MenuIcon } from 'react-icons/fi';

export const IconBar = () => {
  const {
    menuStatus,
    setMenuStatus,
    searchboxStatus,
    setSearchboxStatus,
    setSearchCriteria,
  } = useContext(DataContext);

  const menuToggle = (e) => {
    e.preventDefault();
    setMenuStatus(!menuStatus); // toggles value for menu open/close
    setSearchboxStatus(false); // clears Search Box
    setSearchCriteria('');
  };

  const searchToggle = (e) => {
    e.preventDefault();
    setMenuStatus(false); // clears main menu if it is open
    setSearchboxStatus(!searchboxStatus);
  };

  const clearAll = () => {
    setSearchboxStatus(false); // clears Search Box
    setMenuStatus(false); // clears main menu
    setSearchCriteria(''); // clears search string
  };

  return (
    <div className='iconbar container'>
      <SearchBox />
      <ul className='iconbar_links '>
        <li className='tablet_hide'>
          <Link to='/'>
            <HomeIcon alt='Home' onClick={clearAll} />
          </Link>
        </li>
        <li className='tablet_hide'>
          <a
            href='https://facebook.com/globalcyclingnetwork'
            target='_blank'
            rel='noreferrer'
          >
            <img src={facebook} alt='Link to GCN Facebook' />
          </a>
        </li>
        <li className='tablet_hide'>
          <a
            href='https://twitter.com/gcntweet'
            target='_blank'
            rel='noreferrer'
          >
            <img src={twitter} alt='Link to GCN Twitter' />
          </a>
        </li>
        <li className='tablet_hide'>
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
          <a href='/Search' onClick={searchToggle} id='search_icon'>
            <SearchIcon alt='Search' />
          </a>
        </li>
        <li>
          <a href='/Menu' onClick={menuToggle} id='menu_toggle'>
            <MenuIcon alt='Menu Toggle Button' />
          </a>
        </li>
      </ul>
    </div>
  );
};
