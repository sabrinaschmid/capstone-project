import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import EatingPreference from './EatingPreference'
import Intolerances from './Intolerances'

export default function Dish({ dish }) {
  Dish.propTypes = {
    dish: PropTypes.object,
    originalDishTitle: PropTypes.string,
    imagePath: PropTypes.string,
    translatedDishTitle: PropTypes.string,
  }

  return (
    <DishStyled key={dish.id}>
      <OriginalTitleStyled>{dish.originalDishTitle}</OriginalTitleStyled>
      <ImagePreferenceStyled>
        <ImageStyled src={dish.imagePath} alt="" />
        <EatingPreference dish={dish} />
      </ImagePreferenceStyled>
      <TranslatedTitleStyled>{dish.translatedDishTitle}</TranslatedTitleStyled>
      <Intolerances dish={dish}></Intolerances>
    </DishStyled>
  )
}

const DishStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 6px;
  padding: 12px;
  border: #ffdf9f 1px solid;
  border-radius: 10px;
  background: #ffffff;
`
const OriginalTitleStyled = styled.h3`
  display: flex;
  font-size: 24px;
  color: #164c1a;
`

const ImagePreferenceStyled = styled.div`
  display: flex;
  position: relative;
`
const ImageStyled = styled.img`
  width: 100%;
  background: white;
  border-radius: 10px;
`
const TranslatedTitleStyled = styled.h4`
  display: flex;
  font-size: 18px;
  font-style: italic;
`
