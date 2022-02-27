import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import './Header.scss';

export const Header = () => {
  return (
    <header>
      <h1>
        <a href='/'>GCN</a>
      </h1>
      <nav>
        <ul
          class='dropdown menu'
          data-dropdown-menu='encm8n-dropdown-menu'
          role='menubar'
        >
          <li class='dropdown__list dropdown__list--home' role='menuitem'>
            <a class='dropdown__list__item' href='/'>
              Home
            </a>
          </li>
          <li class='dropdown__list' role='menuitem'>
            <a class='dropdown__list__item' href='/category/gcn-show'>
              GCN Show
            </a>
          </li>
          <li class='dropdown__list' role='menuitem'>
            <a class='dropdown__list__item' href='/category/how-to'>
              How To
            </a>
          </li>
          <li class='dropdown__list' role='menuitem'>
            <a
              class='dropdown__list__item'
              href='/category/maintenance-mondays'
            >
              Maintenance
            </a>
          </li>
          <li class='dropdown__list' role='menuitem'>
            <a class='dropdown__list__item' href='/category/ask-gcn'>
              Ask GCN
            </a>
          </li>
          <li class='dropdown__list' role='menuitem'>
            <a class='dropdown__list__item' href='/category/train-with-gcn'>
              Training{' '}
            </a>
          </li>
          <li class='dropdown__list' role='menuitem'>
            <a class='dropdown__list__item' href='/category/features'>
              Features
            </a>
          </li>
          <li class='dropdown__list' role='menuitem'>
            <a class='dropdown__list__item' href='/category/top-10s'>
              Top 10s
            </a>
          </li>
          <li class='dropdown__list' role='menuitem'>
            <a class='dropdown__list__item' href='/category/gcn-racing'>
              GCN Racing
            </a>
          </li>
          <li class='dropdown__list' role='menuitem'>
            <a class='dropdown__list__item' href='/category/gcn-tech'>
              GCN Tech
            </a>
          </li>
          <li class='dropdown__list dropdown__list--mobile' role='menuitem'>
            <a class='dropdown__list__item' href='/presenters'>
              Presenters{' '}
            </a>
          </li>
          <li class='dropdown__list dropdown__list--mobile' role='menuitem'>
            <a class='dropdown__list__item' href='/presenters/conor-dunne'>
              Conor Dunne
            </a>
          </li>
          <li class='dropdown__list dropdown__list--mobile' role='menuitem'>
            <a class='dropdown__list__item' href='/presenters/daniel-lloyd'>
              Daniel Lloyd
            </a>
          </li>
          <li class='dropdown__list dropdown__list--mobile' role='menuitem'>
            <a class='dropdown__list__item' href='/presenters/james-lw'>
              James Lowsley-Williams
            </a>
          </li>
          <li class='dropdown__list dropdown__list--mobile' role='menuitem'>
            <a class='dropdown__list__item' href='/presenters/jon-cannings'>
              Jon Cannings
            </a>
          </li>
          <li class='dropdown__list dropdown__list--mobile' role='menuitem'>
            <a class='dropdown__list__item' href='/presenters/manon-lloyd'>
              Manon Lloyd
            </a>
          </li>
          <li class='dropdown__list dropdown__list--mobile' role='menuitem'>
            <a
              class='dropdown__list__item'
              href='/presenters/oliver-bridgewood'
            >
              Oliver Bridgewood
            </a>
          </li>
          <li class='dropdown__list dropdown__list--mobile' role='menuitem'>
            {' '}
            <a class='dropdown__list__item' href='/presenters/simon-richardson'>
              Simon Richardson
            </a>
          </li>
          <li class='dropdown__list dropdown__list--mobile' role='menuitem'>
            {' '}
            <a class='dropdown__list__item' href='/presenters/tom-last'>
              Tom Last
            </a>
          </li>
          <li
            class='dropdown__list dropdown__list--submenu is-dropdown-submenu-parent opens-right'
            role='menuitem'
            aria-haspopup='true'
            aria-label='Presenters'
          >
            <a
              class='dropdown__list__item dropdown__list__item--submenu'
              href='/presenters'
            >
              Presenters
            </a>
            <ul
              class='menu dropdown__list__submenu is-dropdown-submenu submenu first-sub vertical'
              data-submenu=''
              role='menu'
            >
              <li
                class='dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item'
                role='menuitem'
              >
                <a
                  class='dropdown__list__submenulist__item'
                  href='/presenters/conor-dunne'
                >
                  Conor Dunne
                </a>
              </li>
              <li
                class='dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item'
                role='menuitem'
              >
                <a
                  class='dropdown__list__submenulist__item'
                  href='/presenters/daniel-lloyd'
                >
                  Daniel Lloyd
                </a>
              </li>
              <li
                class='dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item'
                role='menuitem'
              >
                <a
                  class='dropdown__list__submenulist__item'
                  href='/presenters/james-lw'
                >
                  James Lowsley-Williams
                </a>
              </li>
              <li
                class='dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item'
                role='menuitem'
              >
                <a
                  class='dropdown__list__submenulist__item'
                  href='/presenters/jon-cannings'
                >
                  Jon Cannings
                </a>
              </li>
              <li
                class='dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item'
                role='menuitem'
              >
                <a
                  class='dropdown__list__submenulist__item'
                  href='/presenters/manon-lloyd'
                >
                  Manon Lloyd
                </a>
              </li>
              <li
                class='dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item'
                role='menuitem'
              >
                <a
                  class='dropdown__list__submenulist__item'
                  href='/presenters/oliver-bridgewood'
                >
                  Oliver Bridgewood
                </a>
              </li>
              <li
                class='dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item'
                role='menuitem'
              >
                {' '}
                <a
                  class='dropdown__list__submenulist__item'
                  href='/presenters/simon-richardson'
                >
                  Simon Richardson
                </a>
              </li>
              <li
                class='dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item'
                role='menuitem'
              >
                {' '}
                <a
                  class='dropdown__list__submenulist__item'
                  href='/presenters/tom-last'
                >
                  Tom Last{' '}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
