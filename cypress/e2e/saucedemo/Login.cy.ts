/// <reference types="cypress" />

import { PASSWORD, STANDART_USER, URL } from "../../Constants"

describe('Login to saucedemo', () => {
    beforeEach(() => {
        cy.visit(URL)
    })
    it('Positive login to saucedemo', () => {
        cy.get('[data-test="username"]').type(STANDART_USER)
        cy.get('[data-test="password"]').type(PASSWORD)

        cy.get('#login-button').click()
        cy.get('.shopping_cart_link').should('be.visible')
        var names
        cy.get('.inventory_item_name').invoke('text').then((text) => {
            names = names.
        expect(names).to.be.eq("123")
    })

    it.skip('Negative login test', () => {

        cy.get('[data-test="username"]').type('abc')
        cy.get('[data-test="password"]').type('abc')
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')
    })
})})