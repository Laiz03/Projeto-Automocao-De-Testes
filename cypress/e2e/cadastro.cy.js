import cadastroPage from "../support/pageObjects/cadastroPage"

describe('Cadastro', () => {
  it('Cadastro de novo usuário com sucesso', () => {

    //arrange
    cadastroPage.visitar()

  
    //act
    cadastroPage.clicarEmCadastrar()

    cadastroPage.realizarCadastro("Usuário Teste Novo", "usuario.novo@qabank.com", "senha123", "Feminino")


    //assert
    //loginPage.validarConta("Conta criada com sucesso!")
    

  })
})