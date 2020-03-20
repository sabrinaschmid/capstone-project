import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import DishList from '../components/DishList/DishList'
import Search from '../components/Search/Search'
import AppGrid from './AppGrid'
// import useQuery from './hooks/useQuery'

HomePage.propTypes = {
  dishes: PropTypes.array,
}

export default function HomePage({ dishes }) {
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
    return setSearchDish
  }
}
