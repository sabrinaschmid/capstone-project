import React, { useState, useEffect } from 'react'
import firebase from '../firebase'

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

const DishList = () => {
  const dishes = useDishes()

  return (
    <div>
      <ul>
        {dishes.map(dish => (
          <li key={dish.id}>
            <p> {dish.originalDishTitle}</p>
            <p> {dish.translatedDishTitle}</p>
            <p> {dish.country}</p>
            <span> {dish.lactose}</span>
            <span> {dish.fructose}</span>
            <span> {dish.histamine}</span>
            <span> {dish.vegan}</span>
            <span> {dish.vegetarian}</span>
            <div> {dish.ingredients}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DishList
