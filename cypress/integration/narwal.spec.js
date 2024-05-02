/// <reference types="cypress"/>

describe('Portal Narwal', () => {
    beforeEach(() => {
        cy.visit('cliente1regression.narwalsistemas.com.br')
    })

    it('Logar e criar usuário', () => {
        cy.loginNarwal()
        cy.get('[data-id="1"] > .k-header')
            .click({force: true})
        cy.get('[data-id="19"] > .k-link')
            .click({force: true})

        for(var i=1; i<=3; i++){
            var a=i;
            cy.get('#btnNovo')
                .click({waitForAnimations: true})
            cy.get(':nth-child(3) > ul > .tbValue > #Nome')
                .type('TesteCy' + a, {delay: 0})
            cy.get(':nth-child(5) > ul > .tbValue > #Email')
                .type('TesteCy'+ a +'@narwalsistemas.com.br', {delay: 0})
            cy.get(':nth-child(4) > ul > .tbValue > #Sobrenome')
                .type('TesteCy' + a, {delay: 0})
            cy.get(':nth-child(11) > .tbItem2 > ul > .tbValue > #Login')
                .type('TesteCy' + a, {delay: 0})
            cy.get('.tbValue > .k-widget > .k-dropdown-wrap > .k-input')
                .type('{downArrow}')
                .type('{enter}')
            cy.get('#btnAdicionar')
                .click({waitForAnimations: true})
            cy.get('.noty_text')
                .should('have.text', 'Operação realizada com sucesso')
            cy.wait(1000)
        }
    })

    it('Retornar erro ao tentar criar usuário', () => {
        cy.loginNarwal()
        cy.get('[data-id="1"] > .k-header')
            .click({force: true})
        cy.get('[data-id="19"] > .k-link')
            .click({force: true})
        cy.get('#btnNovo')
            .click({waitForAnimations: true})
        cy.get(':nth-child(3) > ul > .tbValue > #Nome')
            .type('TesteCy1', {delay: 0})
        cy.get(':nth-child(5) > ul > .tbValue > #Email')
            .type('TesteCy1@narwalsistemas.com.br', {delay: 0})
        cy.get(':nth-child(4) > ul > .tbValue > #Sobrenome')
            .type('TesteCy1', {delay: 0})
        cy.get(':nth-child(11) > .tbItem2 > ul > .tbValue > #Login')
            .type('TesteCy1', {delay: 0})
        cy.get('.tbValue > .k-widget > .k-dropdown-wrap > .k-input')
            .type('{downArrow}')
            .type('{enter}')
        cy.get('#btnAdicionar')
            .click()
        cy.get('.noty_text')
            .should('be.visible')
            .and('have.text', 'E-mail já utilizado em outro cadastro')
    })
})