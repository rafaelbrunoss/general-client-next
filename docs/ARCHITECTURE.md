# Arquitetura

A arquitetura de um frontend é uma coleção de ferramentas e processos que visam melhorar a qualidade do código do frontend ao mesmo tempo que cria um fluxo de trabalho mais eficiente e sustentável.[^1] [^2]

Diferentemente de arquiteturas de coisas físicas, a arquitetura de um software está mais aberta à mudanças e evoluções de acordo com as necessidades do projeto. A arquitetura de um frontend não deve ser encarada como "planeje e esqueça". Processos e estruturas que funcionavam bem no passado precisam ser revisitados porque as necessidades do projeto mudam com o tempo.

O trabalho de arquiteturar um sistema pode ser dividido em três etapas: design, planejamento e supervisão.

## Design

O design geral da aplicação foi pensando da seguinte maneira:

![alt text][app]

A aplicação é a união de diversos módulos com contextos específicos. Esses módulos não devem ser interdependentes para que a alteração em um módulo não impacte o outro. A única dependência que cada módulo deve possuir é a da biblioteca Core. Isso é feito para que haja um desacoplamento entre os módulos e bibliotecas terceiras. Todas as bibliotecas terceiras são importadas e extendidas na biblioteca Core. Além disso, essa biblioteca também contém códigos que podem ser compartilhados entre os módulos.

![alt text][core-and-modules]

```
/src
├── /core
│   ├── /components
│   │   ├── /company-library
│   │   └── /use-cases
│   ├── /hooks
│   ├── /models
│   ├── /navigation
│   ├── /services
│   ├── /store
│   ├── /styles
│   │   ├── /base
│   │   ├── /utilities
│   │   └── /vendors
│   └── /utils
│
├── /modules
│   ├── /feature-a
│   │   ├── /components
│   │   ├── /models
│   │   ├── /screens
│   │   │   ├── /screen-a
│   │   │   │   ├── /inner-component-aa
│   │   │   │   ├── /inner-component-ab
│   │   │   │   ├── ScreenA.tsx
│   │   │   │   ├── ScreenA.module.scss
│   │   │   │   ├── ScreenA.spec.tsx
│   │   │   │   ├── ScreenA.translations.tsx
│   │   │   │   └── ScreenAContext.tsx
│   │   │   └── /screen-b
│   │   │       └── ...
│   │   ├── /services
│   │   └── /utils
│   │
│   └── /feature-b
│       └── ...
└── App.tsx
```

### Estrutura das pastas

#### Core

- **components**: aqui ficam os componentes atômicos da aplicação, como botões. Caso utilize-se uma bilioteca terceira, esta deverá ser extendida aqui para que os módulos não a importem e sim os componentes contidos aqui. Ainda dentro desta pasta, há dois tipos de componentes, os que compõe a biblioteca componentes da empresa e os casos gerais de uso desses componentes. Um exemplo de caso de uso são os botões de salvar e cancelar.
- **hooks**: aqui ficam os hooks customizados.
- **models**: aqui ficam os modelos gerais da aplicação.
- **navigation**: aqui é criada a navegação geral da aplicação e suas regras.
- **services**: aqui ficam os serviços gerais da aplicação.
- **store**: aqui fica a store central que pode ser utilizada por toda a aplicação.
- **styles**: aqui ficam as regras gerais de estilo da aplicação. Para uma melhor organização essas regras foram divididas em algumas pastas. Na pasta base, ficam as regras básicas como a de reset, classes comuns em toda a aplicação e regras tipográficas. Na pasta utilities, ficam as variáveis, funções, mixins e placeholders. Na pasta vendors, ficam as importações de estilos de terceiros.
- **utils**: aqui ficam algumas constantes e funções mais genéricas que podem ser utilizadas por toda a aplicação.

#### Modules

- Feature X
  - **components**: aqui ficam componentes mais genéricos desse módulo
  - **models**: aqui ficam os modelos específicos desse módulo
  - **screens**: aqui ficam os componentes que constituem as telas. Caso seja necessário criar um contexto para a tela, o contexto também deve ficar aqui. Cada componente é composto por pelo menos quatro arquivos: o arquivo com a lógica de negócio, o arquivo de tradução, o arquivo de estilos e o arquivo de testes unitários.
  - **services**: aqui ficam os serviços específicos desse módulo
  - **utils**: aqui ficam alguns utilitários específicos desse módulo

### Fluxo de dados

A aplicação deve ser montada utilizando componentes container e de apresentação.

Componentes container são montados por uma união de componentes de apresentação. Neles estão a lógica de negócio, às chamadas à API, o acesso à store.

Componentes de apresentação são stateless e sua única função é apresentar. Não devem conter nenhuma lógica de negócio, não deve conter nada do domínio da aplicação para que sejam altamente reutilizáveis. Se comunicam com os componentes containers por meio de parâmetros de entrada e emitindo algum evento ou chamada de função como saída.

![alt text][data-flow]

## Planejamento

Para mais informações confira o [Ciclo de Desenvolvimento](./DEVELOPMENT_CYCLE.md)

## Supervisão

Para mais informações confira o [Ciclo de Desenvolvimento](./DEVELOPMENT_CYCLE.md)

---

[Home](../README.md)

[architecture]: ./images/architecture.png 'Arquitetura'
[app]: ./images/app.png 'App'
[core-and-modules]: ./images/core-and-modules.png 'Core and Modules'
[data-flow]: ./images/data-flow.png 'Data Flow'

[^1]: https://www.oreilly.com/library/view/frontend-architecture-for/9781491926772/ch01.html
[^2]: https://www.amazon.com.br/Frontend-Architecture-Design-Systems-Sustainable-ebook/dp/B01B6WS868/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=
