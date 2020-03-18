import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import Header from '../components/Header'
import Footer from '../components/Footer'

AppGrid.propTypes = {
  title: PropTypes.string,
}

export default function AppGrid({ title, children }) {
  return (
    <AppGridStyled>
      <Header title={title} />
      {children}
      <Footer />
    </AppGridStyled>
  )
}

const AppGridStyled = styled.main`
  display: grid;
  grid-template-rows: 48px auto auto;
  align-content: flex-start;
  position: relative;
  overflow: auto;
  min-height: 100vh;
  padding-bottom: 120px;
`