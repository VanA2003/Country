import React, { useContext, useEffect, useRef, useState } from 'react'
import {GiEarthAsiaOceania, GiWorld} from 'react-icons/gi'
import {FaChevronDown, FaGlobeAfrica, FaGlobeAmericas, FaGlobeEurope, FaGlobeAsia} from 'react-icons/fa'
import "./filter.css"
import { ThemeContext } from '../../ThemContext/ThemContext'
import Options from './Options'
import { useParams } from 'react-router-dom'

export default function Filter() {
  const themecontext = useContext(ThemeContext)
  const refSelect  = useRef(null)
  const [isShowOptions, setIsShowOptions] = useState(false)
  const {regionName} = useParams()
  const [valueOption, setValueOption] = useState('All')

  const handleOptions = (e) => {
    if(e && refSelect.current) 
      setIsShowOptions(refSelect.current.contains(e.target))
  }
  
  useEffect(() => {
    if(regionName) {
      setValueOption(regionName)
    }else {
      setValueOption('All')
    }
  },[regionName])

  useEffect(() => {
      document.addEventListener('click', handleOptions)
  },[isShowOptions])

  return (
    <div className='filter'>
        <h3>Filter by regions</h3>
        <div className='selectpane'>
         <div id='select' 
         className={themecontext.theme} 
         ref={refSelect} 
         onClick={handleOptions}
         >
            <span style={{fontSize: '18px', fontWeight:'bold'}}>{valueOption}</span>
            <FaChevronDown/>
         </div>
          <Options isShowOptions={isShowOptions}/>
        </div>
    </div>
  )
}
