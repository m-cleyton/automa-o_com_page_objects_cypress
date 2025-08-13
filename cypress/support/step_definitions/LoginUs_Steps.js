/* /// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://webdriveruniversity.com/";

Given("I navigate webdriveruniversity principal", () => {
  cy.visit(url);
});

When("Eu clico no botão de login us", () => {
  cy.get("#login-portal").invoke("removeAttr", "target").click();
});

When(
  "Eu preencho o formulário de login {string} e com a password {}",
  (user, password) => {
    cy.get("#text").type(user);
    cy.get("#password").type(password);
  }
);

//Como aqui eu tinha um alerta, eu tive que fazer um stub para capturar o alerta
//Depois eu verifico se o alerta foi chamado com a mensagem esperada
When("Eu clico no botão de logar", () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  cy.get("#login-button").click();
});

//Aqui eu verifico se o alerta foi chamado com a mensagem esperada
Then("Eu devo ver um alerta com a mensagem {string}", (expectedMessage) => {
  expect(stub).to.have.been.calledWith(expectedMessage);
});
 */

/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Login_Po from "../page_objects/Login_PO";

/* const url = "https://webdriveruniversity.com/";*/
const loginPage = new Login_Po();
let stub; // Variável global para armazenar o stub

/* Given("I navigate webdriveruniversity principal", () => {
  cy.visit(url);
}); */

/* When("Eu clico no botão de login us", () => {
  cy.get("#login-portal").invoke("removeAttr", "target").click();
}); */
Given("Eu navego para a página webdriveruniversity loginPage", () => {
  loginPage.navigateToLoginPage("");
});

When(
  "Eu preencho o formulário de login {string} e com a password {string}",
  (userName, password) => {
    /* cy.get("#text").type(user); MODO ANTIGO DE CHAMAR */
    /* cy.get("#password").type(password); MODO ANTIGO DE CHAMAR */
    loginPage.type_Username(userName); // MODO COM USO DE  PAGE OBJECT
    loginPage.type_Password(password); // MODO COM USO DE  PAGE OBJECT
  }
);

When("Eu clico no botão de logar", () => {
  cy.window().then((win) => {
    stub = cy.stub(win, "alert");
    cy.wrap(stub).as("alertStub"); // Salva o stub no alias
  });
  //Forma antiga de chamar sem o uso de PO ( PAGE OBJECT)
  /* cy.get("#login-button").click(); */
  loginPage.clickOn_Login_Button();
});

// Verificação do alerta
Then("Eu devo ver um alerta com a mensagem {string}", (expectedMessage) => {
  cy.get("@alertStub").should("have.been.calledWith", expectedMessage);
});
