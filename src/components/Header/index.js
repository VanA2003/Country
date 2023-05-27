import React, { useContext } from 'react'
import "./header.css"
import SwitchMode from "./switchMode"
import { ThemeContext } from '../ThemContext/ThemContext'
import { Link } from 'react-router-dom'


export default function Header() {
  const themeContext = useContext(ThemeContext)
  return (
    <div id='headerpane' className={themeContext.theme}  >
       <Link to='/'>
        <span>Where in the world?</span>
       </Link>
        <SwitchMode/>
    </div>
  )
}
