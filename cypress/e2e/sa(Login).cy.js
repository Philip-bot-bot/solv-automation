

describe("Super admin", () => {
    beforeEach(() => {
         cy.visit("https://scf-admin.qa.solvgbsgh.com/#/sign-in")
      
    });


    context("login/logout activities", () => {



        it("Login with valid email and password but wrong role", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-2 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)

        })

        it("Login with valid email, invalid password but right role", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@34")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)



        })

        it("Login with invalid email, valid password but right role", () => {
            cy.loginsa("debasis.y@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)


        })

        it("Login with invalid email, invalid password but right role", () => {
            cy.loginsa("debasis.@solvezy.com", "Test134")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)


        })

        it.only("Login with valid credentials(email,password, and role)", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)


        })

        it.only("Logout from super admin portal", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.get('.mat-menu-trigger').click()
            cy.get('.mat-menu-content > :nth-child(5)').click()
            cy.wait(3000)


        })

      
    })

})