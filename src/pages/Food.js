import React, { useContext } from 'react';
import Header from '../components/Header';
import globalContext from '../context/globalContext';

export default function Food() {
  const { recipes } = useContext(globalContext);

  return (
    <div>
      <Header titleName="Foods" />
      { recipes.meals && recipes.meals.map((recipe, i) => (
        <div data-testid={ `${i}-recipe-card` } key={ i }>
          <img
            src={ recipe.strMealThumb }
            alt={ recipe.strMeal }
            data-testid={ `${i}-card-img` }
          />
          <p data-testid={ `${i}-card-name` }>{recipe.strMeal}</p>
        </div>
      ))}
    </div>
  );
}
