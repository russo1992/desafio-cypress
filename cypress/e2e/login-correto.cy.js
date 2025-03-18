
    describe('Página de Login', () => {
        beforeEach(() => {
            cy.visit('https://www.saucedemo.com/');
        });
    
        it('Deve autenticar o usuário com credenciais válidas', () => {
            cy.login('standard_user', 'secret_sauce');
            cy.url().should('include', '/inventory.html');
            cy.get('.inventory_list').should('be.visible');
        });
    })