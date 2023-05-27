import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../ThemContext/ThemContext'


export default function Country(props) {
  const {country} = props
  const themeContext = useContext(ThemeContext)
  return (
    <Link to={`/country/${country.name}`}>
        <div id='countryCard' className={themeContext.theme}>
            <div className='flag'>
                <img src={country.flag} alt="" />
            </div> 

            <div id='countryInfo'>
                <h3>{country.name}</h3>
                <div>
                    Population: 
                    <span>{country.populator}</span>
                </div>
                <div>
                    Region: 
                    <span> {country.region}</span>
                </div>
                <div>
                    Capital: 
                    <span> {country.capital}</span>
                </div>
            </div>
        </div>
    </Link>
    
  )
}
