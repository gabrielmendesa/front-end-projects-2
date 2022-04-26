import React from 'react';
import PropTypes from 'prop-types';
import globalContext from './globalContext';

export default function GlobalProvider({ children }) {
  const context = {};

  return (
    <globalContext.Provider value={ context }>
      { children }
    </globalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
