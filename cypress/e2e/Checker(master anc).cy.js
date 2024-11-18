import { faker, fi } from "@faker-js/faker"

describe("Maker admin portal", () => {
    beforeEach(() => {
        cy.visit("https://scf-admin.qa.solvgbsgh.com/#/sign-in")
     
   });

    
    const firstName = faker.person.firstName();
    const randomEmail = `${firstName.replace(/\s+/g, '')}@solv.com.gh`;
    const randomNumbers = Array.from({ length: 9 }, () => faker.number.int({ min: 1, max: 9 })).join('');


    context("Verification of Master Anchor ", () => {

        it("Should be able to verify new Master Anchor", () => {
            cy.loginsa("kwame.gyimah@solv.com.gh", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-2 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.contains(".mat-tab-label-content", "MASTER ANCHOR").click()
            cy.wait(2000)
            cy.get(':nth-child(5) > .cdk-column-actionButtons > [style="display: flex;"] > :nth-child(2) > .mat-focus-indicator').click()
           cy.contains("Save Changes").click()
        });



    })


})

