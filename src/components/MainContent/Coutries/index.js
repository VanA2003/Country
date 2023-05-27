import React, { useContext, useEffect } from 'react'
import "./countriesContainer.css"
import Country from './Country'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, getCountriesByRegion, getCountriesByName } from '../../Store/Action/countriesAction'
import ScrollBar from 'react-perfect-scrollbar'
import { useParams} from 'react-router-dom'
import Loading from '../../Loading/Loading'

export default function Countries() {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.CountriesReducer.countries)
  const slug = useParams()
  const loading = useSelector(state => state.CountriesReducer.loading)
  console.log(loading);
  useEffect(() => {
    if(slug.regionName) {
      dispatch(getCountriesByRegion(slug.regionName))
    }else if(slug.name) {
      dispatch(getCountriesByName(slug.name))
    }else {
      dispatch(getCountries())
    }
  },[dispatch, slug.regionName, slug.name])
  return (
    <>
      {
        loading ? <Loading/> :
      (<ScrollBar style={{maxHeight: '70vh',overflow: 'hidden'}}>
        <div id='CountriesContainer'>
        {
          countries.map((country, index) => {
            return(
              <Country country={country} key={index}/>
            )
          })
        }
        </div>
      </ScrollBar>)
      }
    </>
    
  )
}
