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
        </div>
      </div>
      <Nav />
    </header>
  );
};
