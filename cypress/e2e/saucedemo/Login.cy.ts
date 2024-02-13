describe('template spec', () => {
  it('Login', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('input[id="user-name"]').type('user.email'); //https://docs.cypress.io/api/cypress-api/custom-commands
    cy.get('input[name=password]').type('secret_sauce');
    cy.get('login-button').click();
    cy.get('class').contains(`app_logo`);
    cy.get('continue').click();
    })
})
