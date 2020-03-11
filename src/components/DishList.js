import React from 'react'
import Dish from '../components/Dish'
import styled from 'styled-components/macro'
import DishDetail from '../components/DishDetail'
import { Link } from 'react-router-dom'

export default function DishList({ dishesState }) {
  return (
    <>
      <DishListHeadlineStyled>
        Alle italienischen Gerichte
      </DishListHeadlineStyled>
      <DishListStyled>
        {dishesState.map(dish => (
          <Link to={`/dish/${dish.id}`} children={<DishDetail />}>
            <Dish
              dishesState={dishesState}
              dish={dish}
              key={dish.id}
              {...dish}
            />
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
