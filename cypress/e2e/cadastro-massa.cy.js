import { usuarios } from '../fixtures/usuarios.json'

describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.Visit()
    cy.get('[data-test="register-button"]').click()
  })
  usuarios.forEach(usuarios => { 
      it('Cadastrar novo usuário ', () => {
          cy.get('[data-test="input-name"]').clear().type(usuarios.name)
          cy.get('[data-test="input-email"]').clear().type(usuarios.email)
          cy.get('[data-test="input-password"]').clear().type(usuarios.password)
          cy.get('[data-test="input-confirm-password"]').clear().type(usuarios.password)
          cy.get('[data-test="submit-button"]').click()
      }) 
  })
})

