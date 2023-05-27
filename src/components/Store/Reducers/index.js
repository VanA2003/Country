import { combineReducers } from "redux"; 
import CountriesReducer from './countriesReducers'

const rootReducer = combineReducers({
    CountriesReducer : CountriesReducer,
})

export default rootReducer