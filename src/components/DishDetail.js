import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import PageLayout from './PageLayout'
import EatingPreference from './EatingPreference'
import Intolerances from './Intolerances'
import firebase from 'firebase'

const DishDetail = ({ match }) => {
  const [dishId, setDishId] = useState('')
  const [singleDish, setSingleDish] = useState({})

  useEffect(() => {
    setDishId(match.params.dishId)

    firebase
      .firestore()
      .collection('dishes')
      .doc(`${match.params.dishId}`)
      .get()
      .then(doc => {
        setSingleDish(doc.data())
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      })
  }, [])

  function renderIngredients() {
    const ings = singleDish?.ingredients
    if (ings) {
      return ings.map((singleIngredient, index) => {
        return <li key={index}>{singleIngredient}</li>
      })
    }
  }

  return (
    <PageLayout title={singleDish.originalDishTitle}>
      <DetailPageStyled>
        <DetailTranslatedTitleStyled>
          {singleDish.translatedDishTitle}
        </DetailTranslatedTitleStyled>
        <ImagePreferenceStyled>
          <ImageStyled
            src="https://source.unsplash.com/random/400x225"
            alt=""
          />
          <EatingPreference dish={singleDish} />
        </ImagePreferenceStyled>
        <IntoleranceHeadlineStyled>Intoleranzen</IntoleranceHeadlineStyled>
        <Intolerances dish={singleDish}></Intolerances>
        <IngredientsHeadlineStyled>Übliche Zutaten</IngredientsHeadlineStyled>
        <IngredientsStyled>{renderIngredients()} </IngredientsStyled>
      </DetailPageStyled>
    </PageLayout>
  )
}

const DetailPageStyled = styled.section`
  margin: 20px 8px;
  padding: 4px;
`
const DetailTranslatedTitleStyled = styled.h2`
  color: #164c1a;
  font-size: 24px;
  font-style: italic;
`
const IntoleranceHeadlineStyled = styled.h3`
  font-size: 20px;
  margin: 32px 0 12px;
`
const IngredientsHeadlineStyled = styled.h3`
  font-size: 20px;
  margin: 32px 0 12px;
`
const IngredientsStyled = styled.ul`
  padding-left: 24px;
`
const ImagePreferenceStyled = styled.div`
  display: flex;
  position: relative;
`
const ImageStyled = styled.img`
  width: 100%;
  background: white;
  border-radius: 10px;
`

export default DishDetail
