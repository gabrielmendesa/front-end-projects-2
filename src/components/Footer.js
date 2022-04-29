import React from 'react';

function Footer() {
  return (
    <Footer data-testid="footer">
      <button
        className="drinks-bottom-btn"
        data-testid="drinks-bottom-btn"
        type="button"
        // disabled={ isDisable }
        // onClick={ handleCLick }
      >
        Drinks
      </button>
      <button
        className="explore-bottom-btn"
        data-testid="explore-bottom-btn"
        type="button"
        // disabled={ isDisable }
        // onClick={ handleCLick }
      >
        Explore
      </button>
      <button
        className="food-bottom-btn"
        data-testid="food-bottom-btn"
        type="button"
        // disabled={ isDisable }
        // onClick={ handleCLick }
      >
        Food
      </button>
    </Footer>
  );
}

export default Footer;
