import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import globalContext from '../context/globalContext';

export default function Drinks() {
  function renderRecipes(recipe, i) {
    const num = 12;
    if (i >= num) return '';
    return (
      <div data-testid={ `${i}-recipe-card` } key={ i } className="recipe">
        <div className="img-container">
          <img
            src={ recipe.strDrinkThumb }
            alt={ recipe.strDrink }
            data-testid={ `${i}-card-img` }
          />
        </div>
        <p data-testid={ `${i}-card-name` }>{recipe.strDrink}</p>
      </div>
    );
  }

  const { recipes } = useContext(globalContext);
  return (
    <div>
      <Header titleName="Drinks" />
      <div className="recipes-container">
        { recipes.drinks && recipes.drinks.map((recipe, i) => renderRecipes(recipe, i)) }
      </div>
      <Footer />
    </div>
  );
}
