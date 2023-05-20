# GIT

Trabalhar com software não envolve apenas escrever códigos, mas uma parte importate é versionar esse código colocando mensagens específicas e concisas. Para atingir esse objetivo, uma prática comumente adotada é a utilização de commits semânticos.[^1] [^2]

`tipo(escopo opcional): ação verbal no infinitivo + mensagem`

### Tipos de commits

- **feature**: nova funcionalidade no código
- **fix**: correção de bug
- **docs**: mudança na documentação
- **style**: formatação do código
- **refactor**: refatoração do código
- **test**: adição ou modficação de testes
- **build**: mudança relacionada às configurações, ferramentas, dependências, etc.
- **revert**: reversão de commits

**Exemplos de commit**

```bash
git commit -m "fix: corrigir a função onChange no campo do nome do usuário"
```

```bash
git commit -m "feature(user/profile): adicionar o componente do Avatar"
```

```bash
git commit -m "build(npm): atualizar react de 18.1.0 para 18.2.0"
```

### Procedimentos

- Faça commits de pequenas tarefas. **Não** dê um `git add .` de diversos arquivos.
- Utilizamos commits semânticos. Commits fora dessa regra falharão automaticamente.
- Escreva mensagens específicas e concisas nos commits. Comece sempre com um verbo no infinitivo.
- Utilizamos o [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html):
  - Ao começar uma nova tarefa, crie uma branch nova baseada na versão mais atual branch development. Ao terminar a tarefa, faça um pull request dessa nova branch para a de desenvolvimento. Quando tudo for concluído, apague a branch do repositório.
  - Ao corrigir um bug em staging, uma branch de bugfix deve ser criada baseada na versão mais atual de staging. Ao terminar a correção, faça um pull request dessa branch para staging e para development. Quando tudo for concluído, apague a branch do repositório.
  - Ao corrigir um bug em production, uma branch de hotfix deve ser criada baseada na versão mais atual de production. Ao terminar a correção, faça um pull request dessa branch para production e para staging. De staging faça um novo pull request para development. Quando tudo for concluído, apague a branch do repositório.

![alt text][gitlab-flow]

### Documentação

[Usando git direito (Boas Práticas)](https://www.youtube.com/watch?v=6OokP-NE49k)
[Pro Git book](https://git-scm.com/book/en/v2)
[Git Cheatsheet](https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/)
[Git Cheatsheet (visual)](https://ndpsoftware.com/git-cheatsheet.html#loc=index;)
[Lista de comandos](https://git-scm.com/docs)

---

[Home](../README.md)

[^1]: https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
[^2]: https://www.conventionalcommits.org/en/v1.0.0/

[gitlab-flow]: ./images/gitlab-flow.png 'GitLab Flow'
