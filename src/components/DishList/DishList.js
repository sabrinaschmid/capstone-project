import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import DishDetail from '../../pages/DishDetail'
import Dish from '../Dish/Dish'

DishList.propTypes = {
  dishes: PropTypes.array,
  searchDish: PropTypes.string,
}

export default function DishList({ dishes, searchDish }) {
  const headlineRef = useRef()

  let filteredDishes = dishes.filter(dish => {
    return dish.originalDishTitle
      .toLowerCase()
      .includes(searchDish.toLowerCase())
  })

  return (
    <DishListStyled ref={headlineRef}>
      <HeadlineStyled>
        {searchDish ? 'Dein Suchergebnis' : 'Alle italienischen Gerichte'}
      </HeadlineStyled>
      {filteredDishes.length > 0 ? (
        <SearchResults>
          {filteredDishes.map(dish => (
            <Link
              to={`/dish/${dish.id}`}
              children={<DishDetail />}
              key={dish.id}
              onClick={linkToTop}
            >
              <Dish dish={dish} key={dish.id} {...dish} />
            </Link>
          ))}
        </SearchResults>
      ) : (
        <NoResultsStyled>
          Es gibt leider kein Suchergebnis für <em>"{searchDish}"</em>.
        </NoResultsStyled>
      )}
    </DishListStyled>
  )

  function linkToTop() {
    return window.scrollTo(0, 0)
  }
}

const DishListStyled = styled.section`
  margin-bottom: 24px;
`
const HeadlineStyled = styled.h2``
const SearchResults = styled.div``
const NoResultsStyled = styled.h4``
