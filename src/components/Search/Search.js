import PropTypes from 'prop-types'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components/macro'

Search.propTypes = {
  handleInput: PropTypes.func,
}

export default function Search({ handleInput, handleReset, searchDish }) {
  return (
    <SearchStyled>
      <SearchHeadlineStyled>Welches Gericht suchst Du?</SearchHeadlineStyled>
      <SearchFormStyled onSubmit={handleDefault}>
        <LabelStyled htmlFor="search-dish">Name des Gerichts</LabelStyled>
        <InputStyled
          onChange={handleInput}
          type="search"
          name="search-dish"
          id="search-dish"
          value={searchDish}
          placeholder="z.B. Pasta alla Norma"
          required
        />
        <LabelStyled htmlFor="select-country">Land</LabelStyled>
        <SelectStyled name="select-country" id="select-country" disabled>
          <OptionStyled>Italien *</OptionStyled>
        </SelectStyled>
        <NoteStyled>* Bald folgen Gerichte aus weiteren Ländern.</NoteStyled>
        <ResetButtonStyled type="reset" onClick={handleReset}>
          <FaTimes className="reset-icon" />
          Suche zurücksetzen
        </ResetButtonStyled>
      </SearchFormStyled>
    </SearchStyled>
  )

  function handleDefault(event) {
    return event.preventDefault() || event.target.blur()
  }
}

const SearchStyled = styled.section``

const SearchHeadlineStyled = styled.h2`
  margin-bottom: 0;
  padding: 4px 10px 0;
`
const SearchFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 8px 8px 2px;
  padding: 18px 12px 20px 12px;
  background: #bbc0b6;
  border-radius: 10px;
  box-shadow: 0 1px 3px var(--light-green);
`
const LabelStyled = styled.label`
  display: inline-block;
  padding-bottom: 6px;
`

const InputStyled = styled.input`
  box-sizing: border-box;
  height: 40px;
  margin-bottom: 12px;
  padding-left: 6px;
  border-radius: 5px;
  border: 0.7px solid var(--light-green);
`
const SelectStyled = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-sizing: border-box;
  height: 40px;
  padding-left: 6px;
  background: var(--light-grey);
  border-radius: 5px;
  border: 0.7px solid var(--light-green);
`
const OptionStyled = styled.option``

const NoteStyled = styled.p`
  display: flex;
  margin-top: 2px;
  padding-top: 0;
  padding-left: 2px;
  font-size: 13px;
  font-style: italic;
`
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
