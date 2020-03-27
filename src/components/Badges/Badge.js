import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

Badge.propTypes = {
  intolerance: PropTypes.bool,
  intolerantText: PropTypes.string,
  notIntolerantText: PropTypes.string,
}

export default function Badge({
  intolerance,
  icon,
  intolerantText,
  notIntolerantText,
}) {
  return (
    <div>
      {intolerance ? (
        <CriticalStyled>
          <IconStyled src={icon} alt="" />
          {intolerantText}
        </CriticalStyled>
      ) : (
        <NotCriticalStyled>
          <IconStyled src={icon} alt="" />
          {notIntolerantText}
        </NotCriticalStyled>
      )}
    </div>
  )
}

const CriticalStyled = styled.span`
  display: flex;
  margin: 6px 4px 0 0;
  padding: 10px;
  background: var(--medium-orange);
  color: var(--white);
  border-radius: 40px;
`
const NotCriticalStyled = styled.span`
  display: flex;
  margin: 6px 4px 0 0;
  padding: 10px;
  background: var(--dark-green);
  color: var(--white);
  border-radius: 40px;
`
const IconStyled = styled.img`
  height: 22px;
  padding-right: 6px;
`
