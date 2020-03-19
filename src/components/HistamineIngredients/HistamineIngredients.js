import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import greenwine from '../../icons/greenwine.svg'
import orangewine from '../../icons/orangewine.svg'

LactoseIngredients.propTypes = {
  singleDish: PropTypes.object,
  histamine: PropTypes.bool,
}
export default function LactoseIngredients({ singleDish }) {
  const { histamine } = singleDish
  const [toggleHistamine, setToggleHistamine] = useState(false)

  return (
    <CheckForCriticalIngredients>
      {histamine ? (
        <CriticalBoxStyled onClick={handleHistamineClick}>
          <IntoleranceInfoStyled>
            <IconStyled src={orangewine} alt="" />
            <IntoleranceTextStyled>
              <IntoleranceNameStyled>HISTAMIN</IntoleranceNameStyled>
              <ContainsStyled>
                Dieses Gericht enthält typischerweise Histamin.
              </ContainsStyled>
            </IntoleranceTextStyled>
          </IntoleranceInfoStyled>
          <CriticalIngredientsLink>Ungeeignete Zutaten</CriticalIngredientsLink>
          {toggleHistamine && (
            <CriticalIngredients>
              {renderHistamineIngredients()}
            </CriticalIngredients>
          )}
        </CriticalBoxStyled>
      ) : (
        <NonCriticalBoxStyled>
          <IntoleranceInfoStyled>
            <IconStyled src={greenwine} alt="" />
            <IntoleranceTextStyled>
              <IntoleranceNameStyled>HISTAMIN</IntoleranceNameStyled>
              <ContainsNotStyled>
                Dieses Gericht enthält typischerweise keine Histamin.
              </ContainsNotStyled>
            </IntoleranceTextStyled>
          </IntoleranceInfoStyled>
        </NonCriticalBoxStyled>
      )}
    </CheckForCriticalIngredients>
  )

  function handleHistamineClick(event) {
    return event.stopPropagation() || setToggleHistamine(!toggleHistamine)
  }

  function renderHistamineIngredients() {
    const histamineIngredients = singleDish?.ingredientsWithHistamine
    if (histamineIngredients) {
      return histamineIngredients.map((singleIngredient, index) => {
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
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 1px 3px #bbc0b6;
`
const NonCriticalBoxStyled = styled.section`
  cursor: default;
  display: flex;
  flex-direction: column;
  margin: 8px 0 20px;
  padding: 18px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 1px 3px var(--light-green);
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
  color: var(--medium-orange);
  font-size: 18px;
`
const ContainsNotStyled = styled.p`
  margin-top: 0;
  color: var(--dark-green);
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
