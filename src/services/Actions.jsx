import http from "./httpServices";
import config from "../config.json";

export const _AddCart = (data) => {
    return http.post(`${config.api_url}addCart`, JSON.stringify(data));
};
export const _ChangeCartNumber = (data) => {
    return http.post(`${config.api_url}cartChangeNumber`, JSON.stringify(data));
};
export const _DeleteCart = (data) => {
    return http.post(`${config.api_url}deleteCart`, JSON.stringify(data));
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
export const _ListCart = () => {
    return http.post(`${config.api_url}listCart`);
};

export const _personProfile = () => {
    return http.post(`${config.api_url}personProfile`);
};

export const _EditPerson = (data) => {
    return http.post(`${config.api_url}editPerson`, JSON.stringify(data));
};
export const _Purchase = (data) => {
    return http.post(`${config.api_url}purchase`, JSON.stringify(data));
};
export const _UserFactors = () => {
    return http.post(`${config.api_url}userFactors`);
};
export const _CategoryListPyramid = () => {
    return http.post(`${config.api_url}categoryListPyramid`);
};
export const _CategoryProducts = (data) => {
    return http.post(`${config.api_url}categoryProducts`, JSON.stringify(data));
};
export const _post = (data) => {
    return http.post(`${config.api_url}post`, JSON.stringify(data));
};
export const _lastPosts = () => {
    return http.post(`${config.api_url}lastPosts`);
};