var items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
var prices = ['$7.99', '$9.99', '$15.99','$15.99','$29.99', '$49.99']
Cypress.Commands.add("validateNamesAtoZ", () => {
    cy.get('data-test="product_sort_container"').should('have.value', 'az')
    cy.get('.inventory_item_name').should(($item1) => {
        expect($item1).to.have.length(6)
    })
    cy.get('.inventory_item_name').eq(0).should("have.text", items[0])
    cy.get('.inventory_item_name').eq(1).should("have.text", items[1])
    cy.get('.inventory_item_name').eq(2).should("have.text", items[2])
    cy.get('.inventory_item_name').eq(3).should("have.text", items[3])
    cy.get('.inventory_item_name').eq(4).should("have.text", items[4])
    cy.get('.inventory_item_name').eq(5).should("have.text", items[5])    
})

Cypress.Commands.add("validateNamesZtoA", () => {
    cy.get('data-test="product_sort_container"').should('have.value', 'za')
    cy.get('.inventory_item_name').should(($item1) => {
        expect($item1).to.have.length(6)
    })
    cy.get('.inventory_item_name').eq(0).should("have.text", items[5])
    cy.get('.inventory_item_name').eq(1).should("have.text", items[4])
    cy.get('.inventory_item_name').eq(2).should("have.text", items[3])
    cy.get('.inventory_item_name').eq(3).should("have.text", items[2])
    cy.get('.inventory_item_name').eq(4).should("have.text", items[1])
    cy.get('.inventory_item_name').eq(5).should("have.text", items[0])    
})

Cypress.Commands.add("validatePriceLowToHigh", () => {
    cy.get('data-test="product_sort_container"').should('have.value', 'lowToHigh')
    cy.get('.inventory_item_price').should(($item1) => {
        expect($item1).to.have.length(6)
    })
    cy.get('.inventory_item_price').eq(0).should("have.value", prices[0])
    cy.get('.inventory_item_price').eq(1).should("have.value", prices[1])
    cy.get('.inventory_item_price').eq(2).should("have.value", prices[2])
    cy.get('.inventory_item_price').eq(3).should("have.value", prices[3])
    cy.get('.inventory_item_price').eq(4).should("have.value", prices[4])
    cy.get('.inventory_item_price ').eq(5).should("have.value", prices[5])    
})

Cypress.Commands.add("validatePriceHighToLow", () => {
    cy.get('data-test="product_sort_container"').should('have.value', 'HighToLow')
    cy.get('.inventory_item_price').should(($item1) => {
        expect($item1).to.have.length(6)
    })
    cy.get('.inventory_item_price').eq(0).should("have.value", prices[5])
    cy.get('.inventory_item_price').eq(1).should("have.value", prices[4])
    cy.get('.inventory_item_price').eq(2).should("have.value", prices[3])
    cy.get('.inventory_item_price').eq(3).should("have.value", prices[2])
    cy.get('.inventory_item_price').eq(4).should("have.value", prices[1])
    cy.get('.inventory_item_price ').eq(5).should("have.value", prices[0])    
})