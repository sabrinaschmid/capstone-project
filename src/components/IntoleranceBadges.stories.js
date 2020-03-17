import React from 'react'
import styled from 'styled-components/macro'
import IntoleranceBadges from './IntoleranceBadges'
import GlobalStyles from '../common/GlobalStyles'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
`
export default {
  title: 'Intolerance Badges',
  component: IntoleranceBadges,
}

const dish = () => {}

export const NotCritical = () => (
  <Wrapper>
    <GlobalStyles />
    <IntoleranceBadges
      dish={
        ((dish.lactose = 'true'),
        (dish.fructose = 'viel enthalten'),
        (dish.histamine = 'true'))
      }
    ></IntoleranceBadges>
  </Wrapper>
)

export const Critical = () => (
  <Wrapper>
    <GlobalStyles />
    <IntoleranceBadges dish={dish}></IntoleranceBadges>
  </Wrapper>
)
