Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    const longText = 'Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text'
    cy.get('#firstName').type('vinicius', {delay:0});
    cy.get('#lastName').type('rodrigues', {delay:0});
    cy.get('#email').type('vrosa@narwalsistemas.com.br', {delay:0});
    cy.get('#open-text-area').type(longText, {delay:0});
    cy.contains('button', 'Enviar').click({delay:0});
})