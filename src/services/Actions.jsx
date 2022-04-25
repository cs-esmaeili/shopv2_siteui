import http from "./httpServices";
import config from "../config.json";

export const _AddCart = (data) => {
    return http.post(`${config.api_url}add_cart`, JSON.stringify(data));
};
export const _AddAddress = (data) => {
    return http.post(`${config.api_url}addAddress`, JSON.stringify(data));
};
export const _AddFavorite = (data) => {
    return http.post(`${config.api_url}addFavorite`, JSON.stringify(data));
};
export const _FavoriteList = () => {
    return http.post(`${config.api_url}favoriteList`);
};
export const _DeleteFavorite = (data) => {
    return http.post(`${config.api_url}deleteFavorite`, JSON.stringify(data));
};
export const _DeleteAddress = (data) => {
    return http.post(`${config.api_url}deleteAddress`, JSON.stringify(data));
};
export const _ListAddress = () => {
    return http.post(`${config.api_url}listAddress`);
};

export const _personProfile = () => {
    return http.post(`${config.api_url}personProfile`);
};