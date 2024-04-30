/// <reference types="Cypress"/>

describe('Central de Atendimento ao Cliente TAT', function(){
    beforeEach(function(){
        cy.visit('./src/index.html');
    })

    it('verifica o título da aplicação', function(){
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    it('preencher os campos obrigatórios e envia formulário', function(){
        const longText = 'Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text'
        cy.get('#firstName').type('vinicius', {delay:0});
        cy.get('#lastName').type('rodrigues', {delay:0});
        cy.get('#email').type('vrosa@narwalsistemas.com.br', {delay:0});
        cy.get('#open-text-area').type(longText, {delay:0});
        cy.contains('button', 'Enviar').click({delay:0});

        cy.get('.success').should('be.visible');
    })
    
    it('exibe mensagem de erro', function(){
        cy.get('#firstName').type('vinicius', {delay:0});
        cy.get('#lastName').type('rodrigues', {delay:0});
        cy.get('#email').type('vrosa.narwalsistemas.com.br', {delay:0});
        cy.get('#open-text-area').type('Text', {delay:0});
        cy.contains('button', 'Enviar').click({delay:0});

        cy.get('.error').should('be.visible');
    })

    it('campo telefone continua vazio ao digitar campo não-numerico', function(){
        cy.get('#phone')
        .type('asdasdasdasdasd', {delay:0})
        .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', function(){
        cy.get('#firstName').type('vinicius', {delay:0});
        cy.get('#lastName').type('rodrigues', {delay:0});
        cy.get('#email').type('vrosa@narwalsistemas.com.br', {delay:0});
        cy.get('#phone-checkbox').click({delay:0});
        cy.get('#open-text-area').type('Text', {delay:0});
        cy.contains('button', 'Enviar').click({delay:0});

        cy.get('.error').should('be.visible');
    })

    it('preenche e limpa os campos nome, sobrenome, email e text box', function(){
        cy.get('#firstName', {delay:0})
        .type('vinicius', {delay:0})
        .should('have.value', 'vinicius')
        .clear({delay:0})
        .should('have.value', '')

        cy.get('#lastName')
        .type('rodrigues', {delay:0})
        .should('have.value', 'rodrigues')
        .clear({delay:0})
        .should('have.value', '')
        
        cy.get('#email')
        .type('vrosa@narwalsistemas.com.br', {delay:0})
        .should('have.value', 'vrosa@narwalsistemas.com.br')
        .clear({delay:0})
        .should('have.value', '')
    })

    it('exibe mensagem de erro sem preencher os campos obrigatórios', function(){
        cy.contains('button', 'Enviar').click({delay:0})
        cy.get('.error')
        .should('be.visible')
    })

    it('envia o formulário com sucesso usando comandos customizados', function(){
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (youtube) por seu texto', function(){
        cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu texto', function(){
        cy.get('#product')
        .select('Mentoria')
        .should('have.value', 'mentoria')
    })

    it('Faz uma requisição HTTP', () => {
        cy.request('http://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
            .should(function(response){
                const {status, statusText, body} = response
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
                expect(expect(body).to.include('CAC TAT'))
        })
    })

    it.only('mostra o gato e muca os titulos', () =>{
        cy.get('#cat')
            .invoke('show')
        cy.get('#title')
            .invoke('text', 'CAT TAT')
        cy.get('#subtitle')
            .invoke('text', 'Eu 💗 gatos!!')
    })
})