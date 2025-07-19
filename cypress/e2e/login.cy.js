describe ("Login", () => {
    beforeEach (() => {
        cy.Visit(); 
        cy.get('[data-test="login-button"]').click()
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',
        {statusCode: 400, }).as('stubPost')
    })

    //Cenário Feliz
    it ("Preencher Login corretamente e autenticar usuário", () => {
        cy.Login('ana@email.com', 'Senha123')
    })
    
    //Cenário Feliz
    it("Login com fluxo diferente", () =>{
        cy.get('.header__message').click()
        cy.Login('ana@gmail.com', 'Senha123')
    })

    
    // Cenário Triste
    it ("Login sem preencher os dados-não validar", () => {
        cy.Login('{del}', '{del}')
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
    })
    
    // Cenário Triste
    it ("E-mail e Senha fora do padrão-não validar", () => {
        cy.Login('anaemail.com', 'senha')
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })
    
    // Cenário Triste
    it("Login e Senha sem credenciais", () => { 
        cy.Login("anaemail@gmail.com", "Senha1234")
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })

})