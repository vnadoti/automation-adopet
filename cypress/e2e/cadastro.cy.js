describe('Cadastro', () => {
  beforeEach(() => {
    cy.Visit()
    cy.get('[data-test="register-button"]').click()
  })
  
  // Cenário Feliz
  it('Cadastro com dados válidos', () => {
    cy.cadastrar('Admin', 'admin11@gmail.com', 'Password123')
  })
  
  // Cenário Triste
  it ('Cadastro sem preencher os campos obrigatórios', () => {
    cy.cadastrar('{del}', '{del}', '{del}')
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Crie uma senha').should('be.visible')
    cy.contains('Repita a senha criada acima').should('be.visible')
  })
  
  //Cenário Triste
  it ('Cadastro com senha inválida', () => {
    cy.cadastrar('Admin', 'admin11@gmail.com', 'senha')
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
  })


})