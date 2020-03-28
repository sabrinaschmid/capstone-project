import PropTypes from 'prop-types'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components/macro'

SearchReset.propTypes = {
  handleReset: PropTypes.func.isRequired,
}

export default function SearchReset({ handleReset }) {
  return (
    <ResetButtonStyled type="reset" onClick={handleReset}>
      <FaTimes className="reset-icon" />
      Suche zurücksetzen
    </ResetButtonStyled>
  )
}

const ResetButtonStyled = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  height: 44px;
  min-width: 220px;
  max-width: 300px;
  width: 60vw;
  margin: 0 12px 2px;
  padding: 6px;
  background: var(--white);
  color: var(--dark-orange);
  border-radius: 5px;
  border: 2px solid var(--dark-orange);
  transition: all 0.3s ease-out;

  .reset-icon {
    height: 30px;
    margin-right: 12px;
  }

  :hover,
  :active,
  :focus {
    background: var(--dark-orange);
    color: var(--white);
  }
`
