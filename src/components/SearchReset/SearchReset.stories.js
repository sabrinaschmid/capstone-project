import { action } from '@storybook/addon-actions'
import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import SearchReset from './SearchReset'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'Search Reset Button',
  component: SearchReset,
}

export const SearchResetButton = () => (
  <Wrapper>
    <GlobalStyles />
    <SearchReset handleReset={action('reset input')} />
  </Wrapper>
)
