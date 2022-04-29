import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import globalContext from '../context/globalContext';

export default function Food() {
  const { recipes } = useContext(globalContext);

  return (
    <div className="pages-footer">
      <Header titleName="Foods" />
      <div className="recipes-container">
        { recipes.meals && recipes.meals.map((recipe, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ i } className="recipe">
            <div className="img-container">
              <img
                src={ recipe.strMealThumb }
                alt={ recipe.strMeal }
                data-testid={ `${i}-card-img` }
              />
            </div>
            <p data-testid={ `${i}-card-name` }>{recipe.strMeal}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
