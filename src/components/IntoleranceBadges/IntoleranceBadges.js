import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import apple from '../../icons/apple.svg'
import milk from '../../icons/milk.svg'
import wine from '../../icons/wine.svg'

IntolerancesBadges.propTypes = {
  dish: PropTypes.object,
  lactose: PropTypes.bool,
  fructose: PropTypes.string,
  histamine: PropTypes.bool,
}
export default function IntolerancesBadges({ dish }) {
  const { lactose, fructose, histamine } = dish

  return (
    <IntolerancesStyled>
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
    </IntolerancesStyled>
  )
}

const IntolerancesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const IntolerantStyled = styled.span`
  display: flex;
  margin: 0 4px 8px 0;
  padding: 10px;
  background: #ffa743;
  color: #ffffff;
  border: #ffa743 2px solid;
  border-radius: 40px;
`
const NotIntolerantStyled = styled.span`
  display: flex;
  margin: 0 6px 8px 0;
  padding: 10px;
  background: #164c1a;
  color: #ffffff;
  border: #164c1a 2px solid;
  border-radius: 40px;
`
const IconStyled = styled.img`
  height: 24px;
  padding-right: 6px;
`