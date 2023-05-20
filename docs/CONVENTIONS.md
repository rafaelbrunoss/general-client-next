# Conveções do Projeto

- Excetuando-se os comentários, a língua utilizada no projeto é o inglês. Portanto as variáveis, classes, funções, nome de arquivos, nome de pastas e qualquer outra coisa deve estar em inglês

- Utilizamos os guias de estilo do [Typescript](https://google.github.io/styleguide/tsguide.html), do [Sass](https://sass-lang.com/styleguide/typography) e do [CSS](https://google.github.io/styleguide/htmlcssguide.html) para escrever o código. Além de usar a convenção de nomes [BEM](https://getbem.com/naming/) para estilos.

- Todo componente deve estar dentro de uma pasta. Esse componente deve conter pelo menos três arquivos: o de renderização do próprio componente, o arquivo de tradução e o arquivo de estilos O nome da pasta deve estar em Kebab Case enquanto o nome do componente deve estar em Pascal Case. Exemplo: componente UserWindow

  - /user-window
    - UserWindow.tsx
    - UserWindow.translations.tsx
    - UserWindow.module.scss

- Seguimos as [Boas Práticas](BEST_PRACTICES.md)

---

[Home](../README.md)
