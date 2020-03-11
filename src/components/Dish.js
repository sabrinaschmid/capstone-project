import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import DishDetail from './DishDetail'
import EatingPreference from './EatingPreference'
import Intolerances from './Intolerances'

export default function Dish({ dishesState }) {
  return (
    <>
      <DishListHeadlineStyled>
        Alle italienischen Gerichte
      </DishListHeadlineStyled>
      <DishListStyled>
        {dishesState.map(dish => (
          <Link to={`/dish/${dish.id}`} children={<DishDetail />}>
            <DishStyled key={dish.id}>
              <OriginalTitleStyled>
                {dish.originalDishTitle}
              </OriginalTitleStyled>
              <ImagePreferenceStyled>
                <ImageStyled src={dish.imagePath} alt="" />
                <EatingPreference dish={dish} />
              </ImagePreferenceStyled>
              <TranslatedTitleStyled>
                {dish.translatedDishTitle}
              </TranslatedTitleStyled>
              <Intolerances dish={dish}></Intolerances>
            </DishStyled>
          </Link>
        ))}
      </DishListStyled>
    </>
  )
}

const DishListHeadlineStyled = styled.h2`
  font-size: 26px;
  font-weight: bold;
  padding: 12px;
  margin-bottom: 0;
`
const DishListStyled = styled.section``

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
