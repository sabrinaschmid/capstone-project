import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SearchResults from '../components/SearchResults/SearchResults'
import SearchForm from '../components/SearchForm/SearchForm'
import Grid from './Grid'
import useQuery from '../components/hooks/useQuery'
import ScrollToTop from '../components/ScrollToTop'

SearchPage.propTypes = {
  dishes: PropTypes.array,
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
  const history = useHistory()
  const [searchDish, setSearchDish] = useState('')
  const dishListRef = useRef()
  const [inputFocus, setInputFocus] = useState(false)

  return (
    <Grid title="TastyTravel">
      <SearchForm
        handleInput={handleInput}
        handleDefault={handleDefault}
        handleReset={handleReset}
        setInputFocus={setInputFocus}
        searchDish={searchDish}
      />
      <div ref={dishListRef}></div>
      <SearchResults dishes={dishes} searchDish={searchDish} />
      <ScrollToTop inputFocus={inputFocus} />
    </Grid>
  )

  function handleInput(event) {
    history.push('/?search=' + event.target.value)
    return setSearchDish(event.target.value)
  }

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

  function handleReset() {
    history.push('/')
    return setSearchDish('')
  }
}
