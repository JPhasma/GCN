import React, { useState, useEffect, createContext } from 'react';
// import axios from 'axios';

// import the sample data
import ResultsSet from '../data/data.json';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  // set up context api states to share between context components
  const [videoData, setVideoData] = useState([]);
  const [menuStatus, setMenuStatus] = useState(false);
  const [searchboxStatus, setSearchboxStatus] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState('');

  // JSON video data
  // useEffect(() => {
  //   axios
  //     // issue with CORS policy so pulled in localy for now
  //     // .get('https://www.globalcyclingnetwork.com/api/devtask')
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error('Error retrieving the JSON data from API');
  //     });
  // });

  useEffect(() => {
    setVideoData(ResultsSet);
  }, [videoData]);

  // return DataContext
  return (
    <DataContext.Provider
      value={{
        videoData,
        menuStatus,
        setMenuStatus,
        searchboxStatus,
        setSearchboxStatus,
        searchCriteria,
        setSearchCriteria,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
