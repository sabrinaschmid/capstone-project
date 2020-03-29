import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import Badges from '../Badges/Badges'
import Diet from '../Diet'
import ListEntry from './ListEntry'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'List Entry',
  component: ListEntry,
  Badges,
  Diet,
}

const dish = {
  originalDishTitle: 'Melanzane alla parmigiana',
  translatedDishTitle: 'Auberginenauflauf',
  imagePath: 'https://source.unsplash.com/random/398x224',
  vegan: 'true',
}

export const Entry = () => (
  <Wrapper>
    <GlobalStyles />
    <ListEntry dish={dish}></ListEntry>
  </Wrapper>
)
