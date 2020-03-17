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
  const { vegan, vegetarian } = dish

  return (
    <>
      {vegan ? (
        <EatingPreferenceStyled>
          <IconStyled src={leaf} alt="" />
          vegan
        </EatingPreferenceStyled>
      ) : vegetarian ? (
        <EatingPreferenceStyled>
          <IconStyled src={carrot} alt="" />
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
  position: absolute;
  right: -4px;
  top: 2px;
  margin: 6px 12px;
  padding: 8px 10px;
  background: #bbc0b6;
  color: #164c1a;
  border-radius: 40px;
`

const IconStyled = styled.img`
  height: 24px;
  padding-right: 6px;
`
