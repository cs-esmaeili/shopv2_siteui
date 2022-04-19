import http from "./httpServices";
import config from "../config.json";

export const _Home = () => {
    return http.post(`${config.api_url}indexPageView`);
};

