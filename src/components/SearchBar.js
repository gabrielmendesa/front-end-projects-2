import React from 'react';

export default function SearchBar() {
  return (
    <div>
      <input type="text" data-testid="search-input" className="search-input" />
      <div>
        <label htmlFor="radio-button1">
          <input
            name="filter-radio"
            type="radio"
            id="radio-button1"
            data-testid="ingredient-search-radio"
          />
          Ingredient
        </label>

        <label htmlFor="radio-button2">
          <input
            name="filter-radio"
            type="radio"
            id="radio-button2"
            data-testid="name-search-radio"
          />
          Name
        </label>
        <label htmlFor="radio-button3">
          <input
            name="filter-radio"
            type="radio"
            id="radio-button3"
            data-testid="first-letter-search-radio"
          />
          First Letter
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>
  );
}
