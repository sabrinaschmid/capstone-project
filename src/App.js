import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import DishDetail from './components/DishDetail'
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      {/* <AppGrid> */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/dish">
          <DishDetail />
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
