import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import greenapple from '../../icons/greenapple.svg'
import orangeapple from '../../icons/orangeapple.svg'

FructoseIngredients.propTypes = {
  singleDish: PropTypes.object,
  fructose: PropTypes.string,
}
export default function FructoseIngredients({ singleDish }) {
  const { fructose } = singleDish
  const [toggleFructose, setToggleFructose] = useState(false)

  return (
    <CheckForCriticalIngredients>
      {fructose === 'viel enthalten' ? (
        <CriticalBoxStyled onClick={handleFructoseClick}>
          <IntoleranceInfoStyled>
            <IconStyled src={orangeapple} alt="" />
            <IntoleranceTextStyled>
              <IntoleranceNameStyled>FRUKTOSE</IntoleranceNameStyled>
              <IntolerantStyled>
                Dieses Gericht enthält typischerweise Fruktose.
              </IntolerantStyled>
            </IntoleranceTextStyled>
          </IntoleranceInfoStyled>
          <CriticalIngredientsLink>Ungeeignete Zutaten</CriticalIngredientsLink>
          {toggleFructose && (
            <CriticalIngredients>
              {renderFructoseIngredients()}
            </CriticalIngredients>
          )}
        </CriticalBoxStyled>
      ) : (
        <NonCriticalBoxStyled>
          <IntoleranceInfoStyled>
            <IconStyled src={greenapple} alt="" />
            <IntoleranceTextStyled>
              <IntoleranceNameStyled>FRUKTOSE</IntoleranceNameStyled>
              <NotIntolerantStyled>
                Dieses Gericht enthält typischerweise keine Fruktose.
              </NotIntolerantStyled>
            </IntoleranceTextStyled>
          </IntoleranceInfoStyled>
        </NonCriticalBoxStyled>
      )}
    </CheckForCriticalIngredients>
  )

  function handleFructoseClick(event) {
    return event.stopPropagation() || setToggleFructose(!toggleFructose)
  }

  function renderFructoseIngredients() {
    const fructoseIngredients = singleDish?.ingredientsWithFructose
    if (fructoseIngredients) {
      return fructoseIngredients.map((singleIngredient, index) => {
        return <li key={index}>{singleIngredient}</li>
      })
    }
  }
}

const CheckForCriticalIngredients = styled.div``

const CriticalBoxStyled = styled.section`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 8px 0 20px;
  padding: 18px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 3px #bbc0b6;
`
const NonCriticalBoxStyled = styled.section`
  cursor: default;
  display: flex;
  flex-direction: column;
  margin: 8px 0 20px;
  padding: 18px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 3px #bbc0b6;
`

const IntoleranceInfoStyled = styled.div`
  display: flex;
`
const IconStyled = styled.img`
  height: 70px;
  padding-right: 24px;
`
const IntoleranceTextStyled = styled.div`
  display: flex;
  flex-direction: column;
`
const IntoleranceNameStyled = styled.h3`
  display: flex;
  margin-top: 0;
  font-size: 18px;
`
const IntolerantStyled = styled.p`
  margin-top: 0;
  color: #ffa743;
  font-size: 18px;
`
const NotIntolerantStyled = styled.p`
  margin-top: 0;
  color: #164c1a;
  font-size: 18px;
`
const CriticalIngredientsLink = styled.p`
  display: inline-block;
  position: relative;
  text-decoration: underline;
`
const CriticalIngredients = styled.ul`
  margin-top: 0;
  padding-left: 18px;
  line-height: 1.8em;
`