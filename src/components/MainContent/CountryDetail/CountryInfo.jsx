import React, { useContext, useEffect, useState } from 'react'
import styles from './countryInfoStyle.module.scss'
import clsx from 'clsx'
import { ThemeContext } from '../../ThemContext/ThemContext'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ScrollBar from 'react-perfect-scrollbar'


const getCountryNameByCode = async (code) => {
  const result = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${code}`)
  return result.data
}


export default function CountryInfo() {
  const themeContext = useContext(ThemeContext)
  const country = useSelector(state => state.CountriesReducer.country)
  const [countriesBorder, setCountriesBorder] = useState([])

  useEffect(() => {
    if(country) {
      getCountryNameByCode(country.borders)
      .then(res => {
        const countryName = res.map(country => country.name)
        setCountriesBorder(countryName)
      })
      .catch((err) => console.log(err))
    }
  },[country])


  return (
   <ScrollBar style={{maxHeight: '70vh', overflow: 'hidden'}}>
     <div className={styles.countryInfo}>
      {
        country && (
      <>
        <h3 className={styles.countryName}>{country.name.common}</h3>
      <table>
       <tbody>
         <tr>
          <td className={styles.countryInfo__title}>Native Name</td>
          <td>:</td>
          <td className={styles.countryInfo__value}>{country.name.common}</td>
        </tr>

        <tr>
          <td className={styles.countryInfo__title}>Official</td>
          <td>:</td>
          <td className={styles.countryInfo__value}>{country.name.official}</td>
        </tr>

        <tr>
          <td className={styles.countryInfo__title}>Population</td>
          <td>:</td>
          <td className={styles.countryInfo__value}>{country.population}</td>
        </tr>

        <tr>
          <td className={styles.countryInfo__title}>Region</td>
          <td>:</td>
          <td className={styles.countryInfo__value}>{country.region}</td>
        </tr>

        <tr>
          <td className={styles.countryInfo__title}>Sub Region</td>
          <td>:</td>
          <td className={styles.countryInfo__value}>{country.subregion}</td>
        </tr>

        <tr>
          <td className={styles.countryInfo__title}>Capital</td>
          <td>:</td>
          <td className={styles.countryInfo__value}>{country.capital}</td>
        </tr>

        {/* <tr>
          <td className={styles.countryInfo__title}>Top Level Domain</td>
          <td>:</td>
          <td className={styles.countryInfo__value}>{`${}`}</td>
        </tr> */}

        {/* <tr>
          <td className={styles.countryInfo__title}>Currencies</td>
          <td>:</td>
          <td className={styles.countryInfo__value}>{`${country.currencies.TOP.name}`}</td>
        </tr> */}
        <tr>
          <td className={styles.countryInfo__title}>Languages</td>
          <td>:</td>
          <td className={styles.countryInfo__value}>{`${country.languages.eng} ${country.languages.ton}`}</td>
        </tr>

        <tr>
          <td className={styles.countryInfo__title}>Border Countries</td>
          <td>:</td>
          <td className={styles.borderList}>
            {/* clsx giống như hàm nối chuỗi kết nối với nhau  */}
            
            {
              countriesBorder && countriesBorder.map((country,index) => {
                return(
                  <Link key={index} to={`/country/${country.common}`}>
                    <div className={clsx(styles.borderItem, themeContext.theme)}>{country.common}</div>
                  </Link>
                )
              })
             }
          </td>
        </tr>
       </tbody>
      </table>
    </>
        )
      }
    </div>
   </ScrollBar>
  )
}
