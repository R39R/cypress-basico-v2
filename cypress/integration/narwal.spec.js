/// <reference types="cypress"/>

describe('Portal Narwal', () => {
    beforeEach(() => {
        cy.visit('cliente1regression.narwalsistemas.com.br')
    })

    it('Logar e criar admin', () => {
        cy.get('#Login')
            .type('admin', {delay: 0})
        cy.get('#senha')
            .type('S3gur@nc4-N@rv4lS1stem@s', {delay: 0})
        cy.get('.send > input')
            .click({force: true})

        for(var i=9; i<30; a=i){
            i++
            var a=i;
        cy.get('[data-id="1"] > .k-header')
            .click({force: true})
        cy.get('[data-id="19"] > .k-link')
            .click({force: true})
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
            .click()
        }
    })

    it('Retornar erro ao tentar criar usuário', () => {
        cy.get('#Login')
            .type('admin', {delay: 0})
        cy.get('#senha')
            .type('S3gur@nc4-N@rv4lS1stem@s', {delay: 0})
        cy.get('.send > input')
        .click({force: true})
        cy.get('[data-id="1"] > .k-header')
            .click({force: true})
        cy.get('[data-id="19"] > .k-link')
            .click({force: true})
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
            .click()
    })
})