/// <reference types = "cypress" />
import {
  When,
  Then,
  Before,
  After,
} from "@badeball/cypress-cucumber-preprocessor";
// ISTO É UM HOOK, Ou seja ele executa antes de cada cenário, portanto, posso utilizar isto para limpar o local storage antes de cada cenário ou
// até mesmo para limpar o cache do navegador ou qualquer outra necessidade.
// Poderemos ter vários HOOCKs antes ou depois de cada cenário.
Before(() => {
  cy.log("executa antes de cada cenário/Test.");
  cy.clearLocalStorage();
});

Before(() => {
  cy.log("executa antes de cada cenário/Test1234.");
});

//Tambem é possivel termos uso de tags especificas para usarmos, ou seja, estas especificacoes BEFORE so serao aplicadas ao cenário que contem
// esta tag abaixo citada, abaixo um exemplo:
// para o uso de varias tags, basta usar OR ou AND e o nome da proxima tag.
Before({ tags: "@smoke" }, () => {
  cy.log("executa antes de cada cenário/Test com a tag @smoke.");
});

// ISTO É UM OUTRO HOOK, porem, este é executado depois de cada cenário, portanto, posso utilizar isto para limpar o local storage depois de cada cenário ou etc...
After(() => {
  cy.log("executa depois de cada cenário/Test.");
});

//comando para esperar por alguns segundos para fazer algo.
When("Eu espero por {int} segundos", (segundos) => {
  cy.wait(segundos * 1000);
});
