describe('Toggle critical ingredients', () => {
  it('shows critical ingredients on click', () => {
    cy.visit('http://localhost:3000/dish/0AJjmYrt0J7JjX1aQAyo')
    cy.contains('Ungeeignete Zutaten').click()
    cy.contains('Käse')
  })
})
