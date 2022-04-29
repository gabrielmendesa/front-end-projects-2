import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header(props) {
  const { titleName } = props;
  const [showFilter, setShowFilter] = useState(false);

  return (
    <header className="header-icons">
      <Link to="/profile">
        <img src={ profileIcon } alt="Logo-profile" data-testid="profile-top-btn" />
      </Link>
      <div data-testid="page-title">{titleName}</div>
      <button
        type="button"
        // data-testid="search-input"
        onClick={ () => setShowFilter(!showFilter) }
      >
        <img src={ searchIcon } alt="Logo-search" data-testid="search-top-btn" />
      </button>
      {showFilter
        && <SearchBar /> }
    </header>
  );
}
Header.propTypes = {
  titleName: PropTypes.string.isRequired,
};
