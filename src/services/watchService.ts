import {apiClientV3} from '../utils/httpCommon';
import validateCountryIso from "../utils/validator";

const getProvidersMovie = async <T>(countryIso: string | undefined) => {
    try {
        validateCountryIso(countryIso);

        const {data} = await apiClientV3.get<T>(`/watch/providers/movie?watch_region=${countryIso || 'us'}`);
        return data;
    } catch (error) {
        throw new Error("Can't fetch providers");
    }
};

export default getProvidersMovie
