import { CountriesAction, CountriesActionTypes, CountriesState } from "../../types/counties"
import { UserAction, UserActionTypes, UserState } from "../../types/users"


const initialState: CountriesState = {
    countries: ['Russia'],
    loading: false,
    error: null,
}

export const CountriesReducer = (state: CountriesState = initialState, action: CountriesAction): CountriesState => {
    switch (action.type){
        case CountriesActionTypes.FETCH_COUNTRIES:
            return {loading: true, error: null, countries: ['Russia']}
        case CountriesActionTypes.FETCH_COUNTRIES_SUCCESS:
            return {loading: false, error: null, countries: action.payload}
        case CountriesActionTypes.FETCH_COUNTRIES_ERROR:
            return {loading: false, error: action.payload, countries: ['Russia']}
        default:
            return state
    }
}