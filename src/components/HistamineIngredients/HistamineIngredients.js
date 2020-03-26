import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import CriticalBox from '../../common/CriticalBox'
import NonCriticalBox from '../../common/NonCriticalBox'
import greenwine from '../../icons/greenwine.svg'
import orangewine from '../../icons/orangewine.svg'

LactoseIngredients.propTypes = {
  singleDish: PropTypes.object,
  histamine: PropTypes.bool,
}
export default function LactoseIngredients({ singleDish }) {
  const { histamine, ingredientsWithHistamine } = singleDish

  return (
    <CheckForCriticalIngredients>
      {histamine ? (
        <CriticalBox
          icon={orangewine}
          intoleranceName="HISTAMIN"
          subheadlineText="Dieses Gericht enthält typischerweise Histamin."
          criticalIngredients={ingredientsWithHistamine}
        />
      ) : (
        <NonCriticalBox
          icon={greenwine}
          intoleranceName="HISTAMIN"
          subheadlineText="Dieses Gericht enthält typischerweise kein Histamin."
        />
      )}
    </CheckForCriticalIngredients>
  )
}

const CheckForCriticalIngredients = styled.div`
  margin-top: 8px;
`
