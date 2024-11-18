import { faker } from "@faker-js/faker";

describe("Maker admin portal", () => {
    beforeEach(() => {
        cy.visit("https://scf-admin.qa.solvgbsgh.com/#/sign-in")

    });


    const randomNumbers = Array.from({ length: 9 }, () => faker.number.int({ min: 1, max: 9 })).join('');
    const firstName = faker.person.firstName();
    const randomEmail = `${firstName.replace(/\s+/g, '')}@solv.com.gh`;
    
    

    context("Functionalities of checker portal", () => {

        it("Verify search bars across tabs on the portal", () => {
            cy.loginsa("kwame.gyimah@solv.com.gh", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-2 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get("input[data-placeholder='Search']").type("Anchor{enter}")
            cy.wait(2000)
            cy.get('#mat-tab-label-0-1').click()
            cy.wait(2000)
            cy.get("input[data-placeholder='Search']").type("Dealer{enter}")
            cy.wait(2000)
            cy.get('#mat-tab-label-0-2').click()
            cy.wait(2000)
            cy.get("input[data-placeholder='Search']").type("khan{enter}")
            cy.wait(2000)
            cy.get('#mat-tab-label-0-3').click()
            cy.wait(2000)
            cy.get("input[data-placeholder='Search']").type("err{enter}")


        });

        it("Download excel across all tabs", () => {
            cy.loginsa("kwame.gyimah@solv.com.gh", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-2 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.mat-stroked-button').click({force:true})
            cy.wait(2000)
            cy.get('#mat-tab-label-0-1').click()
            cy.wait(2000)
            cy.get('.mat-stroked-button').click({force:true})
            cy.wait(2000)
            cy.get('#mat-tab-label-0-2').click()
            cy.wait(2000)
            cy.get('.mat-stroked-button').click({force:true})
            cy.wait(2000)
            cy.get('#mat-tab-label-0-3').click()
            cy.wait(2000)
            cy.get('.mat-stroked-button').click({force:true})


        })

        it("Verify pagination across all tabs", () => {
            cy.loginsa("kwame.gyimah@solv.com.gh", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-2 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.mat-paginator-navigation-next').click()
            cy.get('.mat-paginator-navigation-previous').click()
            cy.wait(2000)
            cy.get('#mat-tab-label-0-1').click()
            cy.wait(2000)
            cy.get('.mat-paginator-navigation-next').click()
            cy.get('.mat-paginator-navigation-previous').click()
            cy.wait(2000)
            cy.get('#mat-tab-label-0-2').click()
            cy.wait(2000)
            cy.get('.mat-paginator-navigation-next').click()
            cy.get('.mat-paginator-navigation-previous').click()
            cy.wait(2000)
            cy.get('#mat-tab-label-0-3').click()
            cy.wait(2000)
            cy.get('.mat-paginator-navigation-next').click()
            cy.get('.mat-paginator-navigation-previous').click()


        })

        it("Verify entity details", () => {
            cy.loginsa("kwame.gyimah@solv.com.gh", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-2 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('mat-card').should("be.visible")
            cy.wait(2000)
            cy.get('#mat-tab-label-0-1').click()
            cy.wait(2000)
            cy.get('mat-card').should("be.visible")
            cy.wait(2000)
            cy.get('#mat-tab-label-0-2').click()
            cy.wait(2000)
            cy.get('mat-card').should("be.visible")
            cy.wait(2000)
            cy.get('#mat-tab-label-0-3').click()
            cy.wait(2000)
            cy.get('mat-card').should("be.visible")


        })

        it.only("Active Anchor Verification(Post Edit)", () => {
            cy.loginsa("kwame.gyimah@solv.com.gh", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-2 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            
        })

        it.only("Active Dealer Verification(Post Edit)", () => {
            cy.loginsa("kwame.gyimah@solv.com.gh", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-2 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            
        })

    })

})

