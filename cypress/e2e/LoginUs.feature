@login @regression
#O uso de @loginUs é para que possamos executar apenas os cenários de login e não todos os cenários
#Assim, preciso apenas digitar o CMD npx cypress run -e TAGS="@loginUs" --headed
Feature: Webdriveruniversity - Login Page
	#Podemos criar uma pre condicao tambem
	Background: Pre Condição
		#Esta condição esta feita dentro de BASE_STEPS.JS
		When Eu espero por 0 segundos
	#// Esboço de Cenário assim poderemos criar multiplos cenários de teste seja positivo ou negativo
	#// Com o uso de expressoes regulares PODEMOS CRIAR VÁRIOS CENÁRIOS DE TESTE SEM A NECESSIDADE DE REPETIR O CÓDIGO

	Scenario Outline: Validate Login Page
		#ao usar {word} não precisamos usar aspas, neste caso, firstName é uma {word}, já o lastName esta como string, por isso usa aspas


		#Given I navigate webdriveruniversity principal
		#When Eu clico no botão de login us
		Given  Eu navego para a página webdriveruniversity loginPage
		And Eu preencho o formulário de login '<userName>' e com a password '<password>'
		And Eu clico no botão de logar
		Then Eu devo ver um alerta com a mensagem '<message>'

		Examples:
			| userName  | password     | message              |
			| webdriver | webdriver123 | validation succeeded |
			| web       | webdriver123 | validation failed    |
			| webDrive  | webdriver12  | validation failed    |
