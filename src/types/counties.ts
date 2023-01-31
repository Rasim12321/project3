export interface CountriesState {
    countries: string[],
    loading: boolean,
    error: null | string,
}

export enum CountriesActionTypes {
    FETCH_COUNTRIES= 'FETCH_COUNTRIES',
    FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS',
    FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR'
}
interface FetchCountriesAction {
    type: CountriesActionTypes.FETCH_COUNTRIES;
}
interface FetchCountriesSuccessAction {
    type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS;
    payload: string[];
}
interface FetchCountriesErrorAction {
    type: CountriesActionTypes.FETCH_COUNTRIES_ERROR;
    payload: string;
}

export type CountriesAction =  FetchCountriesSuccessAction | FetchCountriesErrorAction | FetchCountriesAction
