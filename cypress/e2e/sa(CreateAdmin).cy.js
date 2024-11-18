import { faker } from "@faker-js/faker"

describe("Super admin", () => {
    beforeEach(() => {
        cy.visit("https://scf-admin.qa.solvgbsgh.com/#/sign-in")
     
   });

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName().replace(/[^a-zA-Z]/g, '');
    const randomEmail = `${firstName.replace(/\s+/g, '')}@solv.com.gh`;
    const randomNumbers = Array.from({ length: 9 }, () => faker.number.int({ min: 0, max: 9 })).join('');



    context("Maker Admin Creation", () => {

        it("Attempt maker creation leaving mandatory fields unfilled", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(2) > .mat-button-wrapper').click()
            cy.wait(3000)
            cy.get('#mat-input-5').type(firstName)
            cy.get('#mat-input-6').type(lastName)
            cy.get('#mat-input-8').type(randomNumbers)
            cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click()
            cy.contains("Create User").should("be.disabled")
            cy.get('#mat-input-7').type(randomEmail)
            cy.get('#mat-input-8').clear().type("3455")
            cy.contains("Create User").should("be.disabled")
            cy.get('#mat-input-7').clear().type("test@gmail.com")
            cy.get('#mat-input-8').clear().type(randomNumbers)
            cy.contains("Create User").should("be.disabled")
            cy.wait(3000)
        })

        it("Cancel an attempted maker admin creation", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(2) > .mat-button-wrapper').click()
            cy.wait(3000)
            cy.get('#mat-input-5').type(firstName)
            cy.get('#mat-input-6').type(lastName)
            cy.get('#mat-input-7').type(randomEmail)
            cy.get('#mat-input-8').type(randomNumbers)
            cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click()
            cy.contains("Cancel").click()
            cy.wait(2000)
            cy.get('.delete_button').click()
            cy.wait(2000)
        })

        //Input new details this test case
        it("Successfully create a maker admin", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(2) > .mat-button-wrapper').click()
            cy.wait(3000)
            cy.get('#mat-input-5').type("Riq")
            cy.get('#mat-input-6').type("Weston")
            cy.get('#mat-input-7').type("riqweston@solv.com.gh")
            cy.get('#mat-input-8').type("312567898")
            cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click()
            cy.contains("Create User").click()
        })


    })

    it("Attempt adding an existing maker admin", () => {
        cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
        cy.wait(2000)
        cy.get('.mat-focus-indicator').click()
        cy.wait(3000)
        cy.get('.pt-25 > :nth-child(2) > .mat-button-wrapper').click()
        cy.wait(3000)
        cy.get('#mat-input-5').type("Alex")
        cy.get('#mat-input-6').type("Thompson")
        cy.get('#mat-input-7').type("alex.thompson@solv.com.gh")
        cy.get('#mat-input-8').type("923234521")
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click()
        cy.contains("Create User").click()
        cy.wait(3000)
    })



})

context("Checker Admin Creation", () => {

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName().replace(/[^a-zA-Z]/g, '');
    const randomEmail = `${firstName.replace(/\s+/g, '')}@solv.com.gh`;
    const randomNumbers = Array.from({ length: 9 }, () => faker.number.int({ min: 0, max: 9 })).join('');

    it("Attempt checker creation leaving mandatory fields unfilled", () => {
        cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
        cy.wait(2000)
        cy.get('.mat-focus-indicator').click()
        cy.wait(3000)
        cy.get('.pt-25 > :nth-child(2) > .mat-button-wrapper').click()
        cy.wait(3000)
        cy.get('#mat-input-5').type(firstName)
        cy.get('#mat-input-6').type(lastName)
        cy.get('#mat-input-8').type(randomNumbers)
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content').click()
        cy.contains("Create User").should("be.disabled")
        cy.get('#mat-input-7').type(randomEmail)
        cy.get('#mat-input-8').clear().type("3455")
        cy.contains("Create User").should("be.disabled")
        cy.get('#mat-input-7').clear().type("test@gmail.com")
        cy.get('#mat-input-8').clear().type(randomNumbers)
        cy.contains("Create User").should("be.disabled")

    })

    it("Cancel an attempted checker admin creation", () => {
        cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
        cy.wait(2000)
        cy.get('.mat-focus-indicator').click()
        cy.wait(3000)
        cy.get('.pt-25 > :nth-child(2) > .mat-button-wrapper').click()
        cy.wait(3000)
        cy.get('#mat-input-5').type(firstName)
        cy.get('#mat-input-6').type(lastName)
        cy.get('#mat-input-7').type(randomEmail)
        cy.get('#mat-input-8').type(randomNumbers)
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content').click()
        cy.contains("Cancel").click()
        cy.wait(2000)
        cy.get('.delete_button').click()
        cy.wait(2000)
    })

    it("Attempt adding an existing checker admin", () => {
        cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
        cy.wait(2000)
        cy.get('.mat-focus-indicator').click()
        cy.wait(3000)
        cy.get('.pt-25 > :nth-child(2) > .mat-button-wrapper').click()
        cy.wait(3000)
        cy.get('#mat-input-5').type("Beulah")
        cy.get('#mat-input-6').type("Kohler")
        cy.get('#mat-input-7').type("beulah@solv.com.gh")
        cy.get('#mat-input-8').type("923234521")
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content').click()
        cy.contains("Create User").click()
    })


    //Input new details this test case
    it("Successfully create a checker admin", () => {
        cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
        cy.wait(2000)
        cy.get('.mat-focus-indicator').click()
        cy.wait(3000)
        cy.get('.pt-25 > :nth-child(2) > .mat-button-wrapper').click()
        cy.wait(3000)
        cy.get('#mat-input-5').type("Deme")
        cy.get('#mat-input-6').type("Kohler")
        cy.get('#mat-input-7').type("deme.kohler@solv.com.gh")
        cy.get('#mat-input-8').type("123567654")
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content').click()
        cy.contains("Create User").click()
    })

    //edit data
    it("Delete a maker admin", () => {
        cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
        cy.wait(2000)
        cy.get('.mat-focus-indicator').click()
        cy.wait(3000)
        cy.get('#mat-input-2').type("Weston{enter}")
        cy.wait(3000)
        cy.get('[style="display: flex;"] > :nth-child(2) > .mat-focus-indicator').click({ force: true })
        cy.get('.red-btn').click()
    })

     //edit data
    it.only("Delete a checker admin", () => {
        cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
        cy.wait(2000)
        cy.get('.mat-focus-indicator').click()
        cy.wait(3000)
        cy.get('#mat-tab-label-0-1').click()
        cy.get('#mat-input-3').type("Kohler{enter}")
        cy.wait(3000)
        cy.get('[style="display: flex;"] > :nth-child(2) > .mat-focus-indicator').click({ force: true })
        cy.get('.red-btn').click()
    })

})






