import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../../common/styles/GlobalStyles'
import SearchResults from './SearchResults'

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 414px;
`
const Headline = styled.h2``

const NoResultText = styled.h3``

export default {
  title: 'Search Results',
  component: SearchResults,
}

export const NoSearchResult = () => (
  <Wrapper>
    <GlobalStyles />
    <Headline>Dein Suchergebnis</Headline>
    <NoResultText>
      Es gibt leider kein Suchergebnis für <em>"xyz"</em>.
    </NoResultText>
  </Wrapper>
)
