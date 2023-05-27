import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRIES_BY_REGION, GET_COUNTRIES_BY_NAME, SET_LOADING } from "./Type";

const countriesApi = 'https://restcountries.com/v3.1'

export const getCountries = () => async (dispatch) => {
    dispatch({type: SET_LOADING, payload: true})
    await axios.get(countriesApi + '/all')
    .then(res => {
        const countries = res.data.map((country) => ({
            name: country.name.common,
            capital : country.capital,
            populator : new Intl.NumberFormat().format(country.population),
            region: country.region,
            flag: country.flags.png
        }))
        dispatch({type: SET_LOADING, payload: false})
        dispatch({type:GET_COUNTRIES, payload: countries})
    })
    .catch(err => console.log('Get countries api error:', err))
}

export const getCountryByName = (name) => async (dispatch) => {
    dispatch({type: SET_LOADING, payload: true})
    await axios.get(`${countriesApi}/name/${name}?fullText=true`)
    .then(res => {
        dispatch({type: SET_LOADING, payload: false})
        dispatch({type: GET_COUNTRY_BY_NAME, payload: res.data[0]})
    })
    .catch((err) => console.log('Get country by name api error:', err))
}

export const getCountriesByRegion = (regionName) => async (dispatch) => {
    dispatch({type: SET_LOADING, payload: true})
    await axios.get(`${countriesApi}/region/${regionName}`)
    .then(res => {
        const countries = res.data.map((country) => ({
            name: country.name.common,
            capital : country.capital,
            populator : new Intl.NumberFormat().format(country.population),
            region: country.region,
            flag: country.flags.png
        }))
        dispatch({type: SET_LOADING, payload: false})
        dispatch({type: GET_COUNTRIES_BY_REGION, payload: countries})
    })
    .catch((err) => console.log("Get country by region api error:", err))
}

export const getCountriesByName = (name) => async(dispatch) => {
    dispatch({type: SET_LOADING, payload: true})
    await axios.get(`${countriesApi}/name/${name}`)
    .then(res => {
        const countries = res.data.map((country) => ({
            name: country.name.common,
            capital : country.capital,
            populator : new Intl.NumberFormat().format(country.population),
            region: country.region,
            flag: country.flags.png
        }))
        dispatch({type: SET_LOADING, payload: false})
        dispatch({type: GET_COUNTRIES_BY_NAME, payload: countries})
    })
   
    .catch(err => console.log("Get country by name api error:", err))
}

