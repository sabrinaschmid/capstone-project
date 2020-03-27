import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Grid from '../common/Grid'
import FructoseIngredients from '../components/FructoseIngredients/FructoseIngredients'
import HistamineIngredients from '../components/HistamineIngredients/HistamineIngredients'
import ImageWithDiet from '../components/ImageWithDiet'
import LactoseIngredients from '../components/LactoseIngredients/LactoseIngredients'
import firebase from '../firebase'

export default function DetailPage({ match }) {
  const [singleDish, setSingleDish] = useState({})
  const { originalDishTitle, translatedDishTitle, imagePath } = singleDish

  useEffect(() => {
    firebase
      .firestore()
      .collection('dishes')
      .doc(`${match.params.dishId}`)
      .get()
      .then(doc => {
        const storage = firebase.storage()
        const storageRef = storage.ref()
        const data = doc.data()
        storageRef
          .child(data.imageString)
          .getDownloadURL()
          .then(url => {
            data.imagePath = url
            setSingleDish(data)
          })
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      })
  }, [match.params.dishId])

  return (
    <Grid title={originalDishTitle}>
      <DetailPageStyled>
        <TranslatedTitleStyled>{translatedDishTitle}</TranslatedTitleStyled>
        <ImageWithDiet singleDish={singleDish} imagePath={imagePath} />
        <HeadlineStyled>Intoleranzen</HeadlineStyled>
        <LactoseIngredients singleDish={singleDish} />
        <FructoseIngredients singleDish={singleDish} />
        <HistamineIngredients singleDish={singleDish} />
        <HeadlineStyled>Alle Zutaten</HeadlineStyled>
        <AllIngredientsStyled>{renderAllIngredients()} </AllIngredientsStyled>
      </DetailPageStyled>
    </Grid>
  )

  function renderAllIngredients() {
    const ingredients = singleDish?.ingredients
    if (ingredients) {
      return ingredients.map((singleIngredient, index) => {
        return <li key={index}>{singleIngredient}</li>
      })
    }
  }
}

const DetailPageStyled = styled.section`
  margin-bottom: 24px;
`
const TranslatedTitleStyled = styled.h2``
const HeadlineStyled = styled.h3`
  margin-top: 18px;
`
const AllIngredientsStyled = styled.ul`
  padding-left: 28px;
  line-height: 1.8em;
`
