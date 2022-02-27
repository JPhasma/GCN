import { Nav } from './Nav';

import './Header.scss';

export const Header = () => {
  return (
    <header>
      <div id='topbar'>
        <div className='container'>
          <h1>
            <a href='/'>GCN</a>
          </h1>
        </div>
      </div>
      <Nav />
    </header>
  );
};
