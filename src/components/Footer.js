import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div data-testid="footer" className="footer">
      <img
        className="drinks-bottom-btn"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        alt="drink icon"
      />
      <img
        className="explore-bottom-btn"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        alt="explore icon"
      />
      <img
        className="food-bottom-btn"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        alt="meal icon"
      />
    </div>
  );
}

export default Footer;
