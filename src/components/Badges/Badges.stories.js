import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import Badges from './Badges'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
`
export default {
  title: 'Intolerance Badges',
  component: Badges,
}

const dishA = {
  lactose: true,
  fructose: true,
  histamine: true,
}

export const Critical = () => (
  <Wrapper>
    <GlobalStyles />
    <Badges dish={dishA}></Badges>
  </Wrapper>
)

const dishB = {
  lactose: false,
  fructose: false,
  histamine: false,
}

export const NotCritical = () => (
  <Wrapper>
    <GlobalStyles />
    <Badges dish={dishB}></Badges>
  </Wrapper>
)
