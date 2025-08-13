@contactus @regression
Feature: Webdriveruniversity - Contact Us Page
	As a user
	I want to submit a contact us form
	So that I can be contacted by a member of the team

	# //Já que em todo cenário sempre iremos acessar a página de contato, podemos criar um background para isso,
	# //assim não precisamos repetir o código em todos os cenários
	# //>>>>>O Background é executado antes de cada cenário<<<<
	Background: Acessando a página de contato
		Given I navigate webdriveruniversity homepage
		When I click on the contact us button

	# //Cenário Positivo sem o uso de expressoes regulares
	Scenario: Valid Contact Us form submission
		And I type a valid first name
		And I type a valid last name
		And I type a valid email address
		And I type comments
		And I click on the submit button
		Then I should be presented with a successful contact submission message

	# //Cenário negativo sem o uso de expressoes regulares
	Scenario: Invalid Contact Us form submission
		And I type a valid first name
		And I type a valid last name
		And I type comments
		And I click on the submit button
		Then I should be presented with a unsuccessful contact submission message

	# //Cenário Positivo Com Uso de expressoes regulares
	Scenario: Valid Contact Us form submission - Using specific data
		And I type a valid first name "Cleyton"
		And I type a valid last name "Silva"
		And I type comments "Olá Cleyton Silva" and number 1900 within the comment input field
		And I click on the submit button
		Then I should be presented with a unsuccessful contact submission message






	@smoke
	#// Esboço de Cenário assim poderemos criar multiplos cenários de teste seja positivo ou negativo
	#// Com o uso de expressoes regulares PODEMOS CRIAR VÁRIOS CENÁRIOS DE TESTE SEM A NECESSIDADE DE REPETIR O CÓDIGO
	Scenario Outline: Validate Contact Us Page
		#ao usar {word} não precisamos usar aspas, neste caso, firstName é uma {word}, já o lastName esta como string, por isso usa aspas
		And I type a first name <firstName> and a last name '<lastName>'
		And I type a '<emailAddress>' and a comment '<comment>'
		And I click on the submit button
		Then I should be presented with header text '<message>'

		Examples:
			| fistName | lastName | emailAddress   | comment             | message                      |
			| Cleyton  | Silva    | cleyton@pt.com | Ola Cleyton         | Thank You for your Message!  |
			| Juliana  | Melo     | juh_123@pt.com | Teste juh           | Thank You for your Message!  |
			| Jose     | Costa    | juh_123        | Teste pra invalidar | Error: Invalid email address |
