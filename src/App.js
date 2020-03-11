import firebase from 'firebase'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DishDetail from './components/DishDetail'
import HomePage from './components/HomePage'

export default function App() {
  const dishes = useDishes()

  return (
    <Router>
      {/* <AppGrid> */}
      <Switch>
        <Route exact path="/">
          <HomePage dishesState={dishes} />
        </Route>
        <Route path="/dish/:dishId" component={DishDetail}></Route>
      </Switch>
      {/* </AppGrid> */}
    </Router>
  )
}

function useDishes() {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('dishes')
      .onSnapshot(snapshot => {
        const storage = firebase.storage()
        const storageRef = storage.ref()
        const promises = snapshot.docs.map(doc =>
          storageRef.child(doc.data().imageString).getDownloadURL()
        )
        Promise.all(promises).then(downloadURLs => {
          const newDish = snapshot.docs.map((doc, index) => ({
            id: doc.id,
            ...doc.data(),
            imagePath: downloadURLs[index],
          }))
          setDishes(newDish)
        })
      })
  }, [])

  return dishes
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
