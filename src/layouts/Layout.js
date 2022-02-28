import { Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { VideoList } from '../components/VideoList';
import { VideoPage } from '../components/VideoPage';
import { Page } from '../components/Page';
import { Footer } from '../components/Footer';

import './Layout.scss';

// Layout issue:
// if small device is viewing in landscape,
// nav dropdown can't be scrolled
// determine viewport and if small device
// add layout class to allow scrolling
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
const mobileNavHeight = 700;
console.log(vh);
if (vh < mobileNavHeight) console.log('LET SCROLL');

export const Layout = () => {
  return (
    <div className={vh < mobileNavHeight ? 'let_scroll' : 'fix_tablet'}>
      <Header />
      <main className='main_content'>
        <Routes>
          <Route path='/' element={<VideoList />}></Route>
          <Route path='/video/:slug' element={<VideoPage />}></Route>
          <Route path='*' element={<Page />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
