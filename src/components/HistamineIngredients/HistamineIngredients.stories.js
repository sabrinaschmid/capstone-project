import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/GlobalStyles'
import HistamineIngredients from './HistamineIngredients'
import DishDetail from '../../pages/DishDetail'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'IngredientsToggle/Histamine Toggle',
  component: HistamineIngredients,
  DishDetail,
}

const singleDishA = {
  histamine: true,
}
export const Critical = () => (
  <Wrapper>
    <GlobalStyles />
    <HistamineIngredients singleDish={singleDishA}></HistamineIngredients>
  </Wrapper>
)

const singleDishB = {
  histamine: false,
}

export const NotCritical = () => (
  <Wrapper>
    <GlobalStyles />
    <HistamineIngredients singleDish={singleDishB}></HistamineIngredients>
  </Wrapper>
)