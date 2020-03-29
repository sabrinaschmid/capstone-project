import PropTypes from 'prop-types'
import React from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { useSpring } from 'react-spring'
import styled from 'styled-components/macro'

ScrollToTop.propTypes = {
  inputFocus: PropTypes.bool,
}

export default function ScrollToTop({ inputFocus }) {
  const [, setY] = useSpring(() => ({ y: 0 }))

  return (
    <ToTopButton
      name="to-top-button"
      className={inputFocus ? 'none' : ''}
      onClick={scrollToTop}
    >
      <FaChevronUp className="to-top-icon" />
    </ToTopButton>
  )

  function scrollToTop() {
    setY({
      y: 0,
      reset: true,
      from: { y: window.scrollY },
      onFrame: props => window.scroll(0, props.y),
    })
  }
}

const ToTopButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  background: var(--medium-orange);
  color: var(--white);
  border-radius: 5px;
  border: 2px solid var(--medium-orange);
  transition: all 0.3s ease-out;
  position: fixed;
  bottom: 12px;
  right: 12px;
  opacity: 0.8;

  &.none {
    display: none;
  }

  .to-top-icon {
    height: 44px;
  }

  :hover,
  :active,
  :focus {
    background: var(--dark-orange);
    border: 2px solid var(--dark-orange);
  }
`
