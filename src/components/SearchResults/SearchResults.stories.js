import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import DishEntry from '../DishEntry/DishEntry'
import EatingPreference from '../EatingPreference'
import IntoleranceBadges from '../IntoleranceBadges/IntoleranceBadges'
import SearchResults from './SearchResults'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`

const Headline = styled.h2``

export default {
  title: 'Search Results',
  component: SearchResults,
  DishEntry,
  IntoleranceBadges,
  EatingPreference,
}

const dish1 = {
  originalDishTitle: 'Melanzane alla parmigiana',
  translatedDishTitle: 'Auberginenauflauf',
  imagePath: 'https://source.unsplash.com/random/398x224',
  vegetarian: true,
  lactose: true,
  histamine: true,
}

const dish2 = {
  originalDishTitle: 'Scroppino',
  translatedDishTitle: 'Alkoholisches Zitronen-Sorbet',
  imagePath: 'https://source.unsplash.com/random/398x224',
  vegan: true,
  fructose: 'viel enthalten',
  histamine: true,
}

const dish3 = {
  originalDishTitle: 'Brasato al Barolo',
  translatedDishTitle: 'Schmorbraten',
  imagePath: 'https://source.unsplash.com/random/398x224',
  vegetarian: false,
  lactose: true,
}

export const SearchResult = () => (
  <Wrapper>
    <GlobalStyles />
    <Headline>Dein Suchergebnis</Headline>
    <DishEntry dish={dish1}></DishEntry>
    <DishEntry dish={dish2}></DishEntry>
    <DishEntry dish={dish3}></DishEntry>
  </Wrapper>
)
