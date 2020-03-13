import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import discard from '../icons/discard.svg'
import Dish from './Dish'

export default function Search({ handleInput, filteredDishes }) {
  Search.propTypes = {
    handleInput: PropTypes.func,
    filteresDishes: PropTypes.array,
  }

  function handleDefault(event) {
    return event.preventDefault()
    {
      /* // filteredDishes.length > 0 || Enter ? Anker :  zu filteredDish mit Index 0 springen */
    }
  }

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
        <LabelStyled htmlFor="search-country">Land</LabelStyled>
        <SelectStyled name="search-country" id="search-country" disabled>
          <OptionStyled>Italien *</OptionStyled>
        </SelectStyled>
        <NoteStyled>* Bald folgen Gerichte aus weiteren Ländern.</NoteStyled>
        <SearchButtonStyled type="reset">
          <SearchIconStyled src={discard} alt="" />
          Suche zurücksetzen
        </SearchButtonStyled>
      </SearchFormStyled>
    </SearchStyled>
  )
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
const SearchIconStyled = styled.img`
  height: 18px;
  padding-right: 12px;
`
const SearchButtonStyled = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: center;
  height: 44px;
  width: 60vw;
  margin: 0 12px 2px 0;
  padding: 10px 10px;
  background: #ffffff;
  font-size: 16px;
  color: #ff7e43;
  border-radius: 5px;
  border: #ff7e43 2px solid;
`

// button active
