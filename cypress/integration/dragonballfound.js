/// <reference types="cypress" />

context('Found Dragon ball', () => {
  before(() => {
    cy.visit('http://localhost:3000/dragon-ball-manager')
  })
  it('Should change dragon ball status to founded', () => {
    cy.get('[data-testid="card-ball"]').should('exist')
    //cy.get('[data-testid="ball-missing"]').should('exist')
    cy.get('[data-testid="ball-button"]').click({force: true})
    cy.get('[data-testid="ball-confirm"]').should('exist')
    cy.get('[data-testid="ball-success"]').click({force: true})
    //cy.get('[data-testid="modaltext"]').should('contain.text', 'Você não tem todas as esferas para invocar o shenlong')
    //cy.get('[data-testid="back"]').click()
  })
})