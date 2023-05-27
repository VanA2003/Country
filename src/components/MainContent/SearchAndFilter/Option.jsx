import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Option(props) {
    const {Region} = props
    const navigate = useNavigate()

    const handleValueOption = () => {
        if(Region.value !== 'All'){
            navigate(`/region/${Region.value}`)
        }else {
            navigate(`/`)
        }
    }
  return (
    <li id='optionitem' onClick={handleValueOption}>
        <Region.icon />
        <span>{Region.value}</span>
    </li>
  )
}
