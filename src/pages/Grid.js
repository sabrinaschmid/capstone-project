import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'

Grid.propTypes = {
  title: PropTypes.string,
}

export default function Grid({ title, children }) {
  return (
    <AppGridStyled>
      <Header title={title} />
      <PageContentGrid>{children}</PageContentGrid>
      <Footer />
      <ScrollToTop />
    </AppGridStyled>
  )
}

const AppGridStyled = styled.main`
  display: grid;
  grid-template-rows: 48px auto auto;
  align-content: flex-start;
  position: relative;
  overflow: auto;
  max-width: 767px;
  min-height: 100vh;
  margin: auto;
  padding-bottom: 120px;
  background: var(--light-orange);
  border: solid 1px #bbc0b6;
`

const PageContentGrid = styled.div`
  margin: 8px 12px;
`
