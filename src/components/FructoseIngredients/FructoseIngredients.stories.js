import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import FructoseIngredients from './FructoseIngredients'
import DetailPage from '../../pages/DetailPage'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'IngredientsToggle/Fructose Toggle',
  component: FructoseIngredients,
  DetailPage,
}

const singleDishA = {
  fructose: 'viel enthalten',
  ingredientsWithFructose: ['Zucker', 'Zitronensaft', 'Aubergine'],
}
export const Critical = () => (
  <Wrapper>
    <GlobalStyles />
    <FructoseIngredients singleDish={singleDishA}></FructoseIngredients>
  </Wrapper>
)

const singleDishB = {
  fructose: 'wenig enthalten',
}

export const NotCritical = () => (
  <Wrapper>
    <GlobalStyles />
    <FructoseIngredients singleDish={singleDishB}></FructoseIngredients>
  </Wrapper>
)
