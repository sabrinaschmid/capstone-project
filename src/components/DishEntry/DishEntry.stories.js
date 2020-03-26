import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import EatingPreference from '../EatingPreference'
import IntoleranceBadges from '../IntoleranceBadges/IntoleranceBadges'
import DishEntry from './DishEntry'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'Dish Entry',
  component: DishEntry,
  IntoleranceBadges,
  EatingPreference,
}

const dish = {
  originalDishTitle: 'Melanzane alla parmigiana',
  translatedDishTitle: 'Auberginenauflauf',
  imagePath: 'https://source.unsplash.com/random/398x224',
  vegan: 'true',
}

export const Dish = () => (
  <Wrapper>
    <GlobalStyles />
    <DishEntry dish={dish}></DishEntry>
  </Wrapper>
)
