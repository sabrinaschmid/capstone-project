import PropTypes from 'prop-types'
import React from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { useSpring } from 'react-spring'
import styled from 'styled-components/macro'
import Footer from '../components/Footer'
import Header from '../components/Header'

AppGrid.propTypes = {
  title: PropTypes.string,
}

export default function AppGrid({ title, children }) {
  const [, setY] = useSpring(() => ({ y: 0 }))

  return (
    <AppGridStyled>
      <Header title={title} />
      {children}
      <Footer />
      <ToTopButton onClick={handleClick}>
        <FaChevronUp className="to-top-icon" />
      </ToTopButton>
    </AppGridStyled>
  )

  function handleClick() {
    setY({
      y: 0,
      reset: true,
      from: { y: window.scrollY },
      onFrame: props => window.scroll(0, props.y),
    })
  }
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
  position: relative;
`
const ToTopButton = styled.button`
  cursor: pointer;
  height: 44px;
  background: var(--medium-orange);
  color: var(--white);
  border-radius: 5px;
  border: 2px solid var(--medium-orange);
  transition: all 0.3s ease-out;
  position: fixed;
  bottom: 8px;
  right: 8px;

  .to-top-icon {
    display: flex;
    align-items: center;
    height: 42px;
    margin-left: 8px;
    margin-right: 8px;
  }

  :hover,
  :active,
  :focus {
    background: var(--dark-orange);
    border: 2px solid var(--dark-orange);
  }
`
