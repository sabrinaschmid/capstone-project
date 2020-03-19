import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import DishDetail from '../../pages/DishDetail'
import Dish from '../Dish/Dish'

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
    <DishListStyled>
      <HeadlineStyled id="headline">
        {searchDish ? 'Dein Suchergebnis' : 'Alle italienischen Gerichte'}
      </HeadlineStyled>
      <SearchResultStyled>
        {filteredDishes.length > 0 ? (
          <FilteredListStyled>
            {filteredDishes.map(dish => (
              <Link
                to={`/dish/${dish.id}`}
                children={<DishDetail />}
                key={dish.id}
                onClick={onClick}
              >
                <Dish dish={dish} key={dish.id} {...dish} />
              </Link>
            ))}
          </FilteredListStyled>
        ) : (
          <NoResultsStyled>
            Es gibt leider kein Suchergebnis für <em>"{searchDish}"</em>.
          </NoResultsStyled>
        )}
      </SearchResultStyled>
    </DishListStyled>
  )

  function onClick() {
    return window.scrollTo(0, 0)
  }
}

const DishListStyled = styled.section``

const HeadlineStyled = styled.h2`
  margin-bottom: 0;
  padding: 8px 10px 0;
  font-size: 22px;
`
const SearchResultStyled = styled.div``

const FilteredListStyled = styled.div``

const NoResultsStyled = styled.h3`
  margin-top: 0;
  padding: 8px 10px 0;
  font-size: 20px;
`
