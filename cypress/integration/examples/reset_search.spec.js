describe('Reset search', () => {
  it('clears the input field when the user clicks the reset button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name="searchdish"]').type('norma')
    cy.get('form > button').click()
    cy.get('input[name="searchdish"]').should('be.empty')
  })
})
