import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export const Header = () => {
  return (
    <header>
      <h1>
        <a href='/'>GCN</a>
      </h1>
    </header>
  );
};
