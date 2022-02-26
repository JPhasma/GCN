import { DataContextProvider } from '../contexts/DataContext';

import { Header } from '../components/Header';

export const Layout = () => {
  return (
    <div>
      <DataContextProvider>
        <Header />
      </DataContextProvider>
    </div>
  );
};
