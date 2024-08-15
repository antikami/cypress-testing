/// <reference types="cypress" />

import 'cypress-real-events/support';



describe('table forms', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/')

        
    })
    it('tableforms', () => {


        const userDetails = {
            name : 'Pepa',
            surname : 'Zdepa',
            email : 'email@email.cz',
            age : '22',
            salary : '20000',
            jobPosition : 'HR'
        }
  

        cy.contains('Elements').click()
    
        cy.contains('.btn-light', 'Web Tables').click({force:true})
        cy.get('#addNewRecordButton').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('#firstName').type(userDetails.name)
        cy.get('#lastName').type(userDetails.surname)
        cy.get('#userEmail').type(userDetails.email)
        cy.get('#age').type(userDetails.age)
        cy.get('#salary').type(userDetails.salary)
        cy.get('#department').type(userDetails.jobPosition)
        cy.get('#submit').click()

        cy.get('.rt-tbody').within(() => {
            
            Object.values(userDetails).forEach(detail => {

                cy.contains('.rt-tr-group', detail).should('be.visible')
            })

         

        })

        cy.get('#searchBox').type(userDetails.name)
        cy.contains('.rt-tr-group', userDetails.name).should('be.visible')



        cy.get('span[title="Delete"]').click()
        cy.get('.rt-tr-group').should('not.contain', userDetails.name)


    })

})
