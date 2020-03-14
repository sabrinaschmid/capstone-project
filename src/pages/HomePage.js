import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Search from '../components/Search'
import DishList from './DishList'
import PageLayout from './PageLayout'

export default function HomePage({ dishes }) {
  HomePage.propTypes = {
    dishes: PropTypes.array,
  }

  const [searchDish, setSearchDish] = useState('')

  function handleInput(event) {
    return setSearchDish(event.target.value)
  }

  return (
    <PageLayout title="TastyTravel">
      <Search handleInput={handleInput} />
      <DishList dishes={dishes} searchDish={searchDish} />
    </PageLayout>
  )
}
