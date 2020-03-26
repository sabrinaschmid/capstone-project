import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import CriticalBox from '../../common/CriticalBox'
import NonCriticalBox from '../../common/NonCriticalBox'
import greenmilk from '../../icons/greenmilk.svg'
import orangemilk from '../../icons/orangemilk.svg'

LactoseIngredients.propTypes = {
  singleDish: PropTypes.object,
}
export default function LactoseIngredients({ singleDish }) {
  const { lactose, ingredientsWithLactose } = singleDish

  return (
    <CheckForCriticalIngredients>
      {lactose ? (
        <CriticalBox
          icon={orangemilk}
          intoleranceName="LAKTOSE"
          subheadlineText="Dieses Gericht enthält typischerweise Laktose."
          criticalIngredients={ingredientsWithLactose}
        />
      ) : (
        <NonCriticalBox
          icon={greenmilk}
          intoleranceName="LAKTOSE"
          subheadlineText="Dieses Gericht enthält typischerweise keine Laktose."
        />
      )}
    </CheckForCriticalIngredients>
  )
}

const CheckForCriticalIngredients = styled.div`
  margin-top: 8px;
`
