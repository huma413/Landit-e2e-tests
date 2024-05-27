class Login
{

    EMAIL_FIELD = '#email-input'
    PASSWORD_FIELD = '#password-input'
    LOGIN_BUTTON = '.MuiGrid-container > .Button-root'
    ERROR_MESSAGE = '.Text-root > .css-0'

    setUserName(userName)

    {
        cy.get(this.EMAIL_FIELD).type(userName)
    }
    setPassword(password)
    {
        cy.get(this.PASSWORD_FIELD).type(password)
    }
    clickLogin()
    {
        cy.get(this.LOGIN_BUTTON).click()
    }
    verifyErrorMessage()
    {
        cy.get(this.ERROR_MESSAGE)
        .should('be.visible')
        .invoke('text')
        .then((text2) => {
          cy.log(text2)
        })
    }
}
export default Login;

