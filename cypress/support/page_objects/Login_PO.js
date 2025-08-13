/// <reference types = "cypress" />

import Base_PO from "./Base_PO";

class Login_Po extends Base_PO {
  navigateToLoginPage() {
    super.navigate("Login-Portal/index.html");
  }
  type_Username(userName) {
    cy.get("#text").type(userName);
  }
  type_Password(password) {
    cy.get("#password").type(password);
  }
  clickOn_Login_Button() {
    cy.get("#login-button").click();
  }
}

export default Login_Po;
