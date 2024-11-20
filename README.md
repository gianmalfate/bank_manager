# Sistema Bancário

Este é um sistema bancário desenvolvido durante o curso **"JavaScript - POO, Herança e Polimorfismo"**. Ele demonstra conceitos fundamentais de Programação Orientada a Objetos (POO) aplicados em JavaScript, como herança, polimorfismo, encapsulamento e abstração.

---

## 🛠️ Funcionalidades

- **Modelagem de Contas Bancárias**:
  - Contas Correntes, Poupança e Salário, cada uma com regras específicas de saque.
  - Classe base `Conta` como classe abstrata para reutilização de código.
  - Controle de múltiplas contas e saldo.

- **Gerenciamento de Usuários**:
  - Sistema de autenticação para **Clientes**, **Gerentes** e **Diretores**.
  - Suporte para login utilizando o conceito de "duck typing".

- **Operações Bancárias**:
  - Depósitos, saques e transferências.
  - Taxas personalizadas para cada tipo de conta.

---

## 🚀 Tecnologias Utilizadas

- **JavaScript ES6+**
  - Classes e módulos.
  - Herança e polimorfismo.
  - Abstração e encapsulamento.

---

## ✨ Como Executar o Projeto

### Pré-requisitos

- **Node.js** instalado.

### Passos

1. Clone este repositório:
   ```bash
   git clone <https://github.com/gianmalfate/bank_manager>
   cd sistema_bancario
2. Execute o código:
	```bash
	node index.js

## 🔑 Detalhes de Implementação

### 1. Classes de Conta

-   **`Conta`**:
    
    -   Classe abstrata com métodos genéricos de saque, depósito e transferência.
    -   Não pode ser instanciada diretamente.
    -   Define a estrutura para contas específicas.
-   **`ContaCorrente`**:
    
    -   Taxa de saque: 10%.
    -   Registra o número total de contas correntes criadas.
-   **`ContaPoupanca`**:
    
    -   Taxa de saque: 2%.
-   **`ContaSalario`**:
    
    -   Taxa de saque: 1%.

### 2. Sistema de Autenticação

-   **`SistemaAutenticacao`**:
    -   Utiliza o conceito de "duck typing" para autenticar qualquer objeto que possua o método `autenticar`.
    
## 🧑‍💻 Contato

Dúvidas ou sugestões? Entre em contato pelo email: **gianmalfate@gmail.com**.
