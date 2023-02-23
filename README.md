# Bem-vindo ao projeto Star Wars Planets Search

Star Wars Planets Search é uma aplicação web em React.js que acessa a base de dados da API dos planetas de Star Wars, criando uma tabela com as informações e possibilitando a pesquisa pelo nome dos planetas, além de oferecer um avançado sistema de filtragem e ordenação dos dados, permitindo que o usuário refine a busca de acordo com suas preferências.
> Acesse o [deeploy da aplicação aqui](https://project-star-wars-planets-search.vercel.app/)

## Sumário
- [Star Wars Planets Search](#bem-vindo-ao-projeto-star-wars-planets-search)
- [Preview](#preview)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Notas](#notas)
  - [Git, GitHub e Histórico de Commits](#git-github-e-histórico-de-commits)
  - [Lint](#lint)

## Preview

### Visualização para mobile e mac
[![Preview](https://img.youtube.com/vi/qPUmVBXZTtc/0.jpg)](https://www.youtube.com/watch?v=qPUmVBXZTtc)

### Visualização para Linux
https://user-images.githubusercontent.com/98184355/221040144-20c1239f-157b-494e-a298-d3f870763ccd.mp4
  
## Contexto

A __aplicação Star Wars Planets Search__ é uma ferramenta de consulta que acessa a base de dados da API de planetas do universo Star Wars epermite ao usuário:
- Realizar pesquisas pelo campo "nome".
- Utilizar filtros para restringir os resultados de acordo com a coluna escolhida, o tipo de comparação e o valor de referência.
- Utilizar a ordenação para organizar os resultados de acordo com a coluna escolhida e o tipo de ordenação, ascendente ou descendente.
- Adicionar novas filtragens aos resultados encontrados.

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [React.js](https://reactjs.org/docs/getting-started.html) | Biblioteca para criar interfaces de usuário.
- [Styled Components](https://styled-components.com/) | Biblioteca para estilização do CSS.
- [API dos planetas de Star Wars](https://swapi.dev/api/planets) | API utilizada para obter informações sobre planetas do universo Star Wars.
- [Context API](https://pt-br.reactjs.org/docs/context.html) | API utilizada para gerenciamento de estado.

O React.js foi escolhido por ser uma das bibliotecas mais populares e amplamente utilizadas para criar interfaces de usuário. Além disso, o React.js é fácil de aprender e possui uma grande comunidade de desenvolvedores, o que torna mais fácil encontrar soluções para problemas comuns. O Styled Components foi escolhido porque permite que os desenvolvedores escrevam o CSS em formato de componente, o que torna o código mais legível e fácil de entender. A API dos planetas de Star Wars foi acessada para obter informações precisas e detalhadas sobre os planetas presentes no universo Star Wars. A Context API foi utilizada para gerenciar o estado global da aplicação, tornando mais fácil a comunicação entre diferentes componentes e permitindo uma melhor organização do código.

## Instalação e Execução
### Download do projeto
```
git clone git@github.com:imsamuelcovalero/Project-StarWars-Planets-Search.git
```
### Install dependencies
```
cd Project-StarWars-Planets-Search
npm install
```
### Run the application
```
cd Project-StarWars-Planets-Search
npm start
```

## Notas
### Git, GitHub e Histórico de Commits
Este projeto utilizou a [Especificação de Commits Convencionais](https://www.conventionalcommits.org/en/v1.0.0/), com alguns tipos da [convenção Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). Além disso, foi utilizado o pacote [conventional-commit-cli](https://www.npmjs.com/package/conventional-commit-cli) para ajudar a seguir a convenção de commits. É importante utilizar a convenção de commits em projetos para manter o histórico de commits organizado e facilitar a leitura e o entendimento do que foi desenvolvido.

### Lint
- O projeto foi desenvolvido seguindo os padrões de Clean Code especificados pelo [Lint da Trybe](https://github.com/betrybe/eslint-config-trybe).
