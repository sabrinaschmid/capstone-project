import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import apple from '../../icons/apple.svg'
import milk from '../../icons/milk.svg'
import wine from '../../icons/wine.svg'
import Badge from './Badge'

Badges.propTypes = {
  dish: PropTypes.object.isRequired,
}

export default function Badges({ dish }) {
  const { lactose, fructose, histamine } = dish

  return (
    <BadgesContainer>
      <Badge
        intolerance={lactose}
        icon={milk}
        intolerantText={'nicht laktosefrei'}
        notIntolerantText={'laktosefrei'}
      />
      <Badge
        intolerance={fructose}
        icon={apple}
        intolerantText={'viel Fruktose'}
        notIntolerantText={'wenig Fruktose'}
      />
      <Badge
        intolerance={histamine}
        icon={wine}
        intolerantText={'nicht histaminfrei'}
        notIntolerantText={'histaminfrei'}
      />
    </BadgesContainer>
  )
}

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
