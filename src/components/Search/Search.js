import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import reset from '../../icons/reset.svg'

Search.propTypes = {
  handleInput: PropTypes.func,
}

export default function Search({ handleInput, handleReset }) {
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
          placeholder="z.B. Pasta alla Norma"
          required
        />
        <LabelStyled htmlFor="select-country">Land</LabelStyled>
        <SelectStyled name="select-country" id="select-country" disabled>
          <OptionStyled>Italien *</OptionStyled>
        </SelectStyled>
        <NoteStyled>* Bald folgen Gerichte aus weiteren Ländern.</NoteStyled>
        <ResetButtonStyled type="reset" onClick={handleReset}>
          <ResetIconStyled src={reset} alt="" />
          Suche zurücksetzen
        </ResetButtonStyled>
      </SearchFormStyled>
    </SearchStyled>
  )

  function handleDefault(event) {
    return event.preventDefault()
  }
}

const SearchStyled = styled.section``

const SearchHeadlineStyled = styled.h2`
  margin-bottom: 0;
  padding: 4px 10px 0;
  font-size: 22px;
`
const SearchFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 8px 8px 2px;
  padding: 18px 12px 20px 12px;
  background: #bbc0b6;
  border-radius: 10px;
  box-shadow: 0 1px 3px #bbc0b6;
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
  border: 0.7px solid #bbc0b6;
`
const SelectStyled = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-sizing: border-box;
  height: 40px;
  font-size: 16px;
  padding-left: 6px;
  background: #d9dbde;
  border-radius: 5px;
  border: 0.7px solid #bbc0b6;
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
  height: 44px;
  min-width: 220px;
  max-width: 300px;
  width: 60vw;
  margin: 0 12px 2px 12px;
  padding: 10px 10px;
  background: #ffffff;
  color: #ff7e43;
  border-radius: 5px;
  border: #ff7e43 2px solid;
  font-size: 16px;
`
const ResetIconStyled = styled.img`
  height: 18px;
  padding-right: 12px;
`
