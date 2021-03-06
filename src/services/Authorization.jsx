import http from "./httpServices";
import config from "../config.json";

export const LogIn = (data) => {
    return http.post(`${config.api_url}logIn`, JSON.stringify(data));
};

export const LogOut = (data) => {
    return http.post(`${config.api_url}logOut`, JSON.stringify(data));
};

export const _Register = (data) => {
    return http.post(`${config.api_url}register`, JSON.stringify(data));
};
export const CheckToken = () => {
    return http.post(`${config.api_url}checkToken`, {});
};

