import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/GlobalStyles'
import LactoseIngredients from './LactoseIngredients'
import DishDetail from '../../pages/DishDetail'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'IngredientsToggle/Lactose Toggle',
  component: LactoseIngredients,
  DishDetail,
}

const singleDishA = {
  lactose: true,
}
export const Critical = () => (
  <Wrapper>
    <GlobalStyles />
    <LactoseIngredients singleDish={singleDishA}></LactoseIngredients>
  </Wrapper>
)

const singleDishB = {
  lactose: false,
}

export const NotCritical = () => (
  <Wrapper>
    <GlobalStyles />
    <LactoseIngredients singleDish={singleDishB}></LactoseIngredients>
  </Wrapper>
)
