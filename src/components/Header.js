import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/Header.css';

export default function Header({ titleName }) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <header className="header-icons">
        <Link to="/profile">
          <img src={ profileIcon } alt="Logo-profile" data-testid="profile-top-btn" />
        </Link>
        <h3
          data-testid="page-title"
          className="screen-name"
        >
          {titleName}
        </h3>
        <button
          type="button"
          // data-testid="search-input"
          onClick={ () => setShowFilter(!showFilter) }
          className="header-search"
        >
          <img src={ searchIcon } alt="Logo-search" data-testid="search-top-btn" />
        </button>
      </header>
      {showFilter
        && <SearchBar /> }
    </div>

  );
}
Header.propTypes = {
  titleName: PropTypes.string.isRequired,
};
