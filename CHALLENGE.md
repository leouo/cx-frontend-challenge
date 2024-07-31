# Sobre o Teste
Primeiramente, gostaria de agradecer pelo seu tempo na avaliação do meu teste. Foi bastante divertido participar deste desafio. Qualquer dúvida, não hesite em me contatar.

## Executando o Teste
Para executar o teste, na branch `cx-challenge-v2`, basta instalar as dependências no diretório `\app`:
```
npm install
```
E então executar o projeto:
```
npm run dev
```

### Executando Testes
Escrevi alguns testes para validar as principais funcionalidades.

__Para executar os Testes E2E__
```
npm run cypress:open
```
Para executar os Testes Unitátios:
```
npm run test
```

## Observações
- NextJS e Typescript não são tecnologias que tenho contato na minha experiência profissional atual, desenvolvi o desafio muito baseado na minha experiência de estudos e visitando a documentação das mesmas nos últimos 3 dias.
- A princípio eu havia desenvolvido o desafio focado em SSR, estava funcionando assim com a Context API. Após migrar para Redux não tive tempo suficiente para manter o SSR. Para conferir o comportamento SSR basta realizar `git checkout` para o commit anterior a migração.
- Com a funcionalidade de Filtro tomei a liberdade de renderizar todos os Filtros para testar o quão flexível ficou o código.