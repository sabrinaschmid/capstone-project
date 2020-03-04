import React from 'react'
import PageLayout from './PageLayout'
import Dish from './Dish'

export default function HomePage({ dish }) {
  return (
    <PageLayout title="TastyTravels">
      <Dish dish={dish} />
    </PageLayout>
  )
}
