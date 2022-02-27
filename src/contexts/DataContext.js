import React, { useState, useEffect, createContext } from 'react';
// import axios from 'axios';

// import the sample data
import ResultsSet from '../data/data.json';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  // set up context api states to share between context components
  const [videoData, setVideoData] = useState([]);
  const [menuStatus, setMenuStatus] = useState(false);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
