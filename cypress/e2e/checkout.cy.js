describe('Fluxo de Checkout - SauceDemo', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
    });

    it('Deve adicionar um produto ao carrinho, realizar checkout e validar a mensagem de sucesso', () => {
        const produtoNome = 'Sauce Labs Backpack';

        
        cy.adicionarProdutoAoCarrinho(produtoNome);

        
        cy.validarProdutoNoCarrinho(produtoNome);

        
        cy.preencherCheckout('João', 'Silva', '12345');

        
        cy.finalizarCompraEValidar();
    });
});