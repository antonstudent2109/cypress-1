describe('Login pass', () => {
  it('Login', () => {
    LOGINPAGE.click();
    USERNAMEFIELD.click();
    PASSWORDFIELD.click();
    LOGINBUTTON.click();
    cy.get('class').contains('shopping_cart_container');
    cy.get('continue').click();
    })
})
