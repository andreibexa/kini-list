import axios from 'axios';
import localForage from "localforage";
import {Country} from 'types/api/configuration';
import {apiClientV3} from '../utils/httpCommon';

export const getConfiguration = async <T>() => {
    try {
        const {data} = await apiClientV3.get<T>('/configuration');
        return data;
    } catch {
        throw new Error("Can't fetch configuration");
    }
};

export const getCountryByIp = async <T>() => {
    try {

        const {data} = await axios.get<T>(process.env.REACT_APP_API_COUNTRY_URL, {
            headers: {
                'Content-Type': 'application/json'
            },
        });

        return data;
    } catch {
        return 'US';
    }
};

export const getCountries = async <T>() => {
    try {
        const {data} = await apiClientV3.get<T>('/configuration/countries', {
                headers: {
                    'Content-Type': 'application/json'
                }
            },
        );
        return data;
    } catch (error) {
        throw new Error("Error ! Can't get countries");
    }
};

export const getStorageCountry = (): Promise<Country | null> => localForage.getItem('country');

export const storeCountry = (country: Country) => localForage.setItem('country', country);
