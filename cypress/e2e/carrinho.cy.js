describe('Carrinho de Compras - SauceDemo', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
    });

    it('Deve adicionar um produto ao carrinho e validar se ele está na listagem do carrinho', () => {
        const produtoNome = 'Sauce Labs Backpack';

        // Adiciona o produto ao carrinho
        cy.adicionarProdutoAoCarrinho(produtoNome);

        // Valida se o produto aparece corretamente no carrinho
        cy.validarProdutoNoCarrinho(produtoNome);
    });
});