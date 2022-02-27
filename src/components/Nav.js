import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import './Nav.scss';

import { IconBar } from './IconBar';
import { NavList } from './NavList';

export const Nav = () => {
  return (
    <nav>
      <IconBar />
      <NavList />
    </nav>
  );
};
