var items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
var prices = ['7.99', '9.99', '15.99','15.99','29.99', '49.99']
Cypress.Commands.add("validateNamesAtoZ", () => {
    cy.get('data-test="product_sort_container"').should('have.value', 'az')
    cy.get('.inventory_item_name ').should(($item1) => {
        expect($item1).to.have.length(6)
    })
    cy.get('.Sauce Labs Backpack').eq(0).should("have.text", items[0])
    cy.get('.Sauce Labs Bike Light ').eq(1).should("have.text", items[1])
    cy.get('.Sauce Labs Bolt T-Shirt').eq(2).should("have.text", items[2])
    cy.get('.Sauce Labs Fleece Jacket').eq(3).should("have.text", items[3])
    cy.get('.Sauce Labs Onesie').eq(4).should("have.text", items[4])
    cy.get('.Test.allTheThings() T-Shirt (Red)').eq(5).should("have.text", items[5])    
})

Cypress.Commands.add("validateNamesZtoA", () => {
    cy.get('data-test="product_sort_container"').should('have.value', 'za')
    cy.get('.inventory_item_name ').should(($item1) => {
        expect($item1).to.have.length(6)
    })
    cy.get('.Test.allTheThings() T-Shirt (Red)').eq(0).should("have.text", items[5])
    cy.get('.Sauce Labs Onesie').eq(1).should("have.text", items[4])
    cy.get('.Sauce Labs Fleece Jacket').eq(2).should("have.text", items[3])
    cy.get('.Sauce Labs Bolt T-Shirt ').eq(3).should("have.text", items[2])
    cy.get('.Sauce Labs Bike Light ').eq(4).should("have.text", items[1])
    cy.get('.Sauce Labs Backpack ').eq(5).should("have.text", items[0])    
})

Cypress.Commands.add("validateNamesLowToHigh", () => {
    cy.get('data-test="product_sort_container"').should('have.value', 'lowToHigh')
    cy.get('.inventory_item_name ').should(($item1) => {
        expect($item1).to.have.length(6)
    })
    cy.get('.Sauce Labs Onesie').eq(0).should("have.text", prices[0])
    cy.get('.Sauce Labs Bike Light').eq(1).should("have.text", prices[1])
    cy.get('.Sauce Labs Bolt T-Shirt ').eq(2).should("have.text", prices[2])
    cy.get('.Test.allTheThings() T-Shirt (Red)').eq(3).should("have.text", prices[3])
    cy.get('.Sauce Labs Backpack').eq(4).should("have.text", prices[4])
    cy.get('.inventory_item_name ').eq(5).should("have.text", prices[5])    
})