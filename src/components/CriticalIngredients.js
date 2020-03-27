import PropTypes from 'prop-types'
import React from 'react'
import { animated, config, useSpring } from 'react-spring'
import styled from 'styled-components/macro'

CriticalIngredients.propTypes = {
  toggle: PropTypes.bool,
  criticalIngredients: PropTypes.array.isRequired,
}

export default function CriticalIngredients({ toggle, criticalIngredients }) {
  const style = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)',
    config: config.gentle,
  })

  return (
    <>
      <IngredientsLink>Ungeeignete Zutaten</IngredientsLink>
      <Animation style={style}>
        {toggle && <Ingredients>{renderIngredients()}</Ingredients>}
      </Animation>
    </>
  )

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
