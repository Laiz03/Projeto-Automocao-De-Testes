import cadastroPage from "../support/pageObjects/cadastroPage"
import loginPage from "../support/pageObjects/loginPage"

describe('Cadastro', () => {
  it('Cadastro de novo usuário com sucesso', () => {

    //arrange
    loginPage.visitar()
    loginPage.clicarEmCriarConta()

  
    //act
    /*cadastroPage.clicarEmCadastrar()*/

    cadastroPage.realizarCadastro("Usuário Teste Novo", "usuario.novo@qabank.com", "senha123", "Feminino")


    //assert
    cadastroPage.validarMensagemDeContaCriadaComSucesso()

  })
})