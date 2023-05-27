import React from 'react'
import SearchAndFilter from './SearchAndFilter'
import Countries from './Coutries'
import CountryDetail from './CountryDetail'

export default function MainContent() {
  return (
    <div>
        <SearchAndFilter/>
        <Countries/>
    </div>
  )
}
