import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import './SearchBox.scss';

export const SearchBox = () => {
  const { searchboxStatus, setSearchboxStatus } = useContext(DataContext);
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchboxStatus);
    alert('searching: ');
  };
  return (
    <div
      id='searchbox'
      className={searchboxStatus === true ? 'show_search' : 'hide_search'}
    >
      <input type='text' placeholder='Search fo videos' />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};
