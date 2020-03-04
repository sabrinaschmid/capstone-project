import React, { useState, useEffect } from 'react'
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
  border: #ff7e43 2px solid;
  background: #ff7e43;
  color: #ffffff;
  border-radius: 4px;
  position: absolute;
  right: -4px;
  top: 2px;
`

export default EatingPreference
