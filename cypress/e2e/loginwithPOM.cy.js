
import Login from "../pages/login"
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
             login.setPassword("Security@4581")
             login.clickLogin();
             login.verifyErrorMessage();
             }
         )

    it('I want to test correct email and incorrect password scenario for login',() =>
        
        {
            cy.visit(LOGIN_PAGE)
            login.setUserName("huma.tabassum@arbisoft.com")
            login.setPassword("Security@4581")
            login.clickLogin();
            login.verifyErrorMessage();
        }
    )
    it.only('I want to test correct password and incorrect email scenario for login',() =>
        
        {
            cy.visit(LOGIN_PAGE)
            login.setUserName("huma.tabassum@arbisoftt.com")
            login.setPassword("Security@4581")
            login.clickLogin();
            login.a
            .should('be.visible')
            .invoke('text')
            .then((text2) => {
                cy.log(text2)
            })
            
        }
    )
}
)