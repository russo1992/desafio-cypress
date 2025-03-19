# Desafio-Cypress 📋
<br/>

 <img src="assets/DALL·E 2025-03-18 09.22.04 - A digital illustration representing an end-to-end (E2E) testing challenge using Cypress on the SauceDemo application. The image features a laptop scre.webp" >

<br/>

## 📌 Status do Projeto:

![Em andamento](https://img.shields.io/static/v1?label=STATUS&message=Concluido&color=GREEN&style=for-the-badge)

<br/>

## 📌 Índice 
* [Título e Imagem de capa](https://github.com/russo1992/desafio-cypress/tree/main?tab=readme-ov-file#desafio-cypress-)
* [Status do Projeto](https://github.com/russo1992/desafio-cypress/tree/main?tab=readme-ov-file#-status-do-projeto)
* [Índice](https://github.com/russo1992/desafio-cypress/tree/main?tab=readme-ov-file#-%C3%ADndice)
* [Mapa Mental](https://github.com/russo1992/desafio-cypress/tree/main?tab=readme-ov-file#mapa-mental)
* [Estrutua do Projeto](https://github.com/russo1992/desafio-cypress/tree/main?tab=readme-ov-file#estrutura-do-projeto)
* [Descrição do Projeto ](https://github.com/russo1992/desafio-cypress/tree/main?tab=readme-ov-file#-descri%C3%A7%C3%A3o-do-projeto)
* [Pessoa Desenvolvedora do Projeto](https://github.com/russo1992/desafio-cypress/tree/main?tab=readme-ov-file#-pessoa-desenvolvedora-do-projeto)
* [Colaboradores](https://github.com/russo1992/desafio-cypress/tree/main?tab=readme-ov-file#colaboradores)
* [Ferramentas utilizadas](https://github.com/russo1992/desafio-cypress/tree/main?tab=readme-ov-file#ferramentas-utilizadas-)
<br/>

## Mapa Mental:
<br/>

<img src="assets/Mind Map- desafio cypress.png">

<br/>

## Estrutura do Projeto:
<br/>

 <img src="assets/estrutura do desafio.png">


## 📌 Descrição do Projeto:
<br/>

Este Projeto tem como base : automatizar testes em uma aplicação web de e-commerce, no site da saucedemo (que é meio que uma espécie de laboratório para fazer seus testes automatizados com varios tipos de frameworks ).
<br/>

O Framework utilizado por mim é o Cypress aonde vou estar fazendo os seguintes Cenários :
<br/>

* Cenário 1 : Login com usuário e senha válidos e inválidos
* Cenário 2 : Adicionar um produto ao carrinho e validar que ele aparece na listagem do carrinho
* Cenário 3 : Realizar o checkout de um produto (simulação) e validar mensagem de sucesso
<br/>

 **Para Executar os Testes**
 <br/>

  **1 Pré-requisitos :**
  * Node.js instalado(versão 14 a diante)
  * Vs Code instalado
  * Cypress instalado no projeto(estou usando a versão 13.6.4)
  <br/>

  **2 Instalação**
  * Clonar este repósitorio(https://github.com/russo1992/desafio-cypress.git) e instale as dependências : npm install
  <br/>

 **Execução dos Testes**
 <br/>

 * Para abrir o cypress em modo interativo : npx cypress open
 * Para rodar os testes : npx cypress run
  <br/>

  **Uso do Commands**
  <br/>

  Utilizei o commands.js para centralizar ações repetitivas, como login, adição de produtos ao carrinho e checkout, tornando os testes mais organizados e reutilizáveis. Isso melhora a manutenção do código, evitando repetições e facilitando futuras atualizações. Além disso, os comandos customizados tornam os testes mais legíveis e intuitivos. Essa abordagem garante maior eficiência e padronização no projeto.
  <br/>

  **Criação da Fixtures**
  <br/>

   Uma forma prática de armazenar dados fixos para utilizar nos testes. Isso facilita a manutenção e reutilização dos dados, tornando seus testes mais organizados e dinâmicos.
   Todos os dados sensíveis devem usar a Fixtures.
   OBS : Mas por conta de ser um desafio tecnico e não projeto real , você estudante , ou está em busca de seu emprego(não tem a necessidade de fazer), mas em um projeto "REAL" deve com muita certeza ser utilizado!
   Então veja no meu repositório na pasta fixtures como foi criado as duas new files uma chamada: produtos.json e a outra chamada usuarios.json e observem como esta montado dentro de ambas as pastas .
   Reforçando eu montei só como exemplo para vocês poderem estar vendo , mas nos testes não utlizei dentro de :
   <br/>
   * login-correto-cy.js
   * login-incorreto.cy.js
   * carrinho.cy.js
   * checkout.cy.js

<br/>


##  📌 Pessoa Desenvolvedora do Projeto:
Prazer em conhecê-lo(a)! Meu nome é Lucas Oliveira, tenho 32 anos e moro na Cidade Maravilhosa, Rio de Janeiro.<br />
Gmail : lucasrj58@gmail.com <br /> 
Linkedin : [Lucas Oliveira Rodrigues](https://www.linkedin.com/in/lucas-oliveira-rodrigues-07bb791b1/). <br />
<br/>

 <img src="assets/lukinas.png" width=115>

<br/>

## Colaboradores✨
<br/>

* Lucas Vieira Sousa (Pela a oportunidade de me deixar fazer este desafio)
* Elaine Souza (Pela entrevista humanizada que fez comigo)
* Bruno Cesar (Um amigo e um  grande incentivador)

<br/>

## Ferramentas utilizadas 💻

* Git
* Github
* Cypress
* JavaScript
* Xmind
<br/>