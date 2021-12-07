describe('Jobs page', () => {
  context('Visiting jobs page', () => {
    it('should editor choice section', () => {
      cy.log('Visiting jobs page')
      cy.visit('/zh/jobs')

      cy.log('Should see Editor Choices section')
      cy.findByText(/Editor Choices/i).should('be.visible')
    })
  })
})
