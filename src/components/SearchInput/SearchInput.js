import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

SearchInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  searchDish: PropTypes.string.isRequired,
  setInputFocus: PropTypes.func.isRequired,
}

export default function SearchInput({
  handleInput,
  searchDish,
  setInputFocus,
}) {
  return (
    <InputStyled
      onChange={handleInput}
      type="search"
      name="searchdish"
      id="searchdish"
      value={searchDish}
      placeholder="z.B. Pasta alla Norma"
      required
      onFocus={() => setInputFocus(true)}
      onBlur={() => setInputFocus(false)}
    />
  )
}

const InputStyled = styled.input`
  -webkit-appearance: none;
  box-sizing: border-box;
  height: 40px;
  margin-bottom: 12px;
  padding-left: 8px;
  border-radius: 5px;
  border: 0.7px solid var(--light-green);
`
