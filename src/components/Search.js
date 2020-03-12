import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import search from '../icons/search.svg'

export default function Search({ handleInput }) {
  Search.propTypes = {
    handleInput: PropTypes.func,
  }
  return (
    <SearchStyled>
      <SearchHeadlineStyled>
        Nach welchem Gericht suchst Du?
      </SearchHeadlineStyled>
      <SearchBoxStyled>
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
        <SearchButtonStyled type="submit">
          <SearchIconStyled src={search} alt="" />
          Suchen
        </SearchButtonStyled>
      </SearchBoxStyled>
    </SearchStyled>
  )
}

const SearchStyled = styled.section``

const SearchHeadlineStyled = styled.h2`
  padding: 12px 10px 0;
  margin-bottom: 0;
  font-size: 22px;
`

const SearchBoxStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 12px 8px 2px;
  padding: 20px 12px 20px 12px;
  /* border: #bbc0b6 1px solid; */
  border-radius: 10px;
  background: #bbc0b6;
  box-shadow: 0 1px 3px #bbc0b6;
  /* transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); */
`
const LabelStyled = styled.label`
  display: inline-block;
  padding-bottom: 6px;
`

const InputStyled = styled.input`
  height: 40px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 0.7px solid #bbc0b6;
  padding-left: 6px;
  border-radius: 5px;
`
const SelectStyled = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  height: 40px;
  box-sizing: border-box;
  border: 0.7px solid #bbc0b6;
  padding-left: 6px;
  font-size: 16px;
  border-radius: 5px;
  background: #d9dbde;
`
const OptionStyled = styled.option``

const NoteStyled = styled.p`
  display: flex;
  padding-left: 6px;
  font-size: 13px;
  font-style: italic;
`

const SearchIconStyled = styled.img`
  height: 22px;
  padding-right: 12px;
`
const SearchButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  padding: 10px 10px;
  margin: 12px 12px 4px 0;
  width: 50vw;
  height: 48px;
  background: #ff7e43;
  border: #ff7e43 2px solid;
  color: #ffffff;
  border-radius: 5px;
  font-size: 18px;
`

// button active
