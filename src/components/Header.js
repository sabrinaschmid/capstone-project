import PropTypes from 'prop-types'
import React from 'react'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import back from '../icons/back.svg'
import logo from '../icons/logo.svg'

Header.propTypes = {
  title: PropTypes.string,
}

export default function Header({ title }) {
  return (
    <HeaderStyled>
      <Logo>
        <Route exact path="/" render={() => <IconStyled src={logo} alt="" />} />
      </Logo>

      <Link className="backlink" to="/">
        <Route
          exact
          path="/dish/:dishId"
          render={() => <BackIcon src={back} alt="back-button" />}
        />
      </Link>

      {title}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bbc0b6;
  color: #164c1a;
  font-size: calc(14px + 1.5vmin);
  font-family: 'Poppins';
  position: relative;
  box-shadow: 0 1px 3px #bbc0b6;
`
const Logo = styled.div`
  display: flex;
  align-content: center;
`

const IconStyled = styled.img`
  height: 36px;
  padding-right: 12px;
`

const BackIcon = styled.img`
  cursor: pointer;
  display: flex;
  height: 48px;
  padding: 10px;
  background: #bbc0b6;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
`
