import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import greenapple from '../../icons/greenapple.svg'
import greenmilk from '../../icons/greenmilk.svg'
import greenwine from '../../icons/greenwine.svg'
import orangeapple from '../../icons/orangeapple.svg'
import orangemilk from '../../icons/orangemilk.svg'
import orangewine from '../../icons/orangewine.svg'

IntolerancesIngredients.propTypes = {
  singleDish: PropTypes.object,
  lactose: PropTypes.bool,
  fructose: PropTypes.string,
  histamine: PropTypes.bool,
}
export default function IntolerancesIngredients({ singleDish }) {
  const { lactose, fructose, histamine } = singleDish
  const [toggleLactose, setToggleLactose] = useState(false)
  const [toggleFructose, setToggleFructose] = useState(false)
  const [toggleHistamine, setToggleHistamine] = useState(false)

  function handleLactoseClick(event) {
    return event.stopPropagation() || setToggleLactose(!toggleLactose)
  }

  function handleFructoseClick(event) {
    return event.stopPropagation() || setToggleFructose(!toggleFructose)
  }

  function handleHistamineClick(event) {
    return event.stopPropagation() || setToggleHistamine(!toggleHistamine)
  }

  function renderLactoseIngredients() {
    const lactoseIngredients = singleDish?.ingredientsWithLactose
    if (lactoseIngredients) {
      return lactoseIngredients.map((singleIngredient, index) => {
        return <li key={index}>{singleIngredient}</li>
      })
    }
  }

  function renderFructoseIngredients() {
    const fructoseIngredients = singleDish?.ingredientsWithFructose
    if (fructoseIngredients) {
      return fructoseIngredients.map((singleIngredient, index) => {
        return <li key={index}>{singleIngredient}</li>
      })
    }
  }

  function renderHistamineIngredients() {
    const histamineIngredients = singleDish?.ingredientsWithHistamine
    if (histamineIngredients) {
      return histamineIngredients.map((singleIngredient, index) => {
        return <li key={index}>{singleIngredient}</li>
      })
    }
  }

  return (
    <>
      <TestifHasCriticalIngredients>
        {lactose ? (
          <IntoleranceBoxStyled onClick={handleLactoseClick}>
            <IntoleranceInfoStyled>
              {lactose ? (
                <IconStyled src={orangemilk} alt="" />
              ) : (
                <IconStyled src={greenmilk} alt="" />
              )}
              <IntoleranceTextStyled>
                <IntoleranceNameStyled>LAKTOSE</IntoleranceNameStyled>
                <IntoleranceStyled>
                  {lactose ? (
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
              {lactose ? 'Ungeeignete Zutaten' : ''}
            </CriticalIngredientsLink>
            {toggleLactose && (
              <CriticalIngredients>
                {renderLactoseIngredients()}
              </CriticalIngredients>
            )}
          </IntoleranceBoxStyled>
        ) : (
          <IntoleranceBoxNonClickableStyled>
            <IntoleranceInfoStyled>
              {lactose ? (
                <IconStyled src={orangemilk} alt="" />
              ) : (
                <IconStyled src={greenmilk} alt="" />
              )}
              <IntoleranceTextStyled>
                <IntoleranceNameStyled>LAKTOSE</IntoleranceNameStyled>
                <IntoleranceStyled>
                  {lactose ? (
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
              {lactose ? 'Ungeeignete Zutaten' : ''}
            </CriticalIngredientsLink>
            {toggleLactose && (
              <CriticalIngredients>
                {renderLactoseIngredients()}
              </CriticalIngredients>
            )}
          </IntoleranceBoxNonClickableStyled>
        )}
      </TestifHasCriticalIngredients>

      {/* <IntoleranceBoxStyled onClick={handleFructoseClick}>
        <IntoleranceInfoStyled>
          {fructose === 'viel enthalten' ? (
            <IconStyled src={orangeapple} alt="" />
          ) : (
            <IconStyled src={greenapple} alt="" />
          )}
          <IntoleranceTextStyled>
            <IntoleranceNameStyled>FRUKTOSE</IntoleranceNameStyled>
            <IntoleranceStyled>
              {fructose === 'viel enthalten' ? (
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
          {fructose === 'viel enthalten' ? 'Ungeeignete Zutaten' : ''}
        </CriticalIngredientsLink>
        {toggleFructose && (
          <CriticalIngredients>
            {renderFructoseIngredients()}
          </CriticalIngredients>
        )}
      </IntoleranceBoxStyled>

      <IntoleranceBoxStyled onClick={handleHistamineClick}>
        <IntoleranceInfoStyled>
          {histamine ? (
            <IconStyled src={orangewine} alt="" />
          ) : (
            <IconStyled src={greenwine} alt="" />
          )}
          <IntoleranceTextStyled>
            <IntoleranceNameStyled>HISTAMIN</IntoleranceNameStyled>
            <IntoleranceStyled>
              {histamine ? (
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
          {histamine ? 'Ungeeignete Zutaten' : ''}
        </CriticalIngredientsLink>
        {toggleHistamine && (
          <CriticalIngredients>
            {renderHistamineIngredients()}
          </CriticalIngredients>
        )}
      </IntoleranceBoxStyled> */}
    </>
  )
}

const TestifHasCriticalIngredients = styled.div``

const IntoleranceBoxStyled = styled.section`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 8px 0 20px;
  padding: 18px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 3px #bbc0b6;
`
const IntoleranceBoxNonClickableStyled = styled.div`
  cursor: default;
  display: flex;
  flex-direction: column;
  margin: 8px 0 20px;
  padding: 18px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 3px #bbc0b6;
`

const IntoleranceInfoStyled = styled.div`
  display: flex;
`
const IconStyled = styled.img`
  height: 70px;
  padding-right: 24px;
`
const IntoleranceTextStyled = styled.div`
  display: flex;
  flex-direction: column;
`
const IntoleranceNameStyled = styled.h3`
  display: flex;
  margin-top: 0;
  font-size: 18px;
`
const IntoleranceStyled = styled.div``

const IntolerantStyled = styled.p`
  margin-top: 0;
  color: #ffa743;
  font-size: 18px;
`
const NotIntolerantStyled = styled.p`
  color: #164c1a;
  font-size: 18px;
`
const CriticalIngredientsLink = styled.p`
  display: inline-block;
  position: relative;
  text-decoration: underline;
`
const CriticalIngredients = styled.ul`
  margin-top: 0;
  padding-left: 18px;
  line-height: 1.8em;
`
