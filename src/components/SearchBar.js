import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import globalContext from '../context/globalContext';
import fetchAPI from '../services/fetchAPI';

export default function SearchBar() {
  const { setRecipes } = useContext(globalContext);
  const history = useHistory();
  const [filter, setFilter] = useState('');
  const [valueInput, setValueInput] = useState('');

  function checkURL() {
    const { pathname } = history.location;
    const urlParam = pathname === '/foods' ? 'themealdb' : 'thecocktaildb';
    const ingredientUrl = `https://www.${urlParam}.com/api/json/v1/1/filter.php?i=${valueInput}`;
    const nameUrl = `https://www.${urlParam}.com/api/json/v1/1/search.php?s=${valueInput}`;
    const firstLetter = `https://www.${urlParam}.com/api/json/v1/1/search.php?f=${valueInput}`;

    switch (filter) {
    case 'ingredient':
      return ingredientUrl;
    case 'name':
      return nameUrl;
    case 'firstLetter':
      return valueInput.length > 1
        ? global.alert('Your search must have only 1 (one) character')
        : firstLetter;
    default:
      return valueInput;
    }
  }

  async function handleClick() {
    const { pathname } = history.location;
    const URL = checkURL();
    const recipes = await fetchAPI(URL);

    const check = pathname === '/foods' ? !recipes.meals : !recipes.drinks;

    if (check) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      return;
    }

    setRecipes(recipes);
    if (pathname === '/foods' && recipes.meals.length === 1) {
      history.push(`${pathname}/${recipes.meals[0].idMeal}`);
    } else if (pathname === '/drinks' && recipes.drinks.length === 1) {
      history.push(`${pathname}/${recipes.drinks[0].idDrink}`);
    }
  }

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        className="search-input"
        onChange={ ({ target }) => setValueInput(target.value) }
      />
      <div>
        <label htmlFor="radio-button1">
          <input
            name="filter-radio"
            type="radio"
            id="radio-button1"
            value="ingredient"
            onChange={ ({ target }) => setFilter(target.value) }
            data-testid="ingredient-search-radio"
          />
          Ingredient
        </label>

        <label htmlFor="radio-button2">
          <input
            name="filter-radio"
            type="radio"
            value="name"
            onChange={ ({ target }) => setFilter(target.value) }
            id="radio-button2"
            data-testid="name-search-radio"
          />
          Name
        </label>
        <label htmlFor="radio-button3">
          <input
            name="filter-radio"
            type="radio"
            value="firstLetter"
            onChange={ ({ target }) => setFilter(target.value) }
            id="radio-button3"
            data-testid="first-letter-search-radio"
          />
          First Letter
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>
  );
}
