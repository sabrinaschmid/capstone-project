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
              src="https://source.unsplash.com/random/100x75"
              alt=""
            />
            {/* <span> {dish.vegan}</span>
              <span> {dish.vegetarian}</span> */}
            {/* </ImageStyled> */}
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
  /* display: grid;
  flex-direction: column;
  justify-content: 
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002; */
  display: grid;
  grid-template-columns: 110px auto;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  margin: 10px 20px 0;
`
const ImageStyled = styled.img`
  /* display: flex;
  cursor: default;
  position: relative;
  background: white;
  padding: 10px; */
  grid-area: 1 / 1 / 3 / 2;
`
const OriginalTitleStyled = styled.h3`
  /* display: flex;
  flex-direction: column;
  padding: 10px; */
  grid-area: 1 / 2 / 2 / 3;
  display: grid;
  align-content: flex-end;
`
const TranslatedTitleStyled = styled.h4`
  /* display: flex;
  flex-direction: column;
  padding: 10px; */
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  align-content: flex-end;
`

const IntolerancesStyled = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  display: flex;
  flex-wrap: wrap;
`
const IntoleranceStyled = styled.span`
  display: flex;
  padding: 10px 14px;
  margin: 6px 12px;
  border: #3a4566 2px solid;
  background: #3a4566;
  color: aliceblue;
  border-radius: 4px;
`
// border: var(--additional-color) 2px solid;
// background: var(--additional-color);
// color: white;
// border-radius: 4px;
// padding: 8px 12px;
// margin: 6px 12px 6px 0;
