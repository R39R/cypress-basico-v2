Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    const longText = 'Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text, Text, text, text, text, text, text'
    cy.get('#firstName').type('vinicius', {delay:0});
    cy.get('#lastName').type('rodrigues', {delay:0});
    cy.get('#email').type('vrosa@narwalsistemas.com.br', {delay:0});
    cy.get('#open-text-area').type(longText, {delay:0});
    cy.contains('button', 'Enviar').click({delay:0});
})

Cypress.Commands.add('loginNarwal', () => {
    cy.get('#Login')
        .type('admin', {delay: 0})
    cy.get('#senha')
        .type('S3gur@nc4-N@rv4lS1stem@s', {delay: 0})
    cy.get('.send > input')
        .click({force: true})
})