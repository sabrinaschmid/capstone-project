describe('No search result', () => {
  it('shows shows an information text when there are no search results', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[name="search-dish"]').type('xxxyyy')
    cy.contains('Dein Suchergebnis')
    cy.contains('Es gibt leider kein Suchergebnis für')
  })
})
