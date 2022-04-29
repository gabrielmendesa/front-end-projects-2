import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

export default function Header2(props) {
  const { titleName } = props;
  return (
    <header className="header2-icons">
      <Link to="/profile">
        <img src={ profileIcon } alt="Logo-profile" data-testid="profile-top-btn" />
      </Link>
      <div data-testid="page-title">{titleName}</div>
    </header>
  );
}
Header2.propTypes = {
  titleName: PropTypes.string.isRequired,
};
