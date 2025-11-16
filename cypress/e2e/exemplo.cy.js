describe('Página inicial', () => {
  it('deve carregar com sucesso', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
  })
})
