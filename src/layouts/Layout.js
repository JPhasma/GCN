import { Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { VideoList } from '../components/VideoList';
import { VideoPage } from '../components/VideoPage';
import { Page } from '../components/Page';
import { Footer } from '../components/Footer';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<VideoList />}></Route>
        <Route path='/video/:slug' element={<VideoPage />}></Route>
        <Route path='*' element={<Page />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};
