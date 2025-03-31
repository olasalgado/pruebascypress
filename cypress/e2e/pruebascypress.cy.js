describe('pruebas de login', () => {
  it('login correcto con usuario valid', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').should('contain','You logged into a secure area!')
  })

  it('login no correcto con usuario no valid', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('maria')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').should('contain','Your username is invalid!')
  })


  it('login no correcto con usuario valido y contraseña no valida',() => {
    cy.visit('https://the-internet.herokuapp.com/')
  
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('mi perro es curro')
    cy.get('.fa').click()
    cy.get('#flash').should('contain','Your password is invalid!')
    
   
    
 
  })
 

})
   


