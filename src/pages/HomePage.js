import PropTypes from 'prop-types'
import React, { useState } from 'react'
import DishList from '../components/DishList/DishList'
import Search from '../components/Search/Search'
import AppGrid from './AppGrid'

HomePage.propTypes = {
  dishes: PropTypes.array,
}

export default function HomePage({ dishes }) {
  const [searchDish, setSearchDish] = useState('')

  return (
    <AppGrid title="TastyTravel">
      <Search handleInput={handleInput} handleReset={handleReset} />
      <DishList dishes={dishes} searchDish={searchDish} />
    </AppGrid>
  )

  function handleInput(event) {
    return setSearchDish(event.target.value)
  }

  function handleReset() {
    return setSearchDish('')
  }
}
