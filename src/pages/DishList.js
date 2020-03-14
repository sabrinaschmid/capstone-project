import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Dish from '../components/Dish'
import DishDetail from '../components/DishDetail'

DishList.propTypes = {
  dishes: PropTypes.array,
  searchDish: PropTypes.string,
}

export default function DishList({ dishes, searchDish }) {
  let filteredDishes = dishes.filter(dish => {
    return dish.originalDishTitle
      .toLowerCase()
      .includes(searchDish.toLowerCase())
  })

  return (
    <>
      <DishListHeadlineStyled id="headline">
        {searchDish ? 'Dein Suchergebnis' : 'Alle italienischen Gerichte'}
      </DishListHeadlineStyled>
      <SearchResultStyled>
        {filteredDishes.length > 0 ? (
          <DishListStyled>
            {filteredDishes.map(dish => (
              <Link
                to={`/dish/${dish.id}`}
                children={<DishDetail />}
                key={dish.id}
              >
                <Dish dish={dish} key={dish.id} {...dish} />
              </Link>
            ))}
          </DishListStyled>
        ) : (
          <NoResultsStyled>
            Es gibt leider kein Suchergebnis für <em>"{searchDish}"</em>.
          </NoResultsStyled>
        )}
      </SearchResultStyled>
    </>
  )
}

const DishListHeadlineStyled = styled.h2`
  font-size: 22px;
  padding: 8px 10px 0;
  margin-bottom: 0;
`
const SearchResultStyled = styled.div``

const NoResultsStyled = styled.h3`
  font-size: 20px;
  padding: 8px 10px 0;
  margin-bottom: 0;
`

const DishListStyled = styled.section``
