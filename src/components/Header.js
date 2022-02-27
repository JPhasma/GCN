import { Nav } from './Nav';

import './Header.scss';
import GCN from '../images//GCNLogoTxt.svg';

export const Header = () => {
  return (
    <header>
      <div id='topbar'>
        <div className='container'>
          <a href='/' id='logo'>
            <img src={GCN} alt='Global Cycling Network' />
          </a>
        </div>
      </div>
      <Nav />
    </header>
  );
};
