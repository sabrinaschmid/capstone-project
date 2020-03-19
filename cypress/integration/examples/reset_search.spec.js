describe('Reset search', () => {
  it('clears the input field when clicking the button', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[name="search-dish"]').type('norma')

    cy.get('form > button').click()

    cy.get('input[name="search-dish"]').should('be.empty')
  })
})
