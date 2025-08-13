/// <reference types = "cypress" />
import Base_PO from "./Base_PO";
//Aqui nos criamos a classe Contact_Us_PO que herda a classe Base_PO

class Contact_Us_PO extends Base_PO {
  //Aqui nos criamos a função que vai preencher o formulario de contato
  //Aqui nos passamos os parametros que são os valores que vamos preencher nos campos do formulario
  //E os seletores que são os valores que vamos usar para localizar os elementos na tela
  //E o texto que vamos usar para verificar se o formulario foi enviado com sucesso

  //Aqui nos criamos um objeto que tem os seletores dos elementos que vamos usar, é algo opcional para organizar mais o codigo.
  elements = {
    comment_TextField: () => cy.get('textarea[name="message"]'),
    email_TextField: () => cy.get('input[name="email"]'),
    firstName_TextField: () => cy.get('input[name="first_name"]'),
    lastName_TextField: () => cy.get('input[name="last_name"]'),
    submit_Button: () => cy.get('input[type="submit"]'),
    submission_Header_Text: () => cy.xpath("//h1 | //body"),
  };

  navigateTo_ContactUsPage() {
    super.navigate("/Contact-Us/contactus.html");
  }
  type_FirstName(firstName) {
    cy.get("[name='first_name']").type(firstName);
  }
  type_LastName(lastName) {
    cy.get("[name='last_name']").type(lastName);
  }
  type_EmailAddress(email) {
    cy.get("[name='email']").type(email);
  }
  type_Comment(comment) {
    //Esta e uma forma de usarmos os dados mais organizados, eu criei um objeto que tem os seletores dos elementos e aqui so usamos o
    //  this.elements.comment_TextField para acessar o elemento
    this.elements.comment_TextField().type(comment);
  }
  clickOn_SubmitButton() {
    //Aqui vamos clicar no button de submit e estamos usando tambem o this.elements.submit_Button para acessar o elemento criado la em cima por mim.
    this.elements.submit_Button().click();
  }

  validate_Submission_Header(expectedText) {
    this.elements.submission_Header_Text().contains(expectedText); //Validando se contem o texto esperado no elemento , as duas fazem a mesma coisa
    /* this.elements
      .submission_Header_Text()
      .invoke("text")
      .should("include", expectedText); */
  }
}
export default Contact_Us_PO;
