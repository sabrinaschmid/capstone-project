import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import EatingPreference from '../components/EatingPreference'
import FructoseIngredients from '../components/FructoseIngredients/FructoseIngredients'
import HistamineIngredients from '../components/HistamineIngredients/HistamineIngredients'
import LactoseIngredients from '../components/LactoseIngredients/LactoseIngredients'
import firebase from '../firebase'
import AppGrid from './AppGrid'

export default function DishDetail({ match }) {
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
    <AppGrid title={originalDishTitle}>
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
    </AppGrid>
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
  margin: 20px 8px 0;
  padding: 4px;
`
const TranslatedTitleStyled = styled.h2`
  margin-top: 2px;
`
const ImageWithPreferenceStyled = styled.div`
  display: flex;
  position: relative;
`
const ImageStyled = styled.img`
  width: 100%;
  background: var(--white);
  border-radius: 10px;
`
const HeadlineStyled = styled.h3`
  margin: 24px 0 18px;
  font-size: 20px;
`
const AllIngredientsStyled = styled.ul`
  padding-left: 36px;
  line-height: 1.8em;
`
