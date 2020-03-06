import React, { useParams } from 'react'
import styled from 'styled-components/macro'
import Dish from './Dish'
import PageLayout from './PageLayout'
import EatingPreference from './EatingPreference'
import Intolerances from './Intolerances'

export default function DishDetail({ dish, dishesState }) {
  return (
    // <PageLayout title={dish.OriginalTitleStyled}>
    <PageLayout>
      {/* <TranslatedTitleStyled>{dish.translatedDishTitle}</TranslatedTitleStyled>
      <ImagePreferenceStyled>
        <ImageStyled src="https://source.unsplash.com/random/400x225" alt="" />
        <EatingPreference dish={dish} / >
      </ImagePreferenceStyled>
      <Intolerances dish={dish} /> */}
      <Ingredients></Ingredients>
      <p>Details</p>
    </PageLayout>
  )
}

const Ingredients = styled.li``
