//PADRÃO PAGE PBJECT (POM)

class loginPage {

    visitar(){
        cy.visit('qa_bank.html')
    }

    realizarLogin(email, password){ //função login com dois parâmetros, email e senha 
       //cy.get('[name=email]').type("admin@qabank.com") -- Jeito frágil 
       cy.get('[data-cy="input-login-email"]').type(email) // Jeito Resiliente

       //cy.get('[name=password]').type("admin123") -- Jeito frágil
       cy.get('[data-cy="input-login-password"]').type(password) // Jeito Resiliente
    
       //cy.get('[name=submit_button]').click() -- Jeito frágil
       cy.get('[data-cy="btn-login"]').click() // Jeito Resiliente
    }

    validarNomeUsuarioLogado(nome){
        cy.get('[name="user_name_text"]').should('have.text', nome)
    }
}

export default new loginPage();