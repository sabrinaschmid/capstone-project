import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import styled from 'styled-components/macro'

CriticalBox.propTypes = {
  singleDish: PropTypes.object,
  intoleranceName: PropTypes.string,
  subheadlineText: PropTypes.string,
  criticalIngredients: PropTypes.array,
}

export default function CriticalBox({
  icon,
  intoleranceName,
  subheadlineText,
  criticalIngredients,
}) {
  const [toggle, setToggle] = useState(false)
  const style = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)',
    config: config.gentle,
  })

  return (
    <CriticalBoxStyled onClick={toggleBox}>
      <InfoWrapper>
        <IconStyled src={icon} alt="" />
        <TextWrapper>
          <HeadlineStyled>{intoleranceName}</HeadlineStyled>
          <SubheadlineStyled>{subheadlineText}</SubheadlineStyled>
        </TextWrapper>
      </InfoWrapper>
      <IngredientsLink>Ungeeignete Zutaten</IngredientsLink>
      <Animation style={style}>
        {toggle && <Ingredients>{renderIngredients()}</Ingredients>}
      </Animation>
    </CriticalBoxStyled>
  )

  function toggleBox(event) {
    return event.stopPropagation() || setToggle(!toggle)
  }

  function renderIngredients() {
    return criticalIngredients.map((singleIngredient, index) => {
      return (
        <li key={index} className="list">
          {singleIngredient}
        </li>
      )
    })
  }
}

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
const InfoWrapper = styled.div`
  display: flex;
`
const IconStyled = styled.img`
  height: 70px;
  margin: 0 4px;
  padding-right: 16px;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const HeadlineStyled = styled.h3`
  display: flex;
`
const SubheadlineStyled = styled.p`
  margin-top: 0;
  color: var(--medium-orange);
  font-size: 18px;
`
const IngredientsLink = styled.p`
  display: inline-block;
  position: relative;
  text-decoration: underline;
  margin-top: 0;
`
const Animation = styled(animated.div)``

const Ingredients = styled.ul`
  margin-top: 0;
  padding-left: 18px;
  line-height: 1.8em;
`
