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

    get sexoSelect() {
        return cy.get('[data-cy="select-register-sexo"]')
    }

    get salvarCadastro() {
        return cy.get('[data-cy="btn-register-submit"]')
    }

    get contaCadastradaComSucessoMsg () {
        return cy.get('[data-cy="register-message"]')
    }

//---------------------------------------------------------------------------------------

    // 2. Metodos de Ação

    preencherNome (name) {
        this.nameInput.type(name)
    }

    preencherEmail (email) {
        this.emailInput.type(email)
    }

    preencherSenha (password) {
        this.passwordInput.type(password)
    }

    selecionarSexo (sexo) {
        this.sexoSelect.select(sexo)
    }

    salvarCadastroUsuario () {
        this.salvarCadastro.click()
    }

    validarMensagemDeContaCriadaComSucesso(){
        this.contaCadastradaComSucessoMsg.should('be.visible').and('contains.text', 'Conta criada com sucesso! Seu Número de Conta é:')
    }


//---------------------------------------------------------------------------------------

    // 2. Metodos de Fluxo

    realizarCadastro(name, email, password, sexo) {
        this.preencherNome(name)
        this.preencherEmail(email)
        this.preencherSenha(password)
        this.selecionarSexo(sexo)
        this.salvarCadastroUsuario()
    }


}

export default new cadastroPage()