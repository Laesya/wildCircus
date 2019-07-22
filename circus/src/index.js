import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../src/components/homePage/HomePage';
import FamilyPage from '../src/components/familyPage/FamilyPage';
import ShopPage from '../src/components/shopPage/ShopPage';
import RegisterPage from './components/registerLoginPage/RegisterLoginPage';
import RegisterLoginPage from '../src/components/registerLoginPage/RegisterLoginPage';
import AccountPage from '../src/components/accountPage/AccountPage';
import AnimalsPage from '../src/components/animalsPage/AnimalsPage';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <App />
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/family" component={FamilyPage}/>   
            <Route exact path="/shop" component={ShopPage}/> 
            <Route exact path="/animals"  component={AnimalsPage}/>
            <Route exact path="/register"  component={RegisterPage}/>
            <Route exact path="/loginRegister"  component={RegisterLoginPage}/>
            <Route exact path="/account" component={AccountPage}/>
        </React.Fragment> 
    </BrowserRouter>, document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
