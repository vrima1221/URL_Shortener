import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../img/UrlShortenerLogo.png';

export const Header: React.FC = memo(() => {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img
          className="header__logo"
          src={logo}
          alt="NiceGadgets logo"
        />
      </Link>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              home
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/about" className="nav__link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
});
