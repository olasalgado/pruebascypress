
describe('Agregar tareas', () => {

    it('Agregar una tarea a la lista', () => {

        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list').contains('Tarea 1')

    })

    it('Agregar una tarea a la lista y marcarla como completada', () => {

        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list').contains('Tarea 1')
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="todo-item-label"]').contains('Tarea 1')

    })


    it('Desmaracar la tarea completada', () => {

        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list').contains('Tarea 1')
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="todo-item-toggle"]').click()


    })



    it('Editar tarea', () => {

        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('[data-testid="todo-item-label"]').contains('Tarea 1')
        cy.get('[data-testid="todo-item-label"]').dblclick()
        cy.get('input').filter('[value="Tarea 1"]').clear().type('Tarea 2')      

})


    it('Editar tarea', () => {

    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('[data-testid="todo-item-label"]').contains('Tarea 1')
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('.view > .input-container > [data-testid="text-input"]').clear().type('Tarea 2{enter}')
    

})


it('Borrar tarea', () => {

    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list li').first().find('.destroy').click({ force: true })
    cy.get('.todo-list').should('not.contain', 'Tarea 1')
    
   
  
  
  })

    it('Agregar tareas a la lista completadas y no completadas', () => {

        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.new-todo').type('Tarea 2{enter}')
        cy.get('.new-todo').type('Tarea 3{enter}')
        cy.get('.new-todo').type('Tarea 4{enter}')
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
        cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').contains('Tarea 1')
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').contains('Tarea 3')
        cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').contains('Tarea 2')
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').contains('Tarea 4')
        cy.get('[data-testid="footer-navigation"] > :nth-child(1) > a').click()
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').contains('Tarea 1')
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').contains('Tarea 2')
        cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"]').contains('Tarea 3')
        cy.get(':nth-child(4) > .view > [data-testid="todo-item-label"]').contains('Tarea 4')




    })




})