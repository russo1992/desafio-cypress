describe('Carrinho de Compras - SauceDemo', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
    });

    it('Deve adicionar um produto ao carrinho e validar se ele está na listagem do carrinho', () => {
        const produtoNome = 'Sauce Labs Backpack';

        
        cy.adicionarProdutoAoCarrinho(produtoNome);

        
        cy.validarProdutoNoCarrinho(produtoNome);
    });
});