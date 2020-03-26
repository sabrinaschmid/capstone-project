import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/GlobalStyles'
import Dish from '../Dish/Dish'
import EatingPreference from '../EatingPreference'
import IntoleranceBadges from '../IntoleranceBadges/IntoleranceBadges'
import SearchResults from './SearchResults'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'SearchResults',
  component: SearchResults,
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
  imagePath: 'https://source.unsplash.com/random/398x224',
  vegan: 'true',
}

const dish3 = {
  originalDishTitle: 'Brasato al Barolo',
  translatedDishTitle: 'Schmorbraten',
  imagePath: 'https://source.unsplash.com/random/398x224',
  vegetarian: 'false',
}

export const SearchResult = () => (
  <Wrapper>
    <GlobalStyles />
    <Dish dish={dish1}></Dish>
    <Dish dish={dish2}></Dish>
    <Dish dish={dish3}></Dish>
  </Wrapper>
)
