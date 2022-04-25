import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import config from '../config.json'
import Footer from './../views/layouts/Footer';
import Header from './../views/layouts/Header';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { withRouter } from "react-router-dom";
import Address from './pages/Address';
import Favorite from './pages/Favorite';

const Main = () => {
    const [update, setUpdate] = useState(false);

    return (
        <>
            <Header update={() => setUpdate(!update)} />
            <Switch>
                <Route path={[config.web_url + 'favorite']}>
                    <Favorite />
                </Route>
                <Route path={[config.web_url + 'address']}>
                    <Address />
                </Route>
                <Route path={[config.web_url + 'cart']}>
                    <Cart />
                </Route>
                <Route path={[config.web_url + 'product']}>
                    <Product />
                </Route>
                <Route path={[config.web_url + 'register']}>
                    <Register update={() => setUpdate(!update)} />
                </Route>
                <Route path={[config.web_url + 'logIn']}>
                    <LogIn update={() => setUpdate(!update)} />
                </Route>
                <Route path={[config.web_url]}>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}

export default withRouter(Main);;
