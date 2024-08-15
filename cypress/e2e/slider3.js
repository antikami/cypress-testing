describe('third slider', () => {
    beforeEach(() =>{
            
        cy.visit('https://www.way2automation.com/lifetime-membership-club/')

})



it('looking for a specific slide',() =>{
      
    cy.contains('section','30+ Courses video library FREE ACCESS')
    .should('be.visible')
    .scrollIntoView()
    .next()


    function nextSlide(){
    cy.contains('.pp-info-box-title', ' Webservices API Automation using Python and DJANGO Framework ').then((el) => {

        if(Cypress.dom.isVisible(el)) {
            
            cy.contains('h4',' Webservices API Automation using Python and DJANGO Framework ').parentsUntil('.pp-info-box-content-wrap').find('a').click()
            cy.wait(4000)

            cy.origin('https://www.selenium-tutorial.com/p/webservices-api-automation-testing-using-postman-python-and-django-framework', () => {
                cy.get('.course-title').contains(' Webservices API Automation Testing using POSTMAN, PYTHON and DJANGO Framework ')
                
            })
            
            
        } else {
           cy.wait(1000)
           cy.get('.swiper-button-next').click()
             .then(nextSlide)
        }
    })
 }

    nextSlide();

})

})