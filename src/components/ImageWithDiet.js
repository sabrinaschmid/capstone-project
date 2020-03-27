import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import Diet from './Diet'

ImageWithDiet.propTypes = {
  singleDish: PropTypes.object,
  imagePath: PropTypes.string,
}

export default function ImageWithDiet({ singleDish, imagePath }) {
  return (
    <Wrapper>
      <ImageStyled src={imagePath} alt="" />
      <Diet dish={singleDish} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`
const ImageStyled = styled.img`
  width: 100%;
  margin-top: 8px;
  background: var(--white);
  border-radius: 10px;
`
