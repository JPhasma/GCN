import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import './Nav.scss';

import { IconBar } from './IconBar';
import { NavList } from './NavList';

export const Nav = () => {
  const { menuStatus } = useContext(DataContext);

  return (
    <div>
      <nav className={menuStatus === true ? '' : 'hide_menu'}>
        <IconBar />
        <NavList />
      </nav>
    </div>
  );
};
