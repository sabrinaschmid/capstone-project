describe('Live search', () => {
  it('shows search results while the user types something', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[name="search-dish"]').type('amatric')
    cy.contains('Dein Suchergebnis')
    cy.contains('Amatriciana')
  })
})
