import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import firebase from '../firebase'
import applecircle from '../icons/applecircle.svg'
import milkcircle from '../icons/milkcircle.svg'
import winecircle from '../icons/winecircle.svg'
import PageLayout from '../pages/PageLayout'
import EatingPreference from './EatingPreference'

export default function DishDetail({ match }) {
  DishDetail.propTypes = {
    singleDish: PropTypes.object,
    originalDishTitle: PropTypes.string,
    translatedDishTitle: PropTypes.string,
    ingredients: PropTypes.array,
  }
  const [dishId, setDishId] = useState('')
  const [singleDish, setSingleDish] = useState({})
  const [toggleIngredients, setToggleIngredients] = useState(false)

  useEffect(() => {
    setDishId(match.params.dishId)

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
  }, [])

  function renderAllIngredients() {
    const ingredients = singleDish?.ingredients
    if (ingredients) {
      return ingredients.map((singleIngredient, index) => {
        return <li key={index}>{singleIngredient}</li>
      })
    }
  }

  function renderLactoseIngredients() {
    const lactoseIngs = singleDish?.ingredientsWithLactose
    if (lactoseIngs) {
      return lactoseIngs.map((singleIngredient, index) => {
        return <li key={index}>{singleIngredient}</li>
      })
    }
  }

  function renderFructoseIngredients() {
    const fructoseIngs = singleDish?.ingredientsWithFructose
    if (fructoseIngs) {
      return fructoseIngs.map((singleIngredient, index) => {
        return <li key={index}>{singleIngredient}</li>
      })
    }
  }

  function renderHistamineIngredients() {
    const histamineIngs = singleDish?.ingredientsWithHistamine
    if (histamineIngs) {
      return histamineIngs.map((singleIngredient, index) => {
        return <li key={index}>{singleIngredient}</li>
      })
    }
  }

  function handleClick(event) {
    return event.stopPropagation(), setToggleIngredients(!toggleIngredients)
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

        <IntoleranceBoxStyled onClick={handleClick}>
          <IntoleranceInfoStyled>
            <IntoleranceIconStyled src={milkcircle} alt="" />
            <IntoleranceTextStyled>
              <IntoleranceNameStyled>LAKTOSE</IntoleranceNameStyled>
              <IntoleranceStyled>
                {singleDish.lactose ? (
                  <IntolerantStyled>
                    Dieses Gericht enthält typischerweise Laktose.
                  </IntolerantStyled>
                ) : (
                  <NotIntolerantStyled>
                    Dieses Gericht enthält typischerweise keine Laktose.
                  </NotIntolerantStyled>
                )}
              </IntoleranceStyled>
            </IntoleranceTextStyled>
          </IntoleranceInfoStyled>
          <CriticalIngredientsLink>
            {singleDish.lactose ? 'Kritische Zutaten' : ''}
          </CriticalIngredientsLink>
          {toggleIngredients && (
            <CriticalIngredients>
              {renderLactoseIngredients()}
            </CriticalIngredients>
          )}
        </IntoleranceBoxStyled>

        <IntoleranceBoxStyled onClick={handleClick}>
          <IntoleranceInfoStyled>
            <IntoleranceIconStyled src={applecircle} alt="" />
            <IntoleranceTextStyled>
              <IntoleranceNameStyled>FRUKTOSE</IntoleranceNameStyled>
              <IntoleranceStyled>
                {singleDish.fructose == 'viel enthalten' ? (
                  <IntolerantStyled>
                    Dieses Gericht enthält typischerweise Fruktose.
                  </IntolerantStyled>
                ) : (
                  <NotIntolerantStyled>
                    Dieses Gericht enthält typischerweise kaum Fruktose.
                  </NotIntolerantStyled>
                )}
              </IntoleranceStyled>
            </IntoleranceTextStyled>
          </IntoleranceInfoStyled>
          <CriticalIngredientsLink>
            {singleDish.fructose == 'viel enthalten'
              ? 'Kritische Zutaten einblenden'
              : ''}
          </CriticalIngredientsLink>
          {toggleIngredients && (
            <CriticalIngredients>
              {renderFructoseIngredients()}
            </CriticalIngredients>
          )}
        </IntoleranceBoxStyled>

        <IntoleranceBoxStyled onClick={handleClick}>
          <IntoleranceInfoStyled>
            <IntoleranceIconStyled src={winecircle} alt="" />
            <IntoleranceTextStyled>
              <IntoleranceNameStyled>HISTAMIN</IntoleranceNameStyled>
              <IntoleranceStyled>
                {singleDish.histamine ? (
                  <IntolerantStyled>
                    Dieses Gericht enthält typischerweise Histamin.
                  </IntolerantStyled>
                ) : (
                  <NotIntolerantStyled>
                    Dieses Gericht enthält typischerweise kein Histamin.
                  </NotIntolerantStyled>
                )}
              </IntoleranceStyled>
            </IntoleranceTextStyled>
          </IntoleranceInfoStyled>
          <CriticalIngredientsLink>
            {singleDish.histamine ? 'Kritische Zutaten' : ''}
          </CriticalIngredientsLink>
          {toggleIngredients && (
            <CriticalIngredients>
              {renderHistamineIngredients()}
            </CriticalIngredients>
          )}
        </IntoleranceBoxStyled>

        <IngredientsHeadlineStyled>Alle Zutaten</IngredientsHeadlineStyled>
        <IngredientsStyled>{renderAllIngredients()} </IngredientsStyled>
      </DetailPageStyled>
    </PageLayout>
  )
}

const IntoleranceBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0 20px;
  padding: 18px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 1px 2px #ffa743;
`
const IntoleranceInfoStyled = styled.div`
  display: flex;
`
const IntoleranceIconStyled = styled.img`
  height: 70px;
  padding-right: 24px;
`
const IntoleranceTextStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const IntoleranceNameStyled = styled.h3`
  display: flex;
  font-size: 18px;
  margin-top: 0;
`
const IntoleranceStyled = styled.div``

const IntolerantStyled = styled.p`
  color: #ffa743;
  font-size: 18px;
  margin-top: 0;
`

const NotIntolerantStyled = styled.p`
  color: #164c1a;
  font-size: 18px;
`
const CriticalIngredientsLink = styled.p`
  position: relative;
  display: inline-block;
  align-self: flex-end;
  justify-self: flex-end;
  text-decoration: underline;
`

const CriticalIngredients = styled.ul`
  padding-left: 24px;
  line-height: 1.8em;
`

const DetailPageStyled = styled.section`
  margin: 20px 8px;
  padding: 4px;
`
const DetailTranslatedTitleStyled = styled.h2`
  font-size: 22px;
  font-style: italic;
  margin-top: 2px;
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
const IntoleranceHeadlineStyled = styled.h3`
  font-size: 20px;
  margin: 24px 0 18px;
`
const IngredientsHeadlineStyled = styled.h3`
  font-size: 20px;
  margin: 24px 0 0;
`
const IngredientsStyled = styled.ul`
  padding-left: 24px;
  line-height: 1.8em;
`
