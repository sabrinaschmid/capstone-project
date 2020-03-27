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
  title: 'Search Form/Input Field',
  component: SearchInput,
}

const Label = styled.p`
  margin-bottom: 6px;
`

export const Input = () => (
  <Wrapper>
    <GlobalStyles />
    <Label>Name des Gerichts</Label>
    <SearchInput handleInput={action('search for dish')} />
  </Wrapper>
)
