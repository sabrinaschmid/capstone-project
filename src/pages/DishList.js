import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Dish from '../components/Dish'
import DishDetail from '../components/DishDetail'

export default function DishList({ dishesState }) {
  DishList.propTypes = {
    dishesState: PropTypes.array,
  }
  return (
    <>
      <DishListHeadlineStyled>
        Alle italienischen Gerichte
      </DishListHeadlineStyled>
      <DishListStyled>
        {dishesState.map(dish => (
          <Link to={`/dish/${dish.id}`} children={<DishDetail />} key={dish.id}>
            <Dish dish={dish} key={dish.id} {...dish} />
          </Link>
        ))}
      </DishListStyled>
    </>
  )
}

const DishListHeadlineStyled = styled.h2`
  font-size: 26px;
  font-weight: bold;
  padding: 12px 10px 0;
  margin-bottom: 0;
`
const DishListStyled = styled.section``
