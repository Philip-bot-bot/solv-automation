

describe("Super admin", () => {
    beforeEach(() => {
        cy.visit("https://scf-admin.qa.solvgbsgh.com/#/sign-in")
     
   });

    context("Functionalities", () => {
        it("Search for users in maker", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('#mat-input-2').type("asif")
            cy.get('.searchLogo').click()
            cy.wait(2000)
        })

        it("Search for users in checker", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click()
            cy.get('#mat-input-3').type("asif")
            cy.get('.searchLogo').click()
            cy.wait(2000)
        })

        it("Search for users in FI/Bank", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('#mat-tab-label-0-2 > .mat-tab-label-content').click()
            cy.get('#mat-input-4').type("Test")
            cy.get('.searchLogo').click()
            cy.wait(2000)
        })

    })

    context("Checking for fields", () => {

        it.only("Should be able to verify fields", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.mat-select-arrow-wrapper').click()
            cy.contains("10").click()
            cy.wait(2000)
            cy.contains("15").click()
            cy.wait(2000)
            cy.get('.mat-paginator-navigation-next').click()
            cy.wait(2000)
            cy.get('.mat-paginator-navigation-previous').click()
            cy.wait(2000)
            

        })

    })
})