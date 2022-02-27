import './NavList.scss';

import { Link } from 'react-router-dom';

export const NavList = () => {
  return (
    <ul className='container' className='main_nav'>
      <li>
        <Link className='anchor_item' to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className='anchor_item' to='/category/gcn-show'>
          GCN Show
        </Link>
      </li>
      <li>
        <Link className='anchor_item' to='/category/how-to'>
          How To
        </Link>
      </li>
      <li>
        <Link className='anchor_item' to='/category/maintenance-mondays'>
          Maintenance
        </Link>
      </li>
      <li>
        <Link className='anchor_item' to='/category/ask-gcn'>
          Ask GCN
        </Link>
      </li>
      <li>
        <Link className='anchor_item' to='/category/train-with-gcn'>
          Training{' '}
        </Link>
      </li>
      <li>
        <Link className='anchor_item' to='/category/features'>
          Features
        </Link>
      </li>
      <li>
        <Link className='anchor_item' to='/category/top-10s'>
          Top 10s
        </Link>
      </li>
      <li>
        <Link className='anchor_item' to='/category/gcn-racing'>
          GCN Racing
        </Link>
      </li>
      <li>
        <Link className='anchor_item' to='/category/gcn-tech'>
          GCN Tech
        </Link>
      </li>
      <li>
        <Link className='anchor_item' to='/presenters'>
          Presenters
        </Link>
        <ul>
          <li>
            <Link className='anchor_item' to='/presenters/conor-dunne'>
              Conor Dunne
            </Link>
          </li>
          <li>
            <Link className='anchor_item' to='/presenters/daniel-lloyd'>
              Daniel Lloyd
            </Link>
          </li>
          <li>
            <Link className='anchor_item' to='/presenters/james-lw'>
              James Lowsley-Williams
            </Link>
          </li>
          <li>
            <Link className='anchor_item' to='/presenters/jon-cannings'>
              Jon Cannings
            </Link>
          </li>
          <li>
            <Link className='anchor_item' to='/presenters/manon-lloyd'>
              Manon Lloyd
            </Link>
          </li>
          <li>
            <Link className='anchor_item' to='/presenters/oliver-bridgewood'>
              Oliver Bridgewood
            </Link>
          </li>
          <li>
            <Link className='anchor_item' to='/presenters/simon-richardson'>
              Simon Richardson
            </Link>
          </li>
          <li>
            <Link className='anchor_item' to='/presenters/tom-last'>
              Tom Last
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
