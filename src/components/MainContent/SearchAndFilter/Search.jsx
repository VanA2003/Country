import React, { useState } from 'react'
import {MdSearch} from 'react-icons/md'
import './search.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Search() {
    const [valueInput, setValueInput] = useState('')
    const navigate = useNavigate()
    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            (valueInput !== '') ? navigate(`/search/${valueInput}`) : navigate('/')
        }
    }

  return (
        <div id='searchpane'>
            <h3>Search Country:</h3>
            <div id='searchElement'>
                <input type="text" name="" id="" 
                placeholder='Input the and enter to search...'
                onChange={e => {setValueInput(e.target.value)}}
                value={valueInput}
                onKeyDown={handleKeyDown}
                />
                <Link to={(valueInput !== '') ?`/search/${valueInput}` : '/'} style={{width: '40px', height: '100%'}}>
                    <MdSearch className='icon'/>
                </Link>
            </div>
        </div>
  )
}
