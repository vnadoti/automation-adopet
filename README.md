# Adopet Automação de Testes E2E

## 📌 Sobre o Projeto

Este projeto utiliza Cypress para testes End-to-End (E2E), validando tanto a API quanto a interface do sistema Adopet. O objetivo é garantir a qualidade e confiabilidade da plataforma em diferentes fluxos de usuário.

## 🚀 Tecnologias Utilizadas

- Cypress v14.5.2 (Testes E2E - UI + API)
- Node.js v22.17.1
- Mochawesome para relatório

## 🛠 Configurando o Ambiente de Testes

1. Clone o repositório:
- `git clone https://github.com/brenda-olifranco/Adopet.git`

2. Acesse o diretório do projeto:
-  `cd automation-adopet`

3. Instale as dependências:
-  `npm install`

## 📁 Estrutura do Projeto

```javascript
cypress/
├── e2e/                  # Arquivos de testes
├── fixtures/             # Dados para testes
├── downloads/            # Downloads gerados durante testes
├── screenshots/          # Capturas de tela de falhas
├── support/              # Arquivos de suporte
└── videos/               # Gravações das execuções
```

## 🧪 Suítes de Testes

#### Testes de Cadastro

- `cadastro.cy.js` e `cadastro-massa.cy.js`:
  - Testa o fluxo de cadastro com dados válidos
  - Testa o fluxo de cadastro com dados inválidos
  - Testa o fluxo de cadastro sem preencher dados
  - Valida mensagens de erro no cadastro
  - Testes com diferentes conjuntos de dados

#### Testes de Login

- `login.cy.js`: 
   - Valida o login com credenciais corretas
   - Testa cenários de erro no login
   - Testa o fluxo completo de login

___ 

##  Realizado por
- 📅 **Data de Execução:** 18 de Julho de 2025  
- 🧪 **Tipo de Teste:** Automatizado  
- 👤**Testador**: Victor Nadoti
- 🌐 **Sistema Testado:** Adopet