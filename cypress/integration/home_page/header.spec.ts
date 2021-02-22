context('Home', () => {
  it('displays desmos title', () => {
    cy.visit('http://localhost:3000')
    cy.viewport('iphone-6');

    cy.contains('Average Block Time');

    cy.get('.hamburger').click();
    cy.contains('Blocks');

    cy.viewport('macbook-16');
    cy.contains('Desmos');
    cy.get('.big-dipper-icon').click();
    cy.contains('Blocks');
  })
})
