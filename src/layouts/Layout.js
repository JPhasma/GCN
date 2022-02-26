import { DataContextProvider } from '../contexts/DataContext';

import { Header } from '../components/Header';
import { VideoList } from '../components/VideoList';

export const Layout = () => {
  return (
    <div>
      <DataContextProvider>
        <Header />
        <VideoList />
      </DataContextProvider>
    </div>
  );
};
