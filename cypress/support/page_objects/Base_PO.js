/// <reference types = "cypress" />

class Base_PO {
  navigate(path) {
    /* baseUrl = "http://www.webdriveruniversity.com/"; */
    //Aqui nos chamamos o cy.fixture para pegar o arquivo de configuração e depois chamamos o visit passando a url base
    // e o path que é passado por parametro para a função navigate
    //usado em Homepages_Steps.js
    cy.fixture("config").then((data) => {
      cy.visit(data.baseUrl + path);
    });
  }
  //Opção para pegar o titulo da página, só criei para testes e para mostrar que é possivel criar funções que podem ser usadas em varios lugares
  getPageTitle() {
    return cy.title();
  }
}
export default Base_PO;
