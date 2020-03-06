import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import styled from 'styled-components/macro'
import EatingPreference from './EatingPreference'
import Intolerances from './Intolerances'
import { Link } from 'react-router-dom'

// function useDishes() {
//   const [dishes, setDishes] = useState([])

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection('dishes')
//       .onSnapshot(snapshot => {
//         const newDish = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }))

//         setDishes(newDish)
//       })
//   }, [])

//   return dishes
// }

export default function Dish({ dishesState }) {
  // const dishes = useDishes()
  return (
    <DishListStyled>
      {dishesState.map(dish => (
        <Link to={`/dish/${dish.id}`}>
          <DishStyled key={dish.id}>
            <OriginalTitleStyled>{dish.originalDishTitle}</OriginalTitleStyled>
            <ImagePreferenceStyled>
              <ImageStyled
                src="https://source.unsplash.com/random/400x225"
                alt=""
              />
              <EatingPreference dish={dish} />
            </ImagePreferenceStyled>
            <TranslatedTitleStyled>
              {dish.translatedDishTitle}
            </TranslatedTitleStyled>
            <Intolerances dish={dish} />
          </DishStyled>
        </Link>
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

const ImagePreferenceStyled = styled.div`
  display: flex;
  position: relative;
`
const ImageStyled = styled.img`
  width: 100%;
  background: white;
  border-radius: 4px;
`
const TranslatedTitleStyled = styled.h4`
  display: flex;
  font-size: 18px;
  font-style: italic;
`
