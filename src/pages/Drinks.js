import React, { useContext } from 'react';
import Header from '../components/Header';
import globalContext from '../context/globalContext';

export default function Drinks() {
  function renderRecipes(recipe, i) {
    const num = 12;
    if (i >= num) return '';
    return (
      <div data-testid={ `${i}-recipe-card` } key={ i }>
        <img
          src={ recipe.strDrinkThumb }
          alt={ recipe.strDrink }
          data-testid={ `${i}-card-img` }
        />
        <p data-testid={ `${i}-card-name` }>{recipe.strDrink}</p>
      </div>
    );
  }

  const { recipes } = useContext(globalContext);
  return (
    <div>
      <Header titleName="Drinks" />
      { recipes.drinks && recipes.drinks.map((recipe, i) => renderRecipes(recipe, i)) }
    </div>
  );
}
