import PropTypes from 'prop-types'
import React from 'react'
import DishList from './DishList'
import PageLayout from './PageLayout'
import Search from '../components/Search'

export default function HomePage({ handleInput, dishesState }) {
  HomePage.propTypes = {
    dishesState: PropTypes.array,
  }
  return (
    <PageLayout title="TastyTravel">
      <Search handleInput={handleInput} />
      <DishList dishesState={dishesState} />
    </PageLayout>
  )
}
