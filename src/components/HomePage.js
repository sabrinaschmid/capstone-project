import React from 'react'
import PageLayout from './PageLayout'
import DishList from './DishList'

export default function HomePage({ dishesState }) {
  return (
    <PageLayout title="TastyTravel">
      <DishList dishesState={dishesState} />
    </PageLayout>
  )
}
