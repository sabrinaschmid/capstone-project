import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import styled from 'styled-components/macro'
import EatingPreference from './EatingPreference'

function useDishes() {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('dishes')
      .onSnapshot(snapshot => {
        const newDish = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))

        setDishes(newDish)
      })
  }, [])

  return dishes
}

export default function Dish() {
  const dishes = useDishes()
  return (
    <DishListStyled>
      {dishes.map(dish => (
        <DishStyled key={dish.id}>
          <OriginalTitleStyled>{dish.originalDishTitle}</OriginalTitleStyled>
          <ImageTagStyled>
            <ImageStyled
              src="https://source.unsplash.com/random/400x225"
              alt=""
            />
            <EatingPreference dish={dish} />
          </ImageTagStyled>
          <TranslatedTitleStyled>
            {dish.translatedDishTitle}
          </TranslatedTitleStyled>
          <IntolerancesStyled>
            <IntoleranceStyled> {dish.lactose}</IntoleranceStyled>
            <IntoleranceStyled> {dish.fructose}</IntoleranceStyled>
            <IntoleranceStyled> {dish.histamine}</IntoleranceStyled>
          </IntolerancesStyled>
        </DishStyled>
      ))}
    </DishListStyled>
  )
}

const DishListStyled = styled.section``

const DishStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 8px;
  padding: 12px;
  border: #ffdf9f 1px solid;
  border-radius: 4px;
  background: #ffffff;
`
const OriginalTitleStyled = styled.h3`
  display: flex;
  font-size: 24px;
  color: #164c1a;
`

const ImageTagStyled = styled.div`
  display: flex;
  position: relative;
`
const ImageStyled = styled.img`
  width: 100%;
  background: white;
  border-radius: 4px;
`
const TagStyled = styled.span`
  padding: 6px 12px;
  margin: 6px 12px;
  border: #ff7e43 2px solid;
  background: #ff7e43;
  color: #ffffff;
  border-radius: 4px;
  position: absolute;
  right: -4px;
  top: 2px;
`
const TranslatedTitleStyled = styled.h4`
  display: flex;
  font-size: 18px;
  font-style: italic;
`
const IntolerancesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const IntoleranceStyled = styled.span`
  display: flex;
  padding: 8px 14px;
  margin: 0 6px 6px 0;
  border: #164c1a 2px solid;
  background: #164c1a;
  color: #e9eaeb;
  border-radius: 6px;
`
