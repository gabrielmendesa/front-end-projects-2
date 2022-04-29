import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div data-testid="footer" className="footer">
      <Link to="/drinks">
        <img
          className="drinks-bottom-btn"
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drink icon"
        />
      </Link>
      <Link to="/explore">
        <img
          className="explore-bottom-btn"
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="explore icon"
        />
      </Link>
      <Link to="/foods">
        <img
          className="food-bottom-btn"
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="meal icon"
        />
      </Link>
    </div>
  );
}

export default Footer;
