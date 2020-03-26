import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Grid from '../common/Grid'
import ScrollToTop from '../components/ScrollToTop'
import SearchForm from '../components/SearchForm/SearchForm'
import SearchResults from '../components/SearchResults/SearchResults'
import useQuery from '../hooks/useQuery'

SearchPage.propTypes = {
  dishes: PropTypes.array.isRequired,
}

export default function SearchPage({ dishes }) {
  useEffect(() => {
    const url = window.location.href
    if (url.includes('=')) {
      const index = url.indexOf('=')
      const searchQuery = url.slice(index + 1)
      setSearchDish(searchQuery)
    }
  }, [])

  useQuery()
  const [searchDish, setSearchDish] = useState('')
  const [inputFocus, setInputFocus] = useState(false)
  const history = useHistory()
  const dishListRef = useRef()

  return (
    <Grid title="TastyTravel">
      <SearchForm
        handleDefault={handleDefault}
        handleInput={handleInput}
        searchDish={searchDish}
        setInputFocus={setInputFocus}
        handleReset={handleReset}
      />
      <div ref={dishListRef}></div>
      <SearchResults dishes={dishes} searchDish={searchDish} />
      <ScrollToTop inputFocus={inputFocus} />
    </Grid>
  )

  function handleDefault(event) {
    return (
      event.preventDefault() ||
      window.scrollTo({
        top: dishListRef.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      }) ||
      event.target.searchdish.blur()
    )
  }

  function handleInput(event) {
    history.push('/?search=' + event.target.value)
    return setSearchDish(event.target.value)
  }

  function handleReset() {
    history.push('/')
    return setSearchDish('')
  }
}
