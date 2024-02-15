const LOGINPAGE = cy.visit('https://www.saucedemo.com/');
const USERNAMEFIELD = cy.get('input[id="user-name"]').type('standard_user'); //https://docs.cypress.io/api/cypress-api/custom-commands
const PASSWORDFIELD = cy.get('input[name=password]').type('secret_sauce');
const LOGINBUTTON = cy.get('login-button').click();



