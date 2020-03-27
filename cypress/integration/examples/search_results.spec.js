context('Search results', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('shows search results while the user types something', () => {
    cy.get('input[name="searchdish"]').type('amatric')
    cy.contains('Dein Suchergebnis')
    cy.contains('Amatriciana')
  })

  it('shows an notification message when there are no search results', () => {
    cy.get('input[name="searchdish"]').type('xxxyyy')
    cy.contains('Dein Suchergebnis')
    cy.contains('Es gibt leider kein Suchergebnis für').end()
  })
})
