/// <reference types="cypress" />

describe('Complete onboarding process and authenticate user', () => {
  beforeEach(() => {
    cy.visit('https://localhost:8910/')
  })

  // it('displays the landing page', () => {
  //   cy.
  // })

  it('properly completes user login process', () => {
    cy.get('.mantine-Button-filled .mantine-qo1k2').click()
    cy.get('.mantine-10o78yv > div span').click()
    cy.get('#username').click()
    cy.get('#username').type('test')
    cy.get('#password').click()
    cy.get('#password').type('abc123')
    cy.get('.rw-button').click()
    cy.get('.rw-form-wrapper > .rw-form-wrapper').submit()
    cy.get('.mantine-Title-root').should('contain', 'Welcome back')
  })
})
