/// <reference types="cypress" />

import 'cypress-real-events/support';



describe('Practice test suite', () => {

    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com/')

    })


    it('tooltip test', () => {
 
           cy.contains('a', 'Tooltips').click()
           cy.contains('button', 'Tooltip on top').click() 
           cy.get('.tooltip-inner').should('be.visible')





    })


    it.only('dynamic loading',() => {
         

         cy.contains('a', 'Dynamic Loading').click()
         cy.contains('a', 'Example 1: Element on page that is hidden').click()
         cy.contains('button', 'Start').click()
         cy.get('#loading').should('be.visible')
         cy.get('img[src="/img/ajax-loader.gif"]').should('be.visible')
         





    })


    it.only('', () => {
        
    })





})