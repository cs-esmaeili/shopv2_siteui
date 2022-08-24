import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
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
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';
import CheckOut from './pages/CheckOut';
import Factors from './pages/Factors';
import Products from "./pages/Products";
import Post from './pages/Post';
import Posts from './pages/Posts';
import Search from './pages/Search';

const Main = () => {
    const [update, setUpdate] = useState(false);
    const token = useSelector((state) => state.token);

    const check = (component) => {
        if (token == null) {
            return (<LogIn update={() => setUpdate(!update)} />);
        }
        return (component);
    }
    return (
        <>
            <Header update={() => setUpdate(!update)} />
            <Switch>
                <Route path={config.web_url + 'search/'}>
                    <Search />
                </Route>
                <Route path={[config.web_url + 'posts']}>
                    <Posts />
                </Route>
                <Route path={[config.web_url + 'post']}>
                    <Post />
                </Route>
                <Route path={[config.web_url + 'products']}>
                    <Products />
                </Route>
                <Route path={[config.web_url + 'factors']}>
                    {check(<Factors />)}
                </Route>
                <Route path={[config.web_url + 'checkout']}>
                    {check(<CheckOut />)}
                </Route>
                <Route path={[config.web_url + 'profile']}>
                    {check(<Profile />)}
                </Route>
                <Route path={[config.web_url + 'favorite']}>
                    {check(<Favorite />)}
                </Route>
                <Route path={[config.web_url + 'address']}>
                    {check(<Address />)}
                </Route>
                <Route path={[config.web_url + 'cart']}>
                    {check(<Cart />)}
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
