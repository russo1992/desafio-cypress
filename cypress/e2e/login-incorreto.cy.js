describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Deve exibir erro ao tentar login com credenciais inválidas', () => {
        cy.loginComErro('usuario_invalido', 'senha_errada', 'Epic sadface: Username and password do not match any user in this service');
    });
});