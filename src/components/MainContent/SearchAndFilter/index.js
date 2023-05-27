import React from 'react'
import Search from './Search'
import Filter from './Filter'
import './searchandfilter.css'

export default function SearchAndFilter() {
  return (
    <div id='searchandfilter'>
        <Search/>
        <Filter/>
    </div>
  )
}
