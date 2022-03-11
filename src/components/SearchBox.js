import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import './SearchBox.scss';

export const SearchBox = () => {
  const { searchboxStatus, searchCriteria, setSearchCriteria } =
    useContext(DataContext);

  const updateSearch = (newValue) => {
    setSearchCriteria(newValue);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    alert('searching: ' + searchCriteria); // using alert temp for prototyping
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      searchHandler(e);
    }
  };

  return (
    <div
      id='searchbox'
      className={searchboxStatus === true ? 'show_search' : 'hide_search'}
    >
      <input
        type='text'
        placeholder='Search fo videos'
        onChange={(e) => updateSearch(e.target.value)}
        value={searchCriteria}
        onKeyPress={enterHandler}
      />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};
