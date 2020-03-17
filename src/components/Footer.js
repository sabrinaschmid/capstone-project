import React from 'react'
import styled from 'styled-components/macro'

export default function Footer() {
  return (
    <FooterStyled>
      &copy; 2020 – Alle Inhalte sind urheberrechtlich geschützt. Diese Webseite
      nutzt Icons von thenounproject.com unter der Creative Commons Lizenz sowie
      Bildmaterial von unsplash.com sowie pexels.com. Alle Rechte,
      einschließlich der Vervielfältigung, Veröffentlichung, Bearbeitung und
      Übersetzung bleiben vorbehalten, Sabrina Schmid
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 12px 10px;
  background: #bbc0b6;
  color: #404040;
  font-size: 12px;
`
