var items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
Cypress.Commands.add("validateNamesAtoZ", () => {
    cy.get('data-test="product_sort_container"').should('have.value', 'az')
    cy.get('.inventory_item_name ').should(($item1) => {
        expect($item1).to.have.length(6)
    })
    //cy.get('.inventory_item_name ').should('have.length', 6) //??
    cy.get('.inventory_item_name ').eq(0).should("have.text", items[0])
    cy.get('.inventory_item_name ').eq(1).should("have.text", items[1])
    cy.get('.inventory_item_name ').eq(2).should("have.text", items[2])
    cy.get('.inventory_item_name ').eq(3).should("have.text", items[3])
    cy.get('.inventory_item_name ').eq(4).should("have.text", items[4])
    cy.get('.inventory_item_name ').eq(5).should("have.text", items[5])
    
})