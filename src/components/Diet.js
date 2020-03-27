import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import carrot from '../icons/carrot.svg'
import leaf from '../icons/leaf.svg'

Diet.propTypes = {
  dish: PropTypes.object,
}

export default function Diet({ dish }) {
  const { vegan, vegetarian } = dish

  return (
    <>
      {vegan ? (
        <BadgeStyled>
          <IconStyled src={leaf} alt="" />
          vegan
        </BadgeStyled>
      ) : vegetarian ? (
        <BadgeStyled>
          <IconStyled src={carrot} alt="" />
          vegetarisch
        </BadgeStyled>
      ) : (
        ''
      )}
    </>
  )
}

const BadgeStyled = styled.span`
  display: flex;
  align-items: stretch;
  position: absolute;
  right: -4px;
  top: 2px;
  margin: 12px 10px;
  padding: 10px;
  background: var(--light-green);
  color: var(--dark-green);
  border-radius: 40px;
`

const IconStyled = styled.img`
  height: 22px;
  padding-right: 6px;
`
