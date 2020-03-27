import React from 'react'
import styled from 'styled-components/macro'

export default function Footer() {
  return (
    <FooterStyled>
      &copy; 2020 – Alle Inhalte sind urheberrechtlich geschützt. Alle Rechte,
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
  background: var(--light-green);
  color: var(--dark-grey);
  font-size: 12px;
  z-index: 0;
`
