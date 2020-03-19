import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/GlobalStyles'
import Search from './Search'
import { action } from '@storybook/addon-actions'

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
    <Search />
  </Wrapper>
)
