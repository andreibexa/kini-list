import axios from 'axios';

export const apiClientV3 = axios.create({
    baseURL: process.env.REACT_APP_API_V3_URL,
    headers: {
        'Content-type': 'application/json;charset=utf-8',
    },
    params: process.env.NODE_ENV !== 'production'
        ? {
            api_key: process.env.REACT_APP_API_KEY,
        }
        : {},
});

export const apiClientV4 = axios.create({
    baseURL: process.env.REACT_APP_API_V4_URL,
    headers: process.env.NODE_ENV !== 'production'
        ? {
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            'Content-type': 'application/json;charset=utf-8',
        }
        : {},
});
