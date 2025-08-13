/// <reference types = "cypress" />
import { When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import Contact_Us_PO from "../page_objects/Contact_Us_PO";

const contactus_Page = new Contact_Us_PO();

/* Before(() => {
  cy.log("executa antes de cada cenário dentro desta ETAPA CONTACT STEPS.");
}); */

When("I type a valid first name", () => {
  /* cy.get('[name="first_name"]').type("Joe"); */
  contactus_Page.type_FirstName("Joe");
});

When("I type a valid last name", () => {
  /* cy.get('[name="last_name"]').type("Silva"); */
  contactus_Page.type_LastName("Silva");
});

When("I type a valid email address", () => {
  /*  cy.get('[name="email"]').type("teste@tes.com"); */
  contactus_Page.type_EmailAddress("teste@tes.com");
});

When("I type comments", () => {
  /* cy.get('[name="message"]').type("This is a test message"); */
  contactus_Page.type_Comment("This is a test message");
});

When("I click on the submit button", () => {
  /* cy.get('[type="submit"]').click(); */
  contactus_Page.clickOn_SubmitButton();
});

Then(
  "I should be presented with a successful contact submission message",
  () => {
    /*  cy.get("h1").should("have.text", "Thank You for your Message!"); */
    contactus_Page.validate_Submission_Header("Thank You for your Message!");
  }
);

Then(
  "I should be presented with a unsuccessful contact submission message",
  () => {
    /* cy.get("body").contains("Error: Invalid email address"); */
    contactus_Page.validate_Submission_Header("Error: Invalid email address");
  }
);

When("I type a valid first name {string}", (firstName) => {
  /* cy.get('[name="first_name"]').type(firstName); */
  contactus_Page.type_FirstName(firstName);
});

When("I type a valid last name {string}", (lastName) => {
  /* cy.get('[name="last_name"]').type(lastName); */
  contactus_Page.type_LastName(lastName);
});

When("I type a valid email address {string}", (email) => {
  /* cy.get('[name="email"]').type(email); */
  contactus_Page.type_EmailAddress(email);
});

When(
  "I type comments {string} and number {int} within the comment input field",
  (word, number) => {
    /* cy.get('[name="message"]').type(word + number); */
    contactus_Page.type_Comment(word + "" + number);
  }
);

//Scenario Outline

When(
  "I type a first name {word} and a last name {string}",
  (firstName, lastName) => {
    /* cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName); */
    contactus_Page.type_FirstName(firstName);
    contactus_Page.type_LastName(lastName);
  }
);

When("I type a {string} and a comment {}", (email, comment) => {
  /* cy.get('[name="email"]').type(email);
  cy.get('textArea[name="message"]').type(comment); */
  contactus_Page.type_EmailAddress(email);
  contactus_Page.type_Comment(comment);
});

//Aqui nós estamos usando um xpath para encontrar o elemento h1 ou body e verificar se o texto é igual ao texto passado como parâmetro
//pois neste caso, a depender do cenário, o texto de erro ou sucesso estara no h1 ou no body
Then("I should be presented with header text {string}", (message) => {
  cy.xpath("//h1 | //body").contains(message);
  /* contactus_Page.validate_Submission_Header(message); */
});
