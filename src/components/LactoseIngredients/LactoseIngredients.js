import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
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
          <Outer>
            {toggleLactose && (
              <CriticalIngredients>
                {renderLactoseIngredients()}
              </CriticalIngredients>
            )}
          </Outer>
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
        return (
          <li key={index} className="list">
            {singleIngredient}
          </li>
        )
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
const Outer = styled(animated.div)`
  /* word-break: break-word;
  background: #f2f2f2;
  margin: 10px -20px 10px;
  position: relative;
  overflow: hidden; */
  /* 
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
  }

  &::before {
    height: 8px;
    background: linear-gradient(#0002, #0000);
  }

  &::after {
    height: 8px;
    bottom: 0;
    background: linear-gradient(#0000, #0001);
  } */
`
const CriticalIngredients = styled.ul`
  margin-top: 0;
  padding-left: 18px;
  line-height: 1.8em;
`
//   :active {
//     transition: all 10s ease-in;
//   }

//   .list {
//     color: hotpink;
//   }
// `
