import axios from "axios";

export const setToken = (token) => {
    return async (dispatch, getState) => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await dispatch({ type: "SETTOKEN", payload: token });
    };
};
export const setCartData = (data) => {
    return async (dispatch, getState) => {
        await dispatch({ type: "SETPCARTDATA", payload: data });
    };
};
export const setNeedLoadPage = (data) => {
    return async (dispatch, getState) => {
        await dispatch({ type: "SETNEEDLOADPAGE", payload: data });
    };
};
