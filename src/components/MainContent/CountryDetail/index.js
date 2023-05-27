import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../ThemContext/ThemContext'
import "./wrapper.css"
import CountryInfo from './CountryInfo'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryByName } from '../../Store/Action/countriesAction'
import Loading from '../../Loading/Loading'

function CountryDetail() {
    const themeContext = useContext(ThemeContext)
    const slug = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const country = useSelector(state => state.CountriesReducer.country)
    const loading = useSelector(state => state.CountriesReducer.loading)

    useEffect(() => {
      dispatch(getCountryByName(slug.countryName))
    },[slug.countryName, dispatch])

    return (
      <div id='wrapper'>
          <div className={`goback-btn ${themeContext.theme}`} onClick={() => {navigate(-1)}}>Go back</div>
          {loading ? <Loading/> :
           (<div id='countryContainer'>
              <div className='flag-country'>
                  <img src={country ? country.flags.png :'https://via.placeholder.com/300x200?text=Image+Error'} alt=''/>
              </div>
              <CountryInfo/>
          </div>)
        }
          
      </div>
    )
}

export default CountryDetail;