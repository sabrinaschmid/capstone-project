import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/GlobalStyles'
import Dish from '../Dish/Dish'
import EatingPreference from '../EatingPreference'
import IntoleranceBadges from '../IntoleranceBadges/IntoleranceBadges'
import DishList from './DishList'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'Dish',
  component: DishList,
  Dish,
  IntoleranceBadges,
  EatingPreference,
}

const dish1 = {
  originalDishTitle: 'Melanzane alla parmigiana',
  translatedDishTitle: 'Auberginenauflauf',
  imagePath: 'https://source.unsplash.com/random/398x224',
  vegetarian: 'true',
}

const dish2 = {
  originalDishTitle: 'Scroppino',
  translatedDishTitle: 'Alkoholisches Zitronen-Sorbet',
  imagePath: 'https://source.unsplash.com/food/398x224',
  vegan: 'true',
}

export const Dishlist = () => (
  <Wrapper>
    <GlobalStyles />
    <Dish dish={dish1}></Dish>
    <Dish dish={dish2}></Dish>
  </Wrapper>
)
