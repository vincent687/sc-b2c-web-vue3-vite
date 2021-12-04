import { mount } from '@cypress/vue'
import Empty from './Empty.vue'

describe('Empty', () => {
  it('renders a message', () => {
    const msg = 'Nothing here'
    mount(Empty)

    cy.get('.text-xl').should('have.text', msg)
  })
})
