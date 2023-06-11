'use client'

import React, { useState } from 'react'
import {SearchManufacturer} from './'
import { manufacturers } from './../constants/index';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>('')

  const handleSearch = () => {}

  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <div className='search-bar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar