import { action } from '@storybook/addon-actions'
import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import SearchInput from './SearchInput'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
export default {
  title: 'Search Input Field',
  component: SearchInput,
}

const Label = styled.p`
  margin-bottom: 6px;
`

export const SearchResetButton = () => (
  <Wrapper>
    <GlobalStyles />
    <Label>Name des Gerichts</Label>
    <SearchInput handleInput={action('handle input')} />
  </Wrapper>
)
