describe('second slider', () => {
    beforeEach(() =>{
            
        cy.visit('https://testautomationpractice.blogspot.com/')

    })



it('simple slider invoke',() =>{
      
    cy.get('#slider span').invoke('attr', 'style', 'left:80%')


    })

})