import axios from "axios"
import { Dispatch } from "redux"
import { CountriesAction, CountriesActionTypes } from "../../types/counties"

export const fetchCountries = () => {

    return async (dispatch: Dispatch<CountriesAction> ) => {
        try {
            dispatch({type: CountriesActionTypes.FETCH_COUNTRIES})
            const response = await axios.get('https://restcountries.com/v3.1/all')
            const data = ['Russia']
            // @ts-ignore
            response.data.map(resp => data.push(resp.name.common))
            dispatch({type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: CountriesActionTypes.FETCH_COUNTRIES_ERROR, payload: 'error!'})
        }
    }
}