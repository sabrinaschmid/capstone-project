import { action } from '@storybook/addon-actions'
import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/GlobalStyles'
import Search from './Search'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'Search',
  component: Search,
}

export const SearchForm = () => (
  <Wrapper>
    <GlobalStyles />
    <Search
      handleReset={action('reset input')}
      handleInput={action('search for dish')}
      handleDefault={action('prevent default')}
    />
  </Wrapper>
)
