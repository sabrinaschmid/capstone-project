import { action } from '@storybook/addon-actions'
import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import SearchForm from './SearchForm'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'Search Form',
  component: SearchForm,
}

export const Search = () => (
  <Wrapper>
    <GlobalStyles />
    <SearchForm
      handleReset={action('reset input')}
      handleInput={action('search for dish')}
      handleDefault={action('prevent default')}
    />
  </Wrapper>
)
