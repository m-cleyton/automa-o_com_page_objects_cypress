/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
/* import Base_PO from "../page-objects/Base_PO"; */
import Homepage_PO from "../page_objects/Homepage_PO";

/* const url = "http://www.webdriveruniversity.com/"; */

/* const basePage = new Base_PO(); */
const homePage = new Homepage_PO();

//Posso ter tambem Before ou After dentro de cada arquivo de steps, ou seja, para cada arquivo de steps posso ter um Before ou After especifico
Before(() => {
  cy.log("executa antes de cada cenário dentro desta ETAPA HOMEPAGE STEPS.");
});

Given("I navigate webdriveruniversity homepage", () => {
  /* cy.visit(url); */
  //Aqui nos chamamos o basePage que é uma instancia da classe Base_PO e chamamos a função navigate passando o path vazio
  /* basePage.navigate(""); */
  homePage.navigate("");
});

When("I click on the contact us button", () => {
  /* cy.get("#contact-us").invoke("removeAttr", "target").click(); */
  /* Aqui nós temos um methodo especifico criado por mim em commands.js */
  /*  cy.clickAndOpenLink_InSameTab("#contact-us"); */ //Formato antigo, antes de usa PO
  homePage.clickOn_ContactUs_Button();
});

When("I click on the login portal button", () => {
  /* cy.clickAndOpenLink_InSameTab("#login-portal"); */ //Formato antigo, antes de usa PO
  homePage.clickOn_LoginPortal_Button();
});
