import firebase from 'firebase'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'

export default function App() {
  const dishes = useDishes()

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage dishes={dishes} />
        </Route>
        <Route path="/dish/:dishId" component={DetailPage}></Route>
      </Switch>
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
