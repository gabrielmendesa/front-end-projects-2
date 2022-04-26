import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import GlobalProvider from './context/globalProvider';
import Login from './pages/Login';
import Food from './pages/Food';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Food } />
      </Switch>
    </GlobalProvider>
  );
}

export default App;

// npm run lint -- --fix
