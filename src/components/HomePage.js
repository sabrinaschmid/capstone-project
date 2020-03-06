import React from 'react'
import PageLayout from './PageLayout'
import Dish from './Dish'

export default function HomePage({ dish, dishesState }) {
  return (
    <PageLayout title="TastyTravel">
      <Dish dishesState={dishesState} />
    </PageLayout>
  )
}
