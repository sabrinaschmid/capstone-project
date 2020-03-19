describe('Live search', () => {
  it('shows search results', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[name="search-dish"]').type('amatric')
    cy.contains('Dein Suchergebnis')
    cy.contains('Amatriciana')
  })
})
