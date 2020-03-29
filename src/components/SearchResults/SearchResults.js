import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import DetailPage from '../../pages/DetailPage'
import ListEntry from '../ListEntry/ListEntry'

SearchResults.propTypes = {
  dishes: PropTypes.array.isRequired,
  searchDish: PropTypes.string.isRequired,
}

export default function SearchResults({ dishes, searchDish }) {
  const headlineRef = useRef()

  let filteredDishes = dishes.filter(dish => {
    return dish.originalDishTitle
      .toLowerCase()
      .includes(searchDish.toLowerCase())
  })

  return (
    <ListStyled>
      <HeadlineStyled ref={headlineRef}>
        {searchDish ? 'Dein Suchergebnis' : 'Alle italienischen Gerichte'}
      </HeadlineStyled>
      {filteredDishes.length > 0 ? (
        <ResultsStyled>
          {filteredDishes.map(dish => (
            <Link
              to={`/dish/${dish.id}`}
              children={<DetailPage />}
              key={dish.id}
              onClick={linkToTop}
            >
              <ListEntry dish={dish} key={dish.id} {...dish} />
            </Link>
          ))}
        </ResultsStyled>
      ) : (
        <NoResultsStyled>
          Es gibt leider kein Suchergebnis für <em>"{searchDish}"</em>.
        </NoResultsStyled>
      )}
    </ListStyled>
  )

  function linkToTop() {
    return window.scrollTo(0, 0)
  }
}

const ListStyled = styled.section`
  margin-bottom: 24px;
`
const HeadlineStyled = styled.h2``
const ResultsStyled = styled.div``
const NoResultsStyled = styled.h4``
