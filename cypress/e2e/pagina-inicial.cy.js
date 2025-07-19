describe("", () => {
    beforeEach(() => {
        cy.Visit()
    })

    it("Encontrar Textos no HTML", () => { 
        cy.contains('p', "Quem ama adota!").should('be.visible')
        cy.contains('p', "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!").should('be.visible')
    })
})