import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from 'react-dom/client';
import Main from "./views/Main";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store} >
        <BrowserRouter>
            <ToastContainer />
            <Main />
        </BrowserRouter>
    </Provider>
);

