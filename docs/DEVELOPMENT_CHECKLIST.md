# Checklist de Desenvolvimento

### Planejamento da Tarefa

- O planejamento da sprint foi feito?
- Você conseguiu identificar o valor a ser entregue no final da sprint?
- Você compreendeu sua tarefa?
- Você compreendeu o valor da sua tarefa?
- Sua tarefa foi bem divida? (consegue executá-la em menos de 2 dias de trabalho; é claro o que precisa ser feito; etc)
- O design das telas da sua tarefa está pronto?
- É necessário checar alguma questão de UX ou UI?
- Algum requisito funcional precisa ser considerado? (O que o produto deve fazer)

### 1º Check Arquitetural

- Caso a tarefa envolva comunicação com o backend, os contratos de comunicação foram bem definidos?
- As entidades relacionadas à aplicação foram bem mapeadas? (Cuidado com over engineering e com o nível excessivo de detalhamento em algo que não está tão claro)
- Você compreende o paso a passo técnico de como fazer sua tarefa?
- O seu passo a passo se encaixa na arquitetura proposta? Conferir a [Arquitetura](ARCHITECTURE.md).
- Algum requisito não funcional precisa ser considerado? (Como o produto deve se comportar) [Checklist dos Requisitos Não Funcionais](NONFUNCTIONAL_REQUIREMENTS_CHECKLIST.md)
- O design dos testes foi feito? Conferir [Testes](TESTS.md)

### 1ª Execução da Tarefa

- Criar uma branch nova baseada na branch de developent.
- Executar o ciclo do TDD

### 2º Check Arquitetural

- Os requisitos arquiteturais definidos foram seguidos?
- Algum requisito funcional precisa ser considerado?
- Algum requisito não funcional precisa ser considerado? [Checklist dos Requisitos Não Funcionais](NONFUNCTIONAL_REQUIREMENTS_CHECKLIST.md)
- As [Boas Práticas](BEST_PRACTICES.md) foram seguidas?

### 2ª Execução da Tarefa

- Refatorar o código
- Rodar o script de formatação e de lint
- Rodar o script do inspetor de código e resolver os problemas apontados
- Rodar o script de formatação e de lint
- Rodar os testes unitários, de integração e e2e para garantir que nenhuma funcionalidade foi danificada.
- Documentar o que foi feito (CHANGELOG, storybook, etc)
- Fazer um pull de development e fazer o push da branch de trabalho. Lembre-se de seguir as boas práticas ao usar o [GIT](GIT.md)
- Submeter o pull request para development
- Após o merge na branch development, apagar a branch de trabalho

---

[Home](../README.md)
