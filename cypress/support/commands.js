
Cypress.Commands.add('Visit', () => { 
    cy.visit("https://adopet-frontend-cypress.vercel.app")
    cy.title().should('eq', 'AdoPet')
})

Cypress.Commands.add('Login', (email, senha) => {
    cy.get('[data-test="input-loginEmail"]').type(email)
    cy.get('[data-test="input-loginPassword"]').type(senha)
    cy.get('[data-test="submit-button"]').click()
})

Cypress.Commands.add("cadastrar", (nome, email, senha)  => {
    cy.get('[data-test="input-name"]').type(nome)
    cy.get('[data-test="input-email"]').type(email)
    cy.get('[data-test="input-password"]').type(senha)
    cy.get('[data-test="input-confirm-password"]').type(senha)
    cy.get('[data-test="submit-button"]').click()
})   