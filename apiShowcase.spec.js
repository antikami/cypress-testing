/// <reference types="cypress" />

import 'cypress-real-events/support';


describe('API test suite', () => {
    const baseUrl = 'https://petstore.swagger.io/v2';
    const userName = 'Erudes';
    it.only('first test', () => {

       /* const userInfo =  {
            "id": 1,
            "username": "Erudes",
            "firstName": "Zdenek",
            "lastName": "Trnka",
            "email": "email@email.cz",
            "password": "eslo",
            "phone": "123455",
            "userStatus": 1
          } 
         */

        cy.request({
            method: 'POST',
            url:  `${baseUrl}/user/createWithList`,
            header: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:[
                {
                    "id": 1,
                    "username": "Erudes",
                    "firstName": "Zdenek",
                    "lastName": "Trnka",
                    "email": "email@email.cz",
                    "password": "eslo",
                    "phone": "123455",
                    "userStatus": 1
                  }

            ],
        }).then((response) => {
                expect(response.status).to.eq(200);
              
            


            })
          cy.wait(2000)

            cy.request({
                method: 'GET',
                url: `https://petstore.swagger.io/v2/user/${userName}`,
                headers: {
                    accept: 'application/json',
                },
            }).then((responseUser) => {
                expect(responseUser.status).to.equal(200)
                expect(responseUser.body).to.have.property('id', 1)
                expect(responseUser.body).to.have.property('email', 'email@email.cz')
                expect(responseUser.body).to.have.property('password', 'eslo')


            })

              //user login

          
              cy.request({
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/user/login?username=Erudes&password=eslo',
                headers: {
                    accept: 'application/json', 
                },
            }).then((userLogin) =>{
                expect(userLogin.status).to.equal(200)


            })


            cy.request({
                method:'DELETE',
                url:'https://petstore.swagger.io/v2/user/Erudes',
                headers : {
                    accept:'application/json'
                },
            }).then((deleteUser) => {

                expect(deleteUser.status).to.equal(200)
            })


            cy.request({
                method:'GET',
                url:'https://petstore.swagger.io/v2/user/Erudes',
                failOnStatusCode: false,
                headers: {
                    accept:'application/json'
                },
            }).then((getUser) => {

                expect(getUser.status).to.equal(404)
            })

            








    })






it.only('Login API token', () =>{

    userLogin = {
    
    }



})







})