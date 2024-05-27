
import Login from "../pageObjects/login"

const LOGIN_PAGE = Cypress.env('login_url');

describe('POM', () => {

    const login = new Login ();
 
    it('I want to login to my app with valid credentials', () => 
    { 
      
        cy.visit(LOGIN_PAGE)
        login.setUserName("huma.tabassum@arbisoft.com")
        login.setPassword("Security@458")
        login.clickLogin()
}
 )
    it('I want to test incorrect password and incorrect email scenario for login',() =>
        {
          
            cy.visit(LOGIN_PAGE)
             login.setUserName("huma.tabassum@arbisoftt.com")
             login.setPassword("Security@458")
             login.clickLogin();
             login.verifyErrorMessage();
         })
})