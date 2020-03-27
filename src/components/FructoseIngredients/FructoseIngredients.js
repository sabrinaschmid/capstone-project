import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import CriticalBox from '../../common/CriticalBox'
import NonCriticalBox from '../../common/NonCriticalBox'
import greenapple from '../../icons/greenapple.svg'
import orangeapple from '../../icons/orangeapple.svg'

FructoseIngredients.propTypes = {
  singleDish: PropTypes.object.isRequired,
}

export default function FructoseIngredients({ singleDish }) {
  const { fructose, ingredientsWithFructose } = singleDish

  return (
    <CheckForCriticalIngredients>
      {fructose ? (
        <CriticalBox
          icon={orangeapple}
          intoleranceName="FRUKTOSE"
          subheadlineText="Dieses Gericht enthält typischerweise Fruktose."
          criticalIngredients={ingredientsWithFructose}
        />
      ) : (
        <NonCriticalBox
          icon={greenapple}
          intoleranceName="FRUKTOSE"
          subheadlineText="Dieses Gericht enthält typischerweise keine Fruktose."
        />
      )}
    </CheckForCriticalIngredients>
  )
}

const CheckForCriticalIngredients = styled.div`
  margin-top: 8px;
`
