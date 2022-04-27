import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import GlobalProvider from './context/globalProvider';
import Login from './pages/Login';
import Food from './pages/Food';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import FoodsByIngredients from './pages/FoodsByIngredients';
import DrinksByIngredients from './pages/DrinksByIngredients';
import FoodsByNationality from './pages/FoodsByNationality';
import Profile from './pages/profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Food } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/explore/foods/ingredients" component={ FoodsByIngredients } />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ DrinksByIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ FoodsByNationality }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
