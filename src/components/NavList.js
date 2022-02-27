import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

// Presenter images
import Conor from '../images/presenters/Conor.jpeg';
import Dan from '../images/presenters/Dan.jpeg';
import James from '../images/presenters/James.jpeg';
import Jon from '../images/presenters/Jon.jpeg';
import Manon from '../images/presenters/Manon.jpeg';
import Si from '../images/presenters/Si.jpeg';
import Oli from '../images/presenters/Oli.jpeg';
import Tom from '../images/presenters/Lasty.jpeg';

import './NavList.scss';

import { Link } from 'react-router-dom';

export const NavList = () => {
  const { setMenuStatus } = useContext(DataContext);

  const closeMenu = (e) => {
    setMenuStatus(false);
  };
  return (
    <ul className='container' className='main_nav'>
      <li>
        <Link onClick={closeMenu} className='anchor_item' to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link onClick={closeMenu} className='anchor_item' to='/Channels'>
          Content Channels
        </Link>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/category/gcn-show'
            >
              GCN Show
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/category/how-to'
            >
              How To
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/category/maintenance-mondays'
            >
              Maintenance
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/category/ask-gcn'
            >
              Ask GCN
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/category/train-with-gcn'
            >
              Training{' '}
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/category/features'
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/category/top-10s'
            >
              Top 10s
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/category/gcn-racing'
            >
              GCN Racing
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/category/gcn-tech'
            >
              GCN Tech
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link onClick={closeMenu} className='anchor_item' to='/presenters'>
          Presenters
        </Link>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/presenters/conor-dunne'
            >
              <img src={Conor} alt='Presenter' />
              Conor Dunne
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/presenters/daniel-lloyd'
            >
              <img src={Dan} alt='Presenter' />
              Daniel Lloyd
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/presenters/james-lw'
            >
              <img src={James} alt='Presenter' />
              James Lowsley-Williams
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/presenters/jon-cannings'
            >
              <img src={Jon} alt='Presenter' />
              Jon Cannings
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/presenters/manon-lloyd'
            >
              <img src={Manon} alt='Presenter' />
              Manon Lloyd
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/presenters/oliver-bridgewood'
            >
              <img src={Oli} alt='Presenter' />
              Oliver Bridgewood
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/presenters/simon-richardson'
            >
              <img src={Si} alt='Presenter' />
              Simon Richardson
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className='anchor_item'
              to='/presenters/tom-last'
            >
              <img src={Tom} alt='Presenter' />
              Tom Last
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
