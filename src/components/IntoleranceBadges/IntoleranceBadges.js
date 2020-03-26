import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import apple from '../../icons/apple.svg'
import milk from '../../icons/milk.svg'
import wine from '../../icons/wine.svg'

IntolerancesBadges.propTypes = {
  dish: PropTypes.object.isRequired,
}

export default function IntolerancesBadges({ dish }) {
  const { lactose, fructose, histamine } = dish

  return (
    <BadgesContainer>
      {lactose ? (
        <IntolerantStyled>
          <IconStyled src={milk} alt="" />
          nicht laktosefrei
        </IntolerantStyled>
      ) : (
        <NotIntolerantStyled>
          <IconStyled src={milk} alt="" />
          laktosefrei
        </NotIntolerantStyled>
      )}

      {fructose === 'viel enthalten' ? (
        <IntolerantStyled>
          <IconStyled src={apple} alt="" />
          viel Fruktose
        </IntolerantStyled>
      ) : (
        <NotIntolerantStyled>
          <IconStyled src={apple} alt="" />
          wenig Fruktose
        </NotIntolerantStyled>
      )}

      {histamine ? (
        <IntolerantStyled>
          <IconStyled src={wine} alt="" />
          nicht histaminfrei
        </IntolerantStyled>
      ) : (
        <NotIntolerantStyled>
          <IconStyled src={wine} alt="" />
          histaminfrei
        </NotIntolerantStyled>
      )}
    </BadgesContainer>
  )
}

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const IntolerantStyled = styled.span`
  display: flex;
  margin: 6px 4px 0 0;
  padding: 10px;
  background: var(--medium-orange);
  color: var(--white);
  border-radius: 40px;
`
const NotIntolerantStyled = styled.span`
  display: flex;
  margin: 6px 4px 0 0;
  padding: 10px;
  background: var(--dark-green);
  color: var(--white);
  border-radius: 40px;
`
const IconStyled = styled.img`
  height: 22px;
  padding-right: 6px;
`
