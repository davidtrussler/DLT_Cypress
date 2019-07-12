describe('My First Test', function() {
  it('Visits the page and changes the selector to green', function() {
    cy.visit('http://localhost:5000/index.html');
    cy.get('select').select('green');
    cy.get('#testSquare')
      .should('have.css', 'backgroundColor', 'rgb(0, 128, 0)');
  })
})
