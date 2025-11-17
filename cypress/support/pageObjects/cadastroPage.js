class cadastroPage {

    visitar(){
        cy.visit('qa_bank.html')
    }


    //1. Seletores Getters

    get cadastrarButton() {
        return cy.get('[data-cy="btn-toggle-register"]')
    }

    get nameInput() {
        return cy.get('[data-cy="input-register-name"]')
    }

    get emailInput() {
        return cy.get('[data-cy="input-register-email"]')
    }

    get passwordInput() {
        return cy.get('[data-cy="input-register-password"]')
    }

    get selectInput() {
        return cy.get('[data-cy="selecte-register-sexo"]')
    }

    get salvarCadastro() {
        return cy.get('[data-cy="btn-register-submit"]')
    }

    /*get usuarioCadastradoTxt () {
        return cy.get('[name="user_name_text"]')
    }*/

//---------------------------------------------------------------------------------------

    // 2. Metodos de Ação

    clicarEmCadastrar () {
        this.cadastrarButton.click()
    }

    preencherNome (name) {
        this.nameInput.type(name)
    }

    preencherEmail (email) {
        this.emailInput.type(email)
    }

    preencherSenha (password) {
        this.passwordInput.type(password)
    }

    selecionarSelect (value) {
        this.selecionarSelect.select(value)
    }

    salvarCadastroUsuario () {
        this.salvarCadastro.click()
    }


//---------------------------------------------------------------------------------------

    // 2. Metodos de Fluxo

    realizarCadastro(name, email, password, value) {
        this.preencherNome(name)
        this.preencherEmail(email)
        this.preencherSenha(password)
        this.selecionarSelect(value)
        this.salvarCadastro.click()
    }


}

export default new cadastroPage();