import React from 'react'
import styled from 'styled-components/macro'

const EatingPreference = ({ dish }) => {
  return (
    <>
      {dish.vegan ? (
        <EatingPreferenceStyled>vegan</EatingPreferenceStyled>
      ) : dish.vegetarian ? (
        <EatingPreferenceStyled>vegetarisch</EatingPreferenceStyled>
      ) : (
        ''
      )}
    </>
  )
}

const EatingPreferenceStyled = styled.span`
  padding: 6px 12px;
  margin: 6px 12px;
  border: #ffdf9f 1px solid;
  background: #ffa743;
  color: #ffffff;
  border-radius: 4px;
  position: absolute;
  right: -4px;
  top: 2px;
`

export default EatingPreference
