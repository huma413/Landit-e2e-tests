

const LANDIT_LOGIN_URL = 'https://app.accept.dev.landit.com/login'
const EMAIL_FIELD = '#email-input'
const PASSWORD_FIELD = '#password-input'
const CORRECT_EMAIL = 'huma.tabassum@arbisoft.com'
const INCORRECT_EMAIL = 'huma.tabassum@arbisofet.com'
const CORRECT_PASSWORD = 'Security@458'
const INCORRECT_PASSWORD = 'security@4581'
const LOGIN_BUTTON = '.MuiGrid-container > .Button-root'
const WHAT_COMING_UP_CARD = '.MuiBox-root.css-1xzybrk'
const WHAT_COMING_UP_CARD_CLOSE = '.MuiBox-root.css-1l0hqbw'
const HEADER_TEXT = '.MuiBox-root.css-lmon2n'
const DROP_DOWN_CLICK = '.BaseIcon-root.MuiBox-root.css-1imca4n'
const SIGNOUT_CLICK = '.MuiBox-root.css-8yc2i6'
const ERROR_MESSAGE = '.Text-root > .css-0'
const CLICK_COACHING = '.Text-root.Text-body2.MuiBox-root.MuiBox-root.css-17lj8al'
const BOOK_COACH_CLICK = '.Button-root.Button-small.Button-secondary.Button-fullWidth.MuiBox-root.css-1wrnwe1'
let WAIT_UNTIL_PAGE_LOADS = 10000


describe('First test', () => {
 
  it.only('I want to login to my app with valid credentials', () => 
  { 
    login(CORRECT_EMAIL,CORRECT_PASSWORD)
    //cy.wait(WAIT_UNTIL_PAGE_LOADS)
    /*cy.server(); // Start the Cypress server
    cy.route({
      method: 'GET',
      url: 'https://accept.dev.landit.com/api/v2/user/playbook',
      status: 200, // Example status code (can be any valid HTTP status code)
    }).as('stubbedPlaybookRoute');
    // Trigger the request to the stubbed endpoint
    cy.visit('https://app.accept.dev.landit.com/');
    // Wait for the request to be stubbed
    cy.wait('@stubbedPlaybookRoute');*/

    /*cy.intercept('GET', 'https://accept.dev.landit.com/api/v2/user/playbook', (req) => {
      req.reply({
        statusCode: 200, // Example status code (can be any valid HTTP status code)
      });
    }).as('stubbedPlaybookRoute');
    // Trigger the request to the stubbed endpoint
    cy.visit('https://app.accept.dev.landit.com/');
    // Wait for the request to be stubbed
    cy.wait('@stubbedPlaybookRoute');*/

    //cy.wait(7000)
    //cy.reload()
    //cy.get('.MuiBox-root.css-1tqrc3r' , {timeout: 15000}).should('be.visible');
    //cy.get((WHAT_COMING_UP_CARD),{ timeout: 10000 });
    cy.get(WHAT_COMING_UP_CARD).eq(0).click();
    //cy.wait(4000)
    cy.get(WHAT_COMING_UP_CARD_CLOSE).click();
    //assertions on Header 
    cy.get(HEADER_TEXT).should('be.visible')
     cy.get(HEADER_TEXT).should('have.text','Hello Again, Huma!')
      cy.get(HEADER_TEXT).should('contain','Hello Again, Huma!')
    logout()
    })
  it ('I want to test correct email and incorrect password scenario for login',() =>
  {
    login(CORRECT_EMAIL,INCORRECT_PASSWORD)
    cy.get(ERROR_MESSAGE)
    .should('be.visible')
    .invoke('text')
    .then((text2) => {
      cy.log(text2)
    })
  })
  it('I want to test correct password and incorrect email scenario for login',() =>
  {
    login(INCORRECT_EMAIL,CORRECT_PASSWORD)
    cy.get(ERROR_MESSAGE)
    .should('be.visible')
    .invoke('text')
    .then((text2) => {
      cy.log(text2)
  })
})
  it('I want to test incorrect password and incorrect email scenario for login',() =>
  {
    login(INCORRECT_EMAIL,INCORRECT_PASSWORD)
    cy.get(ERROR_MESSAGE)
    .should('be.visible')
    .invoke('text')
    .then((text2) => {
      cy.log(text2)
    })
  })
  it ('I want to test coach booking flow', () =>
  {
    login(CORRECT_EMAIL,CORRECT_PASSWORD)
    cy.get(CLICK_COACHING).eq(6).click()
    cy.get(BOOK_COACH_CLICK).eq(0).click()
    
    })
  
  function login(USERNAME,PASSWORD)
  {
    cy.visit(LANDIT_LOGIN_URL);
    cy.url().should('include', 'dev.landit.com/')
    cy.url().should('eq',LANDIT_LOGIN_URL)
    cy.get(EMAIL_FIELD).type(USERNAME);
    cy.get(PASSWORD_FIELD).type(PASSWORD);
    cy.get(LOGIN_BUTTON).click();
  }
  
 /* Cypress.Commands.add("login", (USERNAME, PASSWORD) => {
    cy.visit(LANDIT_LOGIN_URL);
    cy.url().should('include', 'dev.landit.com/')
    cy.url().should('eq',LANDIT_LOGIN_URL)
    cy.get(EMAIL_FIELD).type(USERNAME);
    cy.get(PASSWORD_FIELD).type(PASSWORD);
    cy.get(LOGIN_BUTTON).click();
});*/
function logout()
{
  cy.visit(LANDIT_LOGIN_URL);
  cy.get(DROP_DOWN_CLICK).click()
  cy.get (SIGNOUT_CLICK).eq(2).click()
}
/*Cypress.Commands.add("logout", () => {
  cy.visit(LANDIT_LOGIN_URL);
  cy.get(DROP_DOWN_CLICK).click()
  cy.get (SIGNOUT_CLICK).eq(2).click()
});*/
}) 
