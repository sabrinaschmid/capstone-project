import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import DetailPage from '../../pages/DetailPage'
import LactoseIngredients from './LactoseIngredients'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'IngredientsToggle/Lactose Toggle',
  component: LactoseIngredients,
  DetailPage,
}

const singleDishA = {
  lactose: true,
  ingredientsWithLactose: ['Parmesan', 'Mozzarella'],
}
export const Critical = () => (
  <Wrapper>
    <GlobalStyles />
    <LactoseIngredients singleDish={singleDishA} />
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
