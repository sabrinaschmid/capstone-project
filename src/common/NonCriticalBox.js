import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

NonCriticalBox.propTypes = {
  intoleranceName: PropTypes.string,
  subheadlineText: PropTypes.string,
}

export default function NonCriticalBox({
  icon,
  intoleranceName,
  subheadlineText,
}) {
  return (
    <NonCriticalBoxStyled>
      <InfoWrapper>
        <IconStyled src={icon} alt="" />
        <TextWrapper>
          <HeadlineStyled>{intoleranceName}</HeadlineStyled>
          <SubheadlineStyled>{subheadlineText}</SubheadlineStyled>
        </TextWrapper>
      </InfoWrapper>
    </NonCriticalBoxStyled>
  )
}

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
  color: var(--dark-green);
  font-size: 18px;
`
