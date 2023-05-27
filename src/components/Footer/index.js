import React, { useContext } from 'react'
import './footerContainer.css'
import { ThemeContext } from '../ThemContext/ThemContext'

export default function Footer() {
    const themeContext = useContext(ThemeContext)
  return (
    <div id='footerContainer' className={themeContext}>
        <h4>Copyright &copy; comany xyz</h4>
        <p>daylaemail@gmail.com</p>
    </div>
  )
}
