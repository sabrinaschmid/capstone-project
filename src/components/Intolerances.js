import React from 'react'
import styled from 'styled-components/macro'

const Intolerances = ({ dish }) => {
  return (
    <>
      <IntolerancesStyled>
        {dish.lactose ? (
          <IntolerantStyled> nicht laktosefrei </IntolerantStyled>
        ) : (
          <NotIntolerantStyled> laktosefrei </NotIntolerantStyled>
        )}

        {dish.fructose === 'viel enthalten' ? (
          <IntolerantStyled> viel Fruktose </IntolerantStyled>
        ) : (
          <NotIntolerantStyled> wenig Fruktose </NotIntolerantStyled>
        )}

        {dish.histamine ? (
          <IntolerantStyled> nicht histaminfrei </IntolerantStyled>
        ) : (
          <NotIntolerantStyled> histaminfrei </NotIntolerantStyled>
        )}
      </IntolerancesStyled>
    </>
  )
}

const IntolerancesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IntolerantStyled = styled.span`
  display: flex;
  padding: 8px 14px;
  margin: 0 6px 6px 0;
  border: #ff7e43 2px solid;
  background: #ff7e43;
  color: #e9eaeb;
  border-radius: 6px;
`
const NotIntolerantStyled = styled.span`
  display: flex;
  padding: 8px 14px;
  margin: 0 6px 6px 0;
  border: #164c1a 2px solid;
  background: #164c1a;
  color: #e9eaeb;
  border-radius: 6px;
`

export default Intolerances
