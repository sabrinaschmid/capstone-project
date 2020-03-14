import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import carrot from '../icons/carrot.svg'
import leaf from '../icons/leaf.svg'

EatingPreference.propTypes = {
  vegan: PropTypes.bool,
  vegetarian: PropTypes.bool,
}

export default function EatingPreference({ dish }) {
  return (
    <>
      {dish.vegan ? (
        <EatingPreferenceStyled>
          <VeganIconStyled src={leaf} alt="" />
          vegan
        </EatingPreferenceStyled>
      ) : dish.vegetarian ? (
        <EatingPreferenceStyled>
          <VegetarianIconStyled src={carrot} alt="" />
          vegetarisch
        </EatingPreferenceStyled>
      ) : (
        ''
      )}
    </>
  )
}

const EatingPreferenceStyled = styled.span`
  display: flex;
  align-items: stretch;
  padding: 8px 10px;
  margin: 6px 12px;
  border: #9fa39b 1px solid;
  background: #bbc0b6;
  color: #164c1a;
  border-radius: 40px;
  position: absolute;
  right: -4px;
  top: 2px;
`

const VeganIconStyled = styled.img`
  height: 24px;
  padding-right: 6px;
`
const VegetarianIconStyled = styled.img`
  height: 24px;
  padding-right: 6px;
`
