import loginPage from "../support/pageObjects/loginPage"

describe('Login', () => {
  it('Login com sucesso - Usuario Admin', () => {
    //ARRANGE
    loginPage.visitar()

    //cy.visit('qa_bank.html') antes do POM


    //ACT
    loginPage.realizarLogin("admin@qabank.com", "admin123")

    //cy.get('[data-cy="input-login-email"]').type("admin@qabank.com")  antes do POM
    //cy.get('[data-cy="input-login-password"]').type("admin123")   antes do POM
    //cy.get('[data-cy="btn-login"]').click()   antes do POM

    //ASSERT
    loginPage.validarNomeUsuarioLogado("Admin do Sistema")

    //cy.get('[name="user_name_text"]').should('have.text', "Admin do Sistema") antes do POM
  })
})

//-----------------------------------------------------------------------------------------

describe('Login', () => {
   it('Falha no Login - Senha Incorreta', () => {
    //ARRANGE
    loginPage.visitar()

    //ACT
    loginPage.realizarLogin("admin@qabank.com","senhaErrada123")

    //ASSERT
    loginPage.validarMsgDeCredenciaisInvalidas()

   })
})