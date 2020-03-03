import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import styled from 'styled-components/macro'

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
      <RowStyled>
        {dishes.map(dish => (
          <DishStyled key={dish.id}>
            <ImageStyled
              src="https://source.unsplash.com/random/130x100"
              alt=""
            />
            <TagStyled>
              {dish.vegan ? 'vegan' : dish.vegetarian ? 'vegetarisch' : ''}
            </TagStyled>
            <OriginalTitleStyled> {dish.originalDishTitle}</OriginalTitleStyled>
            <TranslatedTitleStyled>
              {' '}
              {dish.translatedDishTitle}
            </TranslatedTitleStyled>
            <IntolerancesStyled>
              <IntoleranceStyled> {dish.lactose}</IntoleranceStyled>
              <IntoleranceStyled> {dish.fructose}</IntoleranceStyled>
              <IntoleranceStyled> {dish.histamine}</IntoleranceStyled>
            </IntolerancesStyled>
          </DishStyled>
        ))}
      </RowStyled>
    </DishListStyled>
  )
}

const DishListStyled = styled.section``

const RowStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const DishStyled = styled.div`
  display: grid;
  grid-template-columns: 130px auto;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #0002;
`
const ImageStyled = styled.img`
  /* display: flex;
  cursor: default;
  position: relative;
  background: white;
  padding: 10px; */
  grid-area: 1 / 1 / 4 / 2;
`

const TagStyled = styled.span`
  padding: 10px 14px;
  margin: 6px 12px;
  border: #ffa743 2px solid;
  background: #ffa743;
  color: #404040;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  grid-area: 1 / 2 / 2 / 3;
`

const OriginalTitleStyled = styled.h3`
  /* display: flex;
  flex-direction: column;
  padding: 10px; */
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  align-content: flex-start;
`
const TranslatedTitleStyled = styled.h4`
  /* display: flex;
  flex-direction: column;
  padding: 10px; */
  grid-area: 3 / 2 / 4 / 3;
  display: grid;
  font-style: italic;
`

const IntolerancesStyled = styled.div`
  grid-area: 4 / 1 / 5 / 3;
  display: flex;
  flex-wrap: wrap;
`
const IntoleranceStyled = styled.span`
  display: flex;
  padding: 10px 14px;
  margin: 6px 12px;
  border: #164c1a 2px solid;
  background: #164c1a;
  color: #e9eaeb;
  border-radius: 12px;
`
