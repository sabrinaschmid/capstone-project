import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import SearchInput from '../SearchInput/SearchInput'
import SearchReset from '../SearchReset/SearchReset'

SearchForm.propTypes = {
  handleDefault: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  searchDish: PropTypes.string.isRequired,
  setInputFocus: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
}

export default function SearchForm({
  handleDefault,
  handleInput,
  searchDish,
  setInputFocus,
  handleReset,
}) {
  return (
    <SearchStyled>
      <HeadlineStyled>Welches Gericht suchst Du?</HeadlineStyled>
      <FormStyled name="searchform" onSubmit={handleDefault}>
        <LabelStyled htmlFor="searchdish">Name des Gerichts</LabelStyled>
        <SearchInput
          handleInput={handleInput}
          setInputFocus={setInputFocus}
          searchDish={searchDish}
        />
        <LabelStyled htmlFor="select-country">Land</LabelStyled>
        <SelectStyled name="select-country" id="select-country" disabled>
          <OptionStyled>Italien *</OptionStyled>
        </SelectStyled>
        <NoteStyled>* Bald folgen Gerichte aus weiteren Ländern.</NoteStyled>
        <SearchReset handleReset={handleReset} />
      </FormStyled>
    </SearchStyled>
  )
}

const SearchStyled = styled.section``
const HeadlineStyled = styled.h2``
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 18px 12px;
  background: #bbc0b6;
  border-radius: 10px;
  box-shadow: 0 1px 3px var(--light-green);
`
const LabelStyled = styled.label``
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
