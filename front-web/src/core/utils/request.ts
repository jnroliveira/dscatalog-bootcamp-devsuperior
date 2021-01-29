import axios, { Method } from 'axios';

type ResquestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
}

const BASE_URL = 'http://localhost:3000';

const makeResquest = ({method = 'GET', url, data, params}: ResquestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params
    });
};

export default makeResquest;