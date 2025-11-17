//PADRÃO PAGE PBJECT (POM)

class loginPage {

    visitar(){
        cy.visit('qa_bank.html')
    }

    //1. Seletores Getters

    get loginInput() {
        return cy.get('[data-cy="input-login-email"]')
    }

    get passwordInput() {
        return cy.get('[data-cy="input-login-password"]')
    }

    get entrarButton() {
        return cy.get('[data-cy="btn-login"]')
    }

    get usuarioLogadoTxt () {
        return cy.get('[name="user_name_text"]')
    }

    get credenciaisInvalidasTxt () {
        return cy.get('[data-cy="login-message"]')
    }

    //---------------------------------------------------------------------------------------

    // 2. Metodos de Ação

    preencherEmail(email) {
        this.loginInput.type(email)
    }
    /*realizarLogin(email, password){ //função login com dois parâmetros, email e senha 
       //cy.get('[name=email]').type("admin@qabank.com") -- Jeito frágil 
       cy.get('[data-cy="input-login-email"]').type(email) // Jeito Resiliente*/

    preencherSenha (password) {
        this.passwordInput.type(password)
    }
    /*cy.get('[name=password]').type("admin123") -- Jeito frágil
      cy.get('[data-cy="input-login-password"]').type(password) // Jeito Resiliente*/

    clicarEmEntrar () {
        this.entrarButton.click()
    }
    /*cy.get('[name=submit_button]').click() -- Jeito frágil
      cy.get('[data-cy="btn-login"]').click() // Jeito Resiliente*/

    //-----------------------------------------------------------------------------------------------------

    // 3. Metodos de Fluxo

    realizarLogin(email, password) {
        this.preencherEmail(email)
        this.preencherSenha(password)
        this.clicarEmEntrar()
    }

    validarNomeUsuarioLogado(nome){
        this.usuarioLogadoTxt.should('have.text', nome)
    }
    /*validarNomeUsuarioLogado(nome){
        cy.get('[name="user_name_text"]').should('have.text', nome)
    }*/

    validarMsgDeCredenciaisInvalidas(){
        this.credenciaisInvalidasTxt.should('have.text', 'Email ou senha inválidos.')
    }
   /*validarMsgDeCredenciaisInvalidas(){
        cy.get('[data-cy="login-message"]').should('have.text', 'Email ou senha inválidos.')
    }*/

}

export default new loginPage();