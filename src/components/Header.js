import PropTypes from 'prop-types'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Route, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
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
            <FaChevronLeft className="back-icon" />
          </Button>
        )}
      />

      <TitleStyled>{title}</TitleStyled>
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
  background: var(--light-green);
  color: var(--dark-green);
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-out;

  .back-icon {
    display: flex;
    align-items: center;
    /* color: var(--dark-green); */
    height: 46px;
    margin-left: 8px;
    margin-right: 8px;
  }

  :hover {
    color: var(--light-orange);
  }
`
const TitleStyled = styled.h1``
