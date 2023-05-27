import React, {useRef, useState, useEffect, useContext} from 'react' 
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import styles from './SwitchStyles.module.scss'
import { ThemeContext } from '../ThemContext/ThemContext'

export default function SwitchMode() {
  const themeContext = useContext(ThemeContext)
  const refInput = useRef()
  const refCircle = useRef()
  const refToggle = useRef()
  const [isDark, setIsDark] = useState(false)


  useEffect(() => {
    const changeBackgroundButton = () => {
      if(isDark) {
        refCircle.current.style.background = '#222'
        refToggle.current.style.background = '#fff'
      }else {
        refCircle.current.style.background = '#fff'
        refToggle.current.style.background =  'hsl(208, 59%, 41%)'
      }
    }
    changeBackgroundButton()

  },[isDark])

  const handleToggle = () => {
    refInput.current.checked = !refInput.current.checked
    setIsDark(refInput.current.checked)
    themeContext.toggleTheme()
  }

  return (
   <>
     <div className={styles.toogleButton} ref={refToggle} onClick={handleToggle}>
      <input type="checkbox" className={styles.input} ref={refInput}/>
        <div className={styles.icon}>
          {isDark ?  <BsFillMoonStarsFill/> : <BsFillSunFill/>}
        </div>
        <div className={styles.circle} ref={refCircle}></div>
    </div>
   </>
  )
}
