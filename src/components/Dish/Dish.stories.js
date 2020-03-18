import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/GlobalStyles'
import IntoleranceBadges from '../IntoleranceBadges/IntoleranceBadges'
import Dish from './Dish'
import EatingPreference from '../EatingPreference'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'Dish',
  component: Dish,
  IntoleranceBadges,
  EatingPreference,
}

const dish = {
  originalDishTitle: 'Melanzane alla parmigiana',
  translatedDishTitle: 'Auberginenauflauf',
  imagePath: 'https://source.unsplash.com/food/398x224',
  vegan: 'true',
}

export const DishEntry = () => (
  <Wrapper>
    <GlobalStyles />
    <Dish dish={dish}></Dish>
  </Wrapper>
)
