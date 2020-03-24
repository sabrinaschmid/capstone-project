import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import DishList from '../components/DishList/DishList'
import Search from '../components/Search/Search'
import AppGrid from './AppGrid'

HomePage.propTypes = {
  dishes: PropTypes.array,
}

export default function HomePage({ dishes }) {
  useEffect(() => {
    const url = window.location.href
    if (url.includes('=')) {
      const index = url.indexOf('=')
      const searchQuery = url.slice(index + 1)
      setSearchDish(searchQuery)
    }
  }, [])

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  useQuery()
  const history = useHistory()
  const [searchDish, setSearchDish] = useState('')
  const dishListRef = useRef()

  return (
    <AppGrid title="TastyTravel">
      <Search
        handleInput={handleInput}
        handleDefault={handleDefault}
        handleReset={handleReset}
        searchDish={searchDish}
      />
      <div ref={dishListRef}></div>
      <DishList dishes={dishes} searchDish={searchDish} />
    </AppGrid>
  )

  function handleInput(event) {
    history.push('/?search=' + event.target.value)
    return setSearchDish(event.target.value)
  }

  function handleDefault(event) {
    return (
      event.preventDefault() ||
      event.target.blur() ||
      window.scrollTo({
        top: dishListRef.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      })
    )
  }

  function handleReset() {
    history.push('/')
    return setSearchDish('')
  }
}
