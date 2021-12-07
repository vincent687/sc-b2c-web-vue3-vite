describe('Jobs page', () => {
  context('Visiting jobs page', () => {
    it('should editor choice section', { defaultCommandTimeout: 10000 }, () => {
      cy.log('Visiting jobs page')
      cy.visit('/')

      cy.log('Should see Editor Choices section')
      cy.findByText(/Editor Choices/i).should('be.visible')
    })
  })
})
