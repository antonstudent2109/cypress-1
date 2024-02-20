import { STANDART_USER, PASSWORD, URL, LOCKED_USER, PROBLEM_USER } from "../../Constants";
describe('Login to saucedemo', () => {
    beforeEach(() => {
        cy.visit(URL)
    })
})
it('Positive login to saucedemo', () => {
    cy.get('[data-test="username"]').type(STANDART_USER)
    cy.get('[data-test="password"]').type(PASSWORD)
    it('All items check', () => {
        cy.get('react-burger-menu-btn').click()
        cy.get('.bm-item menu-item').click()
        cy.get('about_sidebar_link').click()
        cy.contains('#inventory_sidebar_link')
    }
    )
})
it('Logout check', () => {
    cy.get('[data-test="username"]').type(STANDART_USER)
    cy.get('[data-test="password"]').type(PASSWORD)
    cy.get('react-burger-menu-btn').click()
    cy.get('.bm-item menu-item').click()
    cy.contains('login-button');
})
it('reset ', () =>) {
    cy.get('[data-test="username"]').type(STANDART_USER)
    cy.get('[data-test="password"]').type(PASSWORD)
    cy.get('react-burger-menu-btn').click()
    cy.get('.bm-item menu-item').click();
}


