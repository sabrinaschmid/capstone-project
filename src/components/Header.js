import PropTypes from 'prop-types'
import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import back from '../icons/back.svg'
import logo from '../icons/logo.svg'

Header.propTypes = {
  title: PropTypes.string,
}

export default function Header({ title }) {
  const history = useHistory()

  return (
    <HeaderStyled>
      <Logo>
        <Route exact path="/" render={() => <IconStyled src={logo} alt="" />} />
      </Logo>

      <Route
        exact
        path="/dish/:dishId"
        render={() => (
          <Button onClick={onClick}>
            <BackIcon src={back} />
          </Button>
        )}
      />

      {title}
    </HeaderStyled>
  )

  function onClick() {
    history.goBack()
  }
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--light-green);
  color: var(--dark-green);
  font-size: calc(14px + 1.5vmin);
  font-family: 'Poppins';
  position: relative;
`
const Logo = styled.div`
  display: flex;
  align-content: center;
`

const IconStyled = styled.img`
  height: 36px;
  padding-right: 12px;
`

const Button = styled.button`
  cursor: pointer;
  display: flex;
  height: 48px;
  padding: 10px;
  background: var(--light-green);
  border: none;
  position: absolute;
  top: 0;
  left: 0;
`

const BackIcon = styled.img`
  height: 48px;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
`
