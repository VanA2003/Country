import React, { useContext, useEffect, useRef } from 'react'
import {GiEarthAsiaOceania, GiWorld} from 'react-icons/gi'
import {FaChevronDown, FaGlobeAfrica, FaGlobeAmericas, FaGlobeEurope, FaGlobeAsia} from 'react-icons/fa'
import { ThemeContext } from '../../ThemContext/ThemContext'
import Option from './Option'

const RegionList = [
    { icon: GiWorld, value : 'All'},
    { icon: FaGlobeAfrica, value : 'Africa'},
    { icon: FaGlobeAmericas, value : 'Americas'},
    { icon: FaGlobeAsia, value : 'Aisa'},
    { icon: FaGlobeEurope, value : 'Europe'},
    { icon: GiEarthAsiaOceania, value : 'Oceania'},
]


export default function Options({isShowOptions}) {
    const themeContext = useContext(ThemeContext)
    const refOptions = useRef(null)

    useEffect(() => {
        const showOptions = () => {
            if(isShowOptions) {
                refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`
                refOptions.current.style.transform = `scaleY(1)`
            }
            else {
                refOptions.current.style.maxHeight = `0`
                refOptions.current.style.transform = `scaleY(0)`
            }
        }
        showOptions()
    },[isShowOptions])

    return (
    <ul id='optionpane' 
    className={themeContext.theme} 
    ref={refOptions}>
           {
             RegionList.map((Region, index) => {
                return (
                   <Option Region={Region} key={index}/>
                )
             }) 
           }
    </ul>
  )
}
