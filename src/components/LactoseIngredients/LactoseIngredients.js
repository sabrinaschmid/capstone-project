import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import greenmilk from '../../icons/greenmilk.svg'
import orangemilk from '../../icons/orangemilk.svg'

LactoseIngredients.propTypes = {
  singleDish: PropTypes.object,
  lactose: PropTypes.bool,
}
export default function LactoseIngredients({ singleDish }) {
  const { lactose } = singleDish
  const [toggleLactose, setToggleLactose] = useState(false)

  return (
    <CheckForCriticalIngredients>
      {lactose ? (
        <CriticalBoxStyled onClick={handleLactoseClick}>
          <IntoleranceInfoStyled>
            <IconStyled src={orangemilk} alt="" />
            <IntoleranceTextStyled>
              <IntoleranceNameStyled>LAKTOSE</IntoleranceNameStyled>
              <ContainsStyled>
                Dieses Gericht enthält typischerweise Laktose.
              </ContainsStyled>
            </IntoleranceTextStyled>
          </IntoleranceInfoStyled>
          <CriticalIngredientsLink>Ungeeignete Zutaten</CriticalIngredientsLink>
          {toggleLactose && (
            <CriticalIngredients>
              {renderLactoseIngredients()}
            </CriticalIngredients>
          )}
        </CriticalBoxStyled>
      ) : (
        <NonCriticalBoxStyled>
          <IntoleranceInfoStyled>
            <IconStyled src={greenmilk} alt="" />
            <IntoleranceTextStyled>
              <IntoleranceNameStyled>LAKTOSE</IntoleranceNameStyled>
              <ContainsNotStyled>
                Dieses Gericht enthält typischerweise keine Laktose.
              </ContainsNotStyled>
            </IntoleranceTextStyled>
          </IntoleranceInfoStyled>
        </NonCriticalBoxStyled>
      )}
    </CheckForCriticalIngredients>
  )

  function handleLactoseClick(event) {
    return event.stopPropagation() || setToggleLactose(!toggleLactose)
  }

  function renderLactoseIngredients() {
    const lactoseIngredients = singleDish?.ingredientsWithLactose
    if (lactoseIngredients) {
      return lactoseIngredients.map((singleIngredient, index) => {
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
const ContainsStyled = styled.p`
  margin-top: 0;
  color: #ffa743;
  font-size: 18px;
`
const ContainsNotStyled = styled.p`
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
