import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export const Header = () => {
  const { videoData } = useContext(DataContext);

  console.log('videoData', videoData);

  return (
    <header>
      <h1>GCN</h1>
    </header>
  );
};
