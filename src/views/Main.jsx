import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import config from '../config.json'
import Footer from './../views/layouts/Footer';
import Header from './../views/layouts/Header';
import Home from './pages/Home';

const Main = () => {

    return (
        <>
            <Header />
            <Switch>
                <Route path={[config.web_url]}>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}

export default Main;
