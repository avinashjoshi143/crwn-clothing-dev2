import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shoppage/shoppage.component';

import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup-page.component';

import {Switch,Route} from 'react-router-dom';





function App() {
  return (
    <div>
      <Header />
      <Switch>  
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
