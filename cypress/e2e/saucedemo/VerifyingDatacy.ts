describe('verifying that values are correct', ()=>{
    cy.get('inventory_item_price').should('summary_info_label summary_total_label' , 'Tax: $' );
    cy.get('finish').click();
  })