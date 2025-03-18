// **
// Este arquivo commands.js mostra como criar
// comandos customizados no Cypress para reutilização.
// **


Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').should('be.visible').and('not.be.disabled').click();
});


Cypress.Commands.add('loginComErro', (username, password, errorMessage) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').should('be.visible').and('not.be.disabled').click();

    
    cy.get('[data-test="error"]').should('be.visible').and('contain', errorMessage);
});



Cypress.Commands.add('adicionarProdutoAoCarrinho', (produtoNome) => {
    cy.contains('.inventory_item_name', produtoNome)
      .parents('.inventory_item')
      .within(() => {
          cy.get('.btn_inventory').click();
      });

    
    cy.get('.shopping_cart_badge').should('contain', '1');
});


Cypress.Commands.add('validarProdutoNoCarrinho', (produtoNome) => {
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 1);
    cy.contains('.inventory_item_name', produtoNome).should('be.visible');
});



Cypress.Commands.add('preencherCheckout', (firstName, lastName, zipCode) => {
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(zipCode);
    cy.get('[data-test="continue"]').click();
});


Cypress.Commands.add('finalizarCompraEValidar', () => {
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
});