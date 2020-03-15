import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import Header from '../components/Header'
import Footer from '../components/Footer'

PageLayout.propTypes = {
  title: PropTypes.string,
}

export default function PageLayout({ title, children }) {
  return (
    <PageStyled>
      <Header title={title} />
      {children}
      <Footer />
    </PageStyled>
  )
}

const PageStyled = styled.main`
  display: grid;
  grid-template-rows: 48px auto auto;
  align-content: flex-start;
  overflow: auto;
`
