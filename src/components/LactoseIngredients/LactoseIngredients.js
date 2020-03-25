import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
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
  const style = useSpring({
    opacity: toggleLactose ? 1 : 0,
    transform: toggleLactose ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)',
    config: config.gentle,
  })

  return (
    <CheckForCriticalIngredients>
      {lactose ? (
        <CriticalBoxStyled onClick={toggleBox}>
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
          <Animation style={style}>
            {toggleLactose && (
              <CriticalIngredients>{renderIngredients()}</CriticalIngredients>
            )}
          </Animation>
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

  function toggleBox(event) {
    return event.stopPropagation() || setToggleLactose(!toggleLactose)
  }

  function renderIngredients() {
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

const CheckForCriticalIngredients = styled.div`
  margin-top: 8px;
`

const CriticalBoxStyled = styled.section`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0 0 24px;
  padding: 18px 12px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 1px 3px var(--light-green);
`
const NonCriticalBoxStyled = styled.section`
  cursor: default;
  display: flex;
  flex-direction: column;
  margin: 0 0 24px;
  padding: 18px 12px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 1px 3px var(--light-green);
`

const IntoleranceInfoStyled = styled.div`
  display: flex;
`
const IconStyled = styled.img`
  height: 70px;
  margin: 0 4px;
  padding-right: 16px;
`
const IntoleranceTextStyled = styled.div`
  display: flex;
  flex-direction: column;
`
const IntoleranceNameStyled = styled.h3`
  display: flex;
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
  margin-top: 0;
`
const Animation = styled(animated.div)``

const CriticalIngredients = styled.ul`
  margin-top: 0;
  padding-left: 18px;
  line-height: 1.8em;
`
