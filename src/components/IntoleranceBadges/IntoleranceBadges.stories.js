import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import IntoleranceBadges from './IntoleranceBadges'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
`
export default {
  title: 'Intolerance Badges',
  component: IntoleranceBadges,
}

const dishA = {
  lactose: true,
  fructose: 'viel enthalten',
  histamine: true,
}

export const Critical = () => (
  <Wrapper>
    <GlobalStyles />
    <IntoleranceBadges dish={dishA}></IntoleranceBadges>
  </Wrapper>
)

const dishB = {
  lactose: false,
  fructose: 'wenig enthalten',
  histamine: false,
}

export const NotCritical = () => (
  <Wrapper>
    <GlobalStyles />
    <IntoleranceBadges dish={dishB}></IntoleranceBadges>
  </Wrapper>
)
