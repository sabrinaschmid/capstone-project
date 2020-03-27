context('ScrollToTop button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('hides the ScrollToTop button while the user types', () => {
    cy.get('input[name="searchdish"]').type('a')
    cy.get('button[name="to-top-button"]').should('have.class', 'none')
  })

  it('shows the ScrollToTop button when the user presses Enter', () => {
    cy.get('input[name="searchdish"]').type('{Enter}')
    cy.get('button[name="to-top-button"]').should('not.have.class', 'none')
  })
})
