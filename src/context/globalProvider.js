import React, { useState } from 'react';
import PropTypes from 'prop-types';
import globalContext from './globalContext';

export default function GlobalProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  const context = { recipes, setRecipes };

  return (
    <globalContext.Provider value={ context }>
      { children }
    </globalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
