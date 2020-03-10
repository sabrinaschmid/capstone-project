import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import PageLayout from './PageLayout'
import EatingPreference from './EatingPreference'
import Intolerances from './Intolerances'
import firebase from 'firebase'

const DishDetail = ({ match }) => {
  // var pathReference = storage.ref('images/melanzane_antipasti_2.jpg')
  // var gsReference = storage.refFromURL(
  //   'gs://bucket/images/melanzane_antipasti_2.jpg'
  // )

  // pathReference
  //   .child('images/melanzane_antipasti_2.jpg')
  //   .getDownloadURL()
  //   .then(function(url) {
  //     // `url` is the download URL for 'images/stars.jpg'

  //     // This can be downloaded directly:
  //     var xhr = new XMLHttpRequest()
  //     xhr.responseType = 'blob'
  //     xhr.onload = function(event) {
  //       var blob = xhr.response
  //     }
  //     xhr.open('GET', url)
  //     xhr.send()

  //     // Or inserted into an <img> element:
  //     var img = document.getElementById('melanzane')
  //     img.src = url
  //   })
  //   .catch(function(error) {
  //     // Handle any errors
  //   })

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
        var storage = firebase.storage()
        var storageRef = storage.ref()
        var data = doc.data()

        storageRef
          .child('images/melanzane_antipasti_2.jpg')
          .getDownloadURL()
          .then(url => {
            data.imagePath = url
            setSingleDish(data)
          })
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
          <ImageStyled src={singleDish.imagePath} alt="" />
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
