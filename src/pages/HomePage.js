import PropTypes from 'prop-types'
import React from 'react'
import DishList from './DishList'
import PageLayout from './PageLayout'
import Search from '../components/Search'

export default function HomePage({ handleInput, dishes, searchDish }) {
  HomePage.propTypes = {
    handleInput: PropTypes.func,
    dishes: PropTypes.array,
    searchDish: PropTypes.string,
  }
  return (
    <PageLayout title="TastyTravel">
      <Search handleInput={handleInput} />
      <DishList dishes={dishes} searchDish={searchDish} />
    </PageLayout>
  )
}
