import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import ImageWithDiet from '../ImageWithDiet'
import Badges from '../Badges/Badges'

DishEntry.propTypes = {
  dish: PropTypes.object.isRequired,
}

export default function DishEntry({ dish }) {
  const { id, originalDishTitle, imagePath, translatedDishTitle } = dish

  return (
    <EntryStyled key={id}>
      <OriginalTitleStyled>{originalDishTitle}</OriginalTitleStyled>
      <ImageWithDiet singleDish={dish} imagePath={imagePath} />
      <TranslatedTitleStyled>{translatedDishTitle}</TranslatedTitleStyled>
      <Badges dish={dish} />
    </EntryStyled>
  )
}

const EntryStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 10px 12px 18px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 1px 3px var(--light-green);
`
const OriginalTitleStyled = styled.h3`
  display: flex;
  color: var(--dark-green);
`
const TranslatedTitleStyled = styled.h4`
  display: flex;
`
