import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import EatingPreference from '../components/EatingPreference'
import FructoseIngredients from '../components/FructoseIngredients/FructoseIngredients'
import HistamineIngredients from '../components/HistamineIngredients/HistamineIngredients'
import LactoseIngredients from '../components/LactoseIngredients/LactoseIngredients'
import firebase from '../firebase'
import Grid from '../common/Grid'

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
        <ImageWithPreferenceStyled>
          <ImageStyled src={imagePath} alt="" />
          <EatingPreference dish={singleDish} />
        </ImageWithPreferenceStyled>
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
const ImageWithPreferenceStyled = styled.div`
  display: flex;
  position: relative;
`
const ImageStyled = styled.img`
  width: 100%;
  margin-top: 8px;
  background: var(--white);
  border-radius: 10px;
`
const HeadlineStyled = styled.h3`
  margin-top: 18px;
`
const AllIngredientsStyled = styled.ul`
  padding-left: 28px;
  line-height: 1.8em;
`
