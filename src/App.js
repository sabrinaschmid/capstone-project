import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import styled from 'styled-components/macro'
import DishDetail from './components/DishDetail'
import HomePage from './components/HomePage'
import firebase from 'firebase'

function useDishes() {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('dishes')
      .onSnapshot(snapshot => {
        const newDish = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))

        setDishes(newDish)
      })
  }, [])

  return dishes
}

function App() {
  const dishes = useDishes()

  return (
    <Router>
      {/* <AppGrid> */}
      <Switch>
        <Route exact path="/">
          <HomePage dishesState={dishes} />
        </Route>
        <Route path="/dish/:id">
          <DishDetail dishesState={dishes} />
        </Route>
      </Switch>
      {/* </AppGrid> */}
    </Router>
  )
}

// const AppGrid = styled.div`
//   display: grid;
//   grid-template-rows: auto 48px;
//   position: fixed;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   height: 100%;
// `

export default App
