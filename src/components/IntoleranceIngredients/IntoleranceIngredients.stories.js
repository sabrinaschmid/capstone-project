import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/GlobalStyles'
import IntoleranceIngredients from './IntoleranceIngredients'
import DishDetail from '../../pages/DishDetail'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'Intolerance Toggle',
  component: IntoleranceIngredients,
  DishDetail,
}

const singleDishA = {
  lactose: true,
  fructose: 'viel enthalten',
  histamine: true,
  toggleLactose: true,
  singleIngredient: 'Käse',
}
export const Critical = () => (
  <Wrapper>
    <GlobalStyles />
    <IntoleranceIngredients singleDish={singleDishA}></IntoleranceIngredients>
  </Wrapper>
)

const singleDishB = {
  lactose: false,
  fructose: 'wenig enthalten',
  histamine: false,
}

export const NotCritical = () => (
  <Wrapper>
    <GlobalStyles />
    <IntoleranceIngredients singleDish={singleDishB}></IntoleranceIngredients>
  </Wrapper>
)
