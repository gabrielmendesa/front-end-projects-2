import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import '../styles/Header2.css';

export default function Header2({ titleName }) {
  return (
    <header className="header2-icons">
      <Link to="/profile">
        <img src={ profileIcon } alt="Logo-profile" data-testid="profile-top-btn" />
      </Link>
      <h3 className="screen-name" data-testid="page-title">{titleName}</h3>
    </header>
  );
}
Header2.propTypes = {
  titleName: PropTypes.string.isRequired,
};
