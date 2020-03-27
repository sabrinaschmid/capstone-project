import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CriticalIngredients from '../components/CriticalIngredients'

CriticalBox.propTypes = {
  singleDish: PropTypes.object,
  intoleranceName: PropTypes.string.isRequired,
  subheadlineText: PropTypes.string.isRequired,
  criticalIngredients: PropTypes.array.isRequired,
}

export default function CriticalBox({
  icon,
  intoleranceName,
  subheadlineText,
  criticalIngredients,
}) {
  const [toggle, setToggle] = useState(false)

  return (
    <CriticalBoxStyled onClick={toggleBox}>
      <InfoWrapper>
        <IconStyled src={icon} alt="" />
        <TextWrapper>
          <HeadlineStyled>{intoleranceName}</HeadlineStyled>
          <SubheadlineStyled>{subheadlineText}</SubheadlineStyled>
        </TextWrapper>
      </InfoWrapper>
      <CriticalIngredients
        toggle={toggle}
        criticalIngredients={criticalIngredients}
      />
    </CriticalBoxStyled>
  )

  function toggleBox(event) {
    return event.stopPropagation() || setToggle(!toggle)
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
