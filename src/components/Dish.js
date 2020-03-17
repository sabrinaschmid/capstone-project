import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import EatingPreference from './EatingPreference'
import IntoleranceBadges from './IntoleranceBadges'

Dish.propTypes = {
  dish: PropTypes.object,
  id: PropTypes.string,
  originalDishTitle: PropTypes.string,
  imagePath: PropTypes.string,
  translatedDishTitle: PropTypes.string,
}

export default function Dish({ dish }) {
  const { id, originalDishTitle, imagePath, translatedDishTitle } = dish

  return (
    <DishStyled key={id}>
      <OriginalTitleStyled>{originalDishTitle}</OriginalTitleStyled>
      <ImageWithPreferenceStyled>
        <ImageStyled src={imagePath} alt="" />
        <EatingPreference dish={dish} />
      </ImageWithPreferenceStyled>
      <TranslatedTitleStyled>{translatedDishTitle}</TranslatedTitleStyled>
      <IntoleranceBadges dish={dish} />
    </DishStyled>
  )
}

const DishStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 8px 8px 20px;
  padding: 2px 12px 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 3px #bbc0b6;
`
const OriginalTitleStyled = styled.h3`
  display: flex;
  color: #164c1a;
  font-size: 20px;
`
const ImageWithPreferenceStyled = styled.div`
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
  margin: 14px 0;
  font-size: 18px;
`
