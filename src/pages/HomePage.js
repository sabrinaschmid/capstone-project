import PropTypes from 'prop-types'
import React from 'react'
import DishList from './DishList'
import PageLayout from './PageLayout'

export default function HomePage({ dishesState }) {
  HomePage.propTypes = {
    dishesState: PropTypes.array,
  }
  return (
    <PageLayout title="TastyTravel">
      <DishList dishesState={dishesState} />
    </PageLayout>
  )
}
