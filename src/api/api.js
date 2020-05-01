import * as axios from "axios";

export const getAPI = {
    getRateAPI() {
        return axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    },
};