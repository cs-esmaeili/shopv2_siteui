import http from "./httpServices";
import config from "../config.json";

export const _AddCart = (data) => {
    return http.post(`${config.api_url}add_cart`, JSON.stringify(data));
};
export const _AddAddress = (data) => {
    return http.post(`${config.api_url}addAddress`, JSON.stringify(data));
};
export const _DeleteAddress = (data) => {
    return http.post(`${config.api_url}deleteAddress`, JSON.stringify(data));
};
export const _ListAddress = () => {
    return http.post(`${config.api_url}listAddress`);
};
