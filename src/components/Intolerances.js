import React from 'react'
import styled from 'styled-components/macro'
import milk from '../icons/milk.png'
import apple from '../icons/apple.png'
import wine from '../icons/wine.png'

const Intolerances = ({ dish }) => {
  return (
    <>
      <IntolerancesStyled>
        {dish.lactose ? (
          <IntolerantStyled>
            <LactoseIconStyled src={milk} alt="" />
            nicht laktosefrei
          </IntolerantStyled>
        ) : (
          <NotIntolerantStyled>
            <LactoseIconStyled src={milk} alt="" />
            laktosefrei
          </NotIntolerantStyled>
        )}

        {dish.fructose === 'viel enthalten' ? (
          <IntolerantStyled>
            <FructoseIconStyled src={apple} alt="" />
            viel Fruktose
          </IntolerantStyled>
        ) : (
          <NotIntolerantStyled>
            <FructoseIconStyled src={apple} alt="" />
            wenig Fruktose
          </NotIntolerantStyled>
        )}

        {dish.histamine ? (
          <IntolerantStyled>
            <HistamineIconStyled src={wine} alt="" />
            nicht histaminfrei
          </IntolerantStyled>
        ) : (
          <NotIntolerantStyled>
            <HistamineIconStyled src={wine} alt="" />
            histaminfrei
          </NotIntolerantStyled>
        )}
      </IntolerancesStyled>
    </>
  )
}

const IntolerancesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const LactoseIconStyled = styled.img`
  height: 24px;
  padding-right: 6px;
`

const FructoseIconStyled = styled.img`
  height: 24px;
  padding-right: 6px;
`

const HistamineIconStyled = styled.img`
  height: 24px;
  padding-right: 6px;
`

const IntolerantStyled = styled.span`
  display: flex;
  padding: 10px 10px;
  margin: 0 4px 6px 0;
  border: #ffa743 2px solid;
  background: #ffa743;
  color: #ffffff;
  border-radius: 40px;
`
const NotIntolerantStyled = styled.span`
  display: flex;
  padding: 10px 10px;
  margin: 0 6px 6px 0;
  border: #164c1a 2px solid;
  background: #164c1a;
  color: #ffffff;
  border-radius: 40px;
`

export default Intolerances
