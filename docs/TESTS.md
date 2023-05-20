# Testes

Testar é uma parte essencial do desenvolvimento de um produto, especialmente para garantir a qualidade deste. Testes automáticos são importantes porque são mais rápidos de serem escritos e executados (no longo prazo) do que testes manuais. Além disso, as pessoas fazendo testes manuais podem esquecer alguma etapa, quanto os testes automatizados possuem mapeados todos os caminhos de teste que devem seguir. No longo prazo, testes automatizados salvam um bom tempo do time, como também diminuem o aparecimento de bugs.

## Tipos de Teste

### Teste Unitário

Um teste de unitário é uma maneira de testar uma unidade, o menor pedaço de código que pode ser logicamente isolado em um sistema. Na maioria das linguagens de programação, isso é uma função, uma sub-rotina, um método ou propriedade.

### Teste de Integração

Um teste de integração é um tipo de teste em que os módulos de software são integrados logicamente e testados como um grupo. O objetivo deste nível de teste é expor defeitos na interação entre esses módulos de software quando integrados

### Teste End-to-End (e2e)

O teste de ponta a ponta (e2e) é uma técnica que testa todo o produto do início ao fim para garantir que o fluxo da aplicação se comporta conforme o esperado. Ele define as dependências do sistema do produto e garante que todas as peças integradas funcionem juntas conforme o esperado. O principal objetivo do teste de ponta a ponta (E2E) é testar a partir da experiência do usuário final, simulando o cenário real do usuário e validando o sistema em teste e seus componentes para integração e integridade de dados.

## Design de testes

Os códigos de teste devem ser simples e de fácil entendimento. Uma das convenções adotadas para atingir isso é chamada de AAA (Arrange, Act, Assert)

- **Arrange:** todo o código de configuração para trazer o sistema para o cenário que o teste pretende simular. Isso pode incluir instanciar o construtor da unidade sendo teste, adicionar registros de banco de dados, simular objetos e qualquer outro código de preparação.
- **Act:** execute a unidade sendo testada. Geralmente, uma linha de código.
- **Assert:** Garanta que o valor recebido satisfaz a expectativa. Geralmente, uma linha de código

Ao construir o relatório de testes, inclua 3 partes em cada nome de teste:

1. O que está sendo testado
2. Qual é a circunstância e o cenário de teste
3. Qual é o resultado esperado

Os dois últimos passos ficam mais claros de serem identificados utilizando a seguinte estrutura: "**Dado** um determinado contexto, **quando** ocorrer algo, **então** espera-se algo"

Exemplo:

```node
//1. Unidade sendo testada
describe('Product Service', () => {
  // 2. Cenário
  describe('Adicionar novo produto', () => {
    //2. Expectativa
    it('Quando o preço não for especificado, então o status do produto é PENDING_APPROVAL', () => {
      // Arrange
      const productOptions = {};

      // Act
      const newProduct = new ProductService().add(productOptions);

      // Assert
      expect(newProduct.status).to.equal('PENDING_APPROVAL');
    });
  });
});
```

Considere também a implementação de [Page Objects](https://martinfowler.com/bliki/PageObject.html) ao escrever os testes.

---

[Home](../README.md)
