import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Search from '../components/Search'
import DishList from './DishList'
import PageLayout from './PageLayout'

HomePage.propTypes = {
  dishes: PropTypes.array,
}
export default function HomePage({ dishes }) {
  const [searchDish, setSearchDish] = useState('')

  function handleInput(event) {
    return setSearchDish(event.target.value)
  }

  function handleReset() {
    return setSearchDish('')
  }

  return (
    <PageLayout title="TastyTravel">
      <Search handleInput={handleInput} handleReset={handleReset} />
      <DishList dishes={dishes} searchDish={searchDish} />
    </PageLayout>
  )
}
