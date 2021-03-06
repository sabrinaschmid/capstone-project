import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import DetailPage from '../../pages/DetailPage'
import FructoseIngredients from './FructoseIngredients'

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
  fructose: true,
  ingredientsWithFructose: ['Zucker', 'Zitronensaft', 'Aubergine'],
}
export const Critical = () => (
  <Wrapper>
    <GlobalStyles />
    <FructoseIngredients singleDish={singleDishA}></FructoseIngredients>
  </Wrapper>
)

const singleDishB = {
  fructose: false,
}

export const NotCritical = () => (
  <Wrapper>
    <GlobalStyles />
    <FructoseIngredients singleDish={singleDishB}></FructoseIngredients>
  </Wrapper>
)
