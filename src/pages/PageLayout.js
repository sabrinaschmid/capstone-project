import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import logo from '../icons/logo.svg'

export default function PageLayout({ title, children }) {
  PageLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.array,
  }
  return (
    <PageStyled>
      <Header>
        <LogoStyled src={logo} alt="" />
        {title}
      </Header>
      {children}
    </PageStyled>
  )
}

const PageStyled = styled.main`
  display: grid;
  grid-template-rows: 48px auto;
  align-content: flex-start;
  overflow: auto;
`
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bbc0b6;
  color: #164c1a;
  font-size: calc(14px + 2vmin);
  font-family: 'Poppins';
`
const LogoStyled = styled.img`
  height: 36px;
  padding-right: 12px;
`