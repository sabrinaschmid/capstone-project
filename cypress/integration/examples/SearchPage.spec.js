context('Search page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('has the right App title', () => {
    cy.title().should('include', 'Tasty Travel')
  })

  it('has a search form', () => {
    cy.get('form[name="searchform"]').should('have.length', 1)
  })

  it('has a default dish list', () => {
    cy.contains('Alle italienischen Gerichte')
  })

  it('has a footer', () => {
    cy.get('footer').should('have.length', 1)
  })
})
