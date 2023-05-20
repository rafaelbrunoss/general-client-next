# Boas Práticas

O conteúdo dos livros abaixo são assimilados de uma forma melhor ao longo dos anos e com a prática. Ler todos os livros sem uma boa experiência de projetos pode não surtir o efeito de aprendizado desejado. Entenda que a área de software se desenvolve muito rápida e algum conteúdo das referências pode estar desatualizado.

## Possua uma base sólida

Saber os fundamentos básicos de algoritmos é fundamental para que o desenvolvedor saiba pensar na melhor solução e consiga escrever um bom código. Os fundamentos vão te ajudar a entender melhor como diversas ferramentas funcionam e se elas podem ou não ser utéis para uma determinada aplicação. Esse conhecimento se torna imprescindível se o que for desenvolvido necessita de uma boa performance.

Recomendação de leitura:

- [Introduction to Algorithms [Cormen & Rivest & Leiserson & Stein]](https://www.amazon.com.br/Algoritmos-Teoria-Pr%C3%A1tica-Thomas-Cormen/dp/8535236996)

## Cuide do código

O desenvolvimento de um software não termina quando este resolve um determinado problema. Manter o código organizado também faz parte do trabalho. Hoje em dia, dificilmente alguém vai produzir algo sozinho, portanto mantenha o código limpo para aumentar a produtividade do trabalho. A falta de organização do código pode atrapalhar o seu entendimento pelas outras pessoas do time, como também dificultar a manutenção deste no futuro

Recomendação de leitura:

- [Clean Code [Robert C. Martin]](https://www.amazon.com.br/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Refactoring [Martin Fowler]](https://www.amazon.com.br/Refatora%C3%A7%C3%A3o-Aperfei%C3%A7oando-Design-C%C3%B3digos-Existentes/dp/8575227246)

## Trabalhando em equipe

Desenvolvedores possuem uma responsabilidade não apenas com o código, mas com a equipe e com o projeto. Aprender a estimar atividades e priorizar tarefas é algo muito importante.

Recomendação de leitura:

- [The Clean Coder [Robert C. Martin]](https://www.amazon.com.br/codificador-limpo-conduta-programadores-profissionais/dp/8576086476)
- [The Mythical Man-Month [Frederick Brooks]](https://www.amazon.com.br/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959)
- [The Pragmatic Programmer [Thomas & Hunt]](https://www.amazon.com.br/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052)

## Desenvolva um pensamento sistêmico

Entenda sobre o domínio da aplicação. Saiba os processos e regras desse domínio para que você consiga pensar no sistema como um todo e criar soluções mais robustas.

Recomendação de leitura:

- [Domain Driven Design [Eric Evans]](https://www.amazon.com.br/Domain-Driven-Design-Eric-Evans/dp/8550800651)

## Entenda sobre o negócio

Para que um software possa gerar dinheiro para uma empresa, este deve resolver problemas reais e não teóricos. Muitos desenvolvedores caem na armadilha de fazer um design complexo logo de início ou então criar diversas funcionalidades que podem até ser boas, mas não resolvem o problema do cliente. Entenda primeiro sobre o negócio antes de gastar recursos para produzir algo. Teste as coisas com o cliente final antes de dar prosseguimento em trabalhos mais complicados.

Recomendação de leitura:

- [The Lean Startup [Eric Ries]](https://www.amazon.com.br/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898)

## Princípios gerais

Esses princípios estabelecem práticas que levam ao desenvolvimento de software consideranto aspectos como a manutenção e extensão à medida que o projeto cresce. Adotar essas práticas também pode contribuir para evitar código sujo e ajudar o refatorando do código.

### SOLID

Os princípios SOLID foram introduzidos por Robert C. Martin em seu artigo de 2000 “Design Principles and Design Patterns”. Esses conceitos foram posteriormente melhorados por Michael Feathers, que nos apresentou a sigla SOLID.

#### Single Responsiblity Principle

Uma classe deve ter um e apenas um motivo para mudar, o que significa que uma classe deve ter apenas um trabalho.

#### Open-Closed Principle

Uma classe deve estar aberta para ser extendida e fechada para ser modificada

#### Liskov Substitution Principle

Uma classe deveria ser substitutível por sua subclasse. Isso significa que, dado que a classe B é uma subclasse da classe A, devemos ser capazes de passar um objeto da classe B para qualquer método que espere um objeto da classe A e o método não deve fornecer nenhuma saída estranha nesse caso.

#### Interface Segregation Principle

Muitas interfaces específicas de clientes são melhores do que uma interface de propósito geral. Os clientes não devem ser forçados a implementar uma função de que não precisam.

#### Dependency Inversion Principle

Uma classe deve depender de interfaces ou classes abstratas em vez de classes e funções concretas. Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender da abstração. As abstrações não devem depender de detalhes. Os detalhes devem depender de abstrações.

### GRASP (General Responsibility Assignment Software Principles)

GRASP é um conjunto de 9 Princípios Gerais de Software sobre Atribuição de Responsabilidades.

#### 1. Information Expert

**Problema:** Onde devo adicionar uma nova funcionalidade?
**Solução:** Atribua a responsabilidade para a classe que possui o maior conhecimento sobre a nova funcionalidade.

#### 2. Creator

**Problema:** Quem deve criar um objeto A?
**Solução:** Atribua a classe B a responsabilidade de criar o objeto A se um desses itens for verdadeiro (quanto mais itens melhor):

- B contém A ou agrega objetos do tipo A
- B salva instâncias de A
- B usa de perto instâncias de A
- B possui os dados de inicialização de A

#### 3. Controller

**Problema:** Qual é o primeiro objeto, depois da camada de UI, que recebe e controla as operações do sistema
**Solução:** Atribua a responsabilidade a um objeto que representa um dos seguintes itens:

- Representa o sistema como um todo (Facade Controller)
- Representa um caso de uso, lidando com uma sequência de operações (Session Controller)

#### 4. Low Coupling

**Problema:** Como reduizr o impacto de uma mudança? Como suportar baixa dependência e aumentar o reuso?
**Solução:** O acoplamento mede como um elemento está relacionado com outro. Quanto maior o acomplamento, maior é a dependência de um elemento ao outro. Uma solução é utilizar os princípios SOLID.

#### 5. High Cohesion

**Problema:** Como manter objetos focados numa tarefa, fáceis de entender, fáceis de gerenciar e, como efeito colateral, suportar Low Coupling?
**Solução:** A coesão mede o quão forte todas as responsabilidades de um elemento estão relacionadas. Separe elementos que não possuem relações diretas entre si em outras classes.

#### 6. Indirection

**Problema:** Onde atribuir responsabilidades para evitar acoplamento entre duas ou mais coisas?
**Solução:** Atribua a responsabilidade para um objeto intermediário que fará o papel de mediador entre essas coisas.

#### 7. Polymorphism

**Problema:** Como lidar com elementos que estão relacionados, mas possuem variações no tipo do elemento?
**Solução:** Quando alternativas ou comportamentos relacionados variam por tipo, atribua a responsabilidade pelo comportamento (usando polimorfismo) aos tipos para os quais o comportamento varia.

#### 8. Pure Fabrication

**Problema:** Qual objeto deve ter a responsabilidade, quando você não quer violar Alta Coesão e Baixo Acoplamento mas soluções oferecidas por outros princípios não são apropriadas?
**Solução:** Atribua um conjunto de responsabilidades com alta coesão para uma classe artificial que não representa um conceito de domínio do problema.

#### 9. Protected Variations

**Problema:** Como projetar objetos, subsistemas e sistemas para que as variações ou instabilidades nesses elementos não tenham um impacto indesejável em outros elementos?
**Solução:** Identifique pontos de variação ou instabilidade prevista, atribua responsabilidades para criar uma interface estável em torno deles.

### DRY (Don't Repeat Yourself)

O foco do DRY é evitar a repetição de informações. Quando você escreve um código que executa as mesmas tarefas repetidamente, qualquer modificação de uma tarefa requer que a mesma alteração seja feita em cada instância dessa tarefa. Editar cada instância de uma tarefa é muito trabalhoso.

### KISS (Keep it simple, stupid)

O KISS é um princípio de design que afirma que projetos e/ou sistemas devem ser tão simples quanto possível. Sempre que possível, a complexidade deve ser evitada, pois a simplicidade garante maiores níveis de aceitação e interação do usuário.

### TDA (Tell, Don't Ask)

O TDA é um princípio que ajuda as pessoas a se lembrarem de que a orientação a objetos consiste em agrupar dados com as funções que operam nesses dados. Em vez de pedir dados a um objeto e agir com base nesses dados, devemos dizer a um objeto o que fazer. Isso incentiva a mover o comportamento para dentro do objeto para acompanhar os dados.

### LoD (Law of Demeter)

A LoD ou princípio do mínimo conhecimento é um princípio de design para o desenvolvimento de software, particularmente programas orientados a objetos. E é um princípio muito simples de aprender e aplicar, baseado em três regras básicas:

- Uma unidade deve ter apenas conhecimento limitado sobre outras unidades
- Uma unidade só deve falar com seus amigos imediatos
- Uma unidade não deve falar com estranhos

Uma unidade, neste contexto, é uma abstração codificada específica. Pode ser uma função, um módulo ou uma classe. E falar aqui significa fazer interface com essa abstração.

### YAGNI (You ain’t gonna need it)

O YAGNI é um princípio que diz que funcionalidades só devem ser adicionadas quando requisitadas. Esse princípio elimina o excesso e a ineficiência no desenvolvimento, ajudando os desenvolvedores a evitar esforço desnecessário em tarefas que assume-se que serão necessárias no futuro. Um exemplo disso são otimizações prematuras.

## Referências

[Clean Code [Robert C. Martin]](https://www.amazon.com.br/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
[Domain Driven Design [Eric Evans]](https://www.amazon.com.br/Domain-Driven-Design-Eric-Evans/dp/8550800651)
[Introduction to Algorithms [Cormen & Rivest & Leiserson & Stein]](https://www.amazon.com.br/Algoritmos-Teoria-Pr%C3%A1tica-Thomas-Cormen/dp/8535236996)
[Refactoring [Martin Fowler]](https://www.amazon.com.br/Refatora%C3%A7%C3%A3o-Aperfei%C3%A7oando-Design-C%C3%B3digos-Existentes/dp/8575227246)
[The Clean Coder [Robert C. Martin]](https://www.amazon.com.br/codificador-limpo-conduta-programadores-profissionais/dp/8576086476)
[The Lean Startup [Eric Ries]](https://www.amazon.com.br/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898)
[The Mythical Man-Month [Frederick Brooks]](https://www.amazon.com.br/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959)
[The Pragmatic Programmer [Thomas & Hunt]](https://www.amazon.com.br/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052)

---

[Home](../README.md)
