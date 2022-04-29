import React from 'react';

function Footer() {
  return (
    <div data-testid="footer" className="footer">
      <button
        className="drinks-bottom-btn"
        data-testid="drinks-bottom-btn"
        type="button"
      >
        Drinks
      </button>
      <button
        className="explore-bottom-btn"
        data-testid="explore-bottom-btn"
        type="button"
      >
        Explore
      </button>
      <button
        className="food-bottom-btn"
        data-testid="food-bottom-btn"
        type="button"
      >
        Food
      </button>
    </div>
  );
}

export default Footer;
