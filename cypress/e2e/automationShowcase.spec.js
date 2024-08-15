/// <reference types="cypress" />

import 'cypress-real-events/support';

describe('First Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://qa-practice.netlify.app/')
    })
     it.only('Forms Dropdown Check', () =>{
        const formsNames = ['Login', 'Register', 'Recover password']

       cy.get('#forms').then( forms => {
           cy.wrap(forms).click({force: true})
           cy.get('#homeSubmenu li').each((listItem, index ) => {

            const itemText = listItem.text().trim()

            if(itemText == formsNames[index]) {
                expect(itemText == formsNames[index]).to.be.true;
            } else {
                throw new Error('Zastavuji test. Chyba');
            }
          
            cy.get('#login').should('be.visible')
            
           
    })
    })
     })


     
     it('Login Unsuccessful', ()=>{
        cy.get('#forms').then(forms =>{
            cy.wrap(forms).click({force:true})
            cy.get('#login').click()
            cy.get('#email').type('ztrnka@email.cz')
            cy.get('#password').type('heslo123')
            cy.get('#submitLoginBtn').click()
            cy.get('[class="alert alert-danger"]').should('contain', "Bad credentials! Please try again! Make sure that you've registered.")
        })
       })


       it('Login Succesful', () => {
        cy.get('#forms').then(forms =>{
            cy.wrap(forms).click({force:true})
            cy.get('#login').click()
            cy.get('#email').type('admin@admin.com')
            cy.get('#password').type('admin123')
            cy.get('#submitLoginBtn').click()


       })
         cy.get('#prooood').find('h2.section-header').should('contain', 'SHOPPING CART')
         cy.get('#prooood').find('button[class="btn btn-primary btn-purchase"]').should('contain','PROCEED TO CHECKOUT')

    }) 


    it('Checkboxes', () => {


        cy.get('#buttons').click()
        cy.get('#checkboxes').click()
        cy.get('.form-check-input').then(checkbox => {
            cy.wrap(checkbox).eq(0).click().should('be.checked')
            cy.wrap(checkbox).eq(1).click().should('be.checked')
            cy.wrap(checkbox).eq(2).click().should('be.checked')

            cy.wrap(checkbox).eq(0).click().should('not.be.checked')
            cy.wrap(checkbox).eq(2).click().should('not.be.checked')
            cy.wrap(checkbox).eq(1).should('be.checked')
 
            cy.get('.form-group').contains('button','Reset').click()

            cy.wrap(checkbox).each(() => {

                cy.wrap(checkbox).should('not.be.checked')
            })

        })
       

       
    })

    it('Radio buttons test', () => {

        cy.get('#buttons').click()
        cy.get('#radio-buttons').click()
       


        const radioButtonsId = ['radio-button1', 'radio-button2', 'radio-button3'];
   
              radioButtonsId.forEach((id, index, array) => {

                 cy.get(`#${id}`).check().should('be.checked')

                 array.forEach((otherID) => {
                    if(otherID !== id){
                        cy.get(`#${otherID}`).should('not.be.checked')
                    }
                 })
              })    
      
    })

    it('Dropdown menu', () => {
                
        cy.get('#dropdowns').click()
        cy.get('#dropdown-menu').select('Czech Republic')
        cy.get('#dropdown-menu').should('have.value','Czech Republic')
        cy.get('#dropdown-menu').then(dropdown => {
            cy.wrap(dropdown).find('option').each((element) => {
       
                const country = element.val()
               cy.wrap(dropdown).select(country)
               cy.wrap(dropdown).should('have.value', country)

            })
        })

    })


    it('Dropown 2', () => {

        cy.get('#dropdowns').click()
        cy.get('#multi-level-dropdown-btn').click()
        cy.get('.dropdown-submenu').first().realHover().find('.dropdown-submenu').first().realHover().should('be.visible')

    })



    it('Alerts', () => {

        cy.get('#alerts').click() 
        cy.on('window:confirm',() => false)
 
  

    it('Scrolling down', () => {


        cy.get('#actions').click()
        cy.get('#scrolling').click()
        cy.scrollTo('bottom')
        cy.get('#the-end').should('be.visible')


    })





    })
})
