import { STANDART_USER, PASSWORD, URL, LOCKED_USER, PROBLEM_USER } from "../../Constants";
describe('Login to saucedemo', () => {
    beforeEach(() => {
        cy.visit(URL)
    })
    it('Locked User login', () => {

        cy.get('[data-test="username"]').type(LOCKED_USER)
        cy.get('[data-test="password"]').type(PASSWORD)
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')
        cy.contains('Epic sadface: Sorry, this user has been locked out.')
    })})
    it('Problem user Login', () => {
        cy.get('[data-test="username"]').type(PROBLEM_USER)
        cy.get('[data-test="password"]').type(PASSWORD)
        cy.get('#login-button').click()
        cy.contains('.shopping_cart_link')
    })