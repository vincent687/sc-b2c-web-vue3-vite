describe('Jobs page', () => {
  context('Visiting jobs page', () => {
    it('should editor choice section', () => {
      cy.log('Visiting jobs page')
      cy.visit('/jobs')

      cy.log('Should see Editor Choices seection')
      cy.findByText(/Editor Choices/i).should('be.visible')
    })
  })
})
