import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import DishList from '../components/DishList/DishList'
import Search from '../components/Search/Search'
import AppGrid from './AppGrid'
// import useQuery from './hooks/useQuery'

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
  const query = useQuery()
  const history = useHistory()
  const [searchDish, setSearchDish] = useState('')

  return (
    <AppGrid title="TastyTravel">
      <Search
        handleInput={handleInput}
        handleReset={handleReset}
        searchDish={searchDish}
      />
      <DishList dishes={dishes} searchDish={searchDish} />
    </AppGrid>
  )

  function handleInput(event) {
    console.log(query.get('search'))
    history.push('/?search=' + event.target.value)
    return setSearchDish(event.target.value)
  }

  function handleReset() {
    return setSearchDish('') || history.push('/')
  }
}
