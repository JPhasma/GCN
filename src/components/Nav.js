import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import './Nav.scss';

import facebook from '../images/IconCrc_Facebook.png';
import twitter from '../images/IconCrc_Twitter.png';
import instagram from '../images/IconCrc_Instagram.png';

export const Nav = () => {
  return (
    <nav>
      <div id='iconbar'>
        <ul className='iconbar_social'>
          <li>
            <a href='/'>H</a>
          </li>
          <li>
            <a
              href='https://facebook.com/globalcyclingnetwork'
              target='_blank'
              rel='noreferrer'
            >
              <img src={facebook} alt='Link to GCN Facebook' />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/gcntweet'
              target='_blank'
              rel='noreferrer'
            >
              <img src={twitter} alt='Link to GCN Twitter' />
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/globalcyclingnetwork/?hl=en'
              target='_blank'
              rel='noreferrer'
            >
              <img src={instagram} alt='Link to GCN Instagram' />
            </a>
          </li>
        </ul>
      </div>

      <ul className='container' className='main_nav'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/category/gcn-show'>GCN Show</a>
        </li>
        <li>
          <a href='/category/how-to'>How To</a>
        </li>
        <li>
          <a href='/category/maintenance-mondays'>Maintenance</a>
        </li>
        <li>
          <a href='/category/ask-gcn'>Ask GCN</a>
        </li>
        <li>
          <a href='/category/train-with-gcn'>Training </a>
        </li>
        <li>
          <a href='/category/features'>Features</a>
        </li>
        <li>
          <a href='/category/top-10s'>Top 10s</a>
        </li>
        <li>
          <a href='/category/gcn-racing'>GCN Racing</a>
        </li>
        <li>
          <a href='/category/gcn-tech'>GCN Tech</a>
        </li>
        <li>
          <a href='/presenters'>Presenters</a>
          <ul>
            <li>
              <a href='/presenters/conor-dunne'>Conor Dunne</a>
            </li>
            <li>
              <a href='/presenters/daniel-lloyd'>Daniel Lloyd</a>
            </li>
            <li>
              <a href='/presenters/james-lw'>James Lowsley-Williams</a>
            </li>
            <li>
              <a href='/presenters/jon-cannings'>Jon Cannings</a>
            </li>
            <li>
              <a href='/presenters/manon-lloyd'>Manon Lloyd</a>
            </li>
            <li>
              <a href='/presenters/oliver-bridgewood'>Oliver Bridgewood</a>
            </li>
            <li>
              <a href='/presenters/simon-richardson'>Simon Richardson</a>
            </li>
            <li>
              <a href='/presenters/tom-last'>Tom Last</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
