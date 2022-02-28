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
        <p className='todo_msg'>
          TODO:
          <small>
            {' '}
            ran out of time, but search was to be positioned in topbar and nav
            just horizontal as a styled unordered list
          </small>
        </p>
        <NavList />
      </nav>
    </div>
  );
};
