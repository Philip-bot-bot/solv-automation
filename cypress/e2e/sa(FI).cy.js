import { faker } from "@faker-js/faker"

describe("Super admin", () => {
    beforeEach(() => {
        cy.visit("https://scf-admin.qa.solvgbsgh.com/#/sign-in")
     
   });

    const firstName = faker.person.firstName();
    const filePath = 'sample-document.pdf';
    const imagePath = 'sampleimg.png';
    const randomEmail = `${firstName.replace(/\s+/g, '')}@solv.com.gh`;
    const randomNumbers = Array.from({ length: 9 }, () => faker.number.int({ min: 1, max: 9 })).join('');

    context("FI Creation(Non-Bank)", () => {
        it.only("Successfully create non bank FI with all details filled including logo", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(1) > .mat-button-wrapper').click()
            cy.get('#mat-select-value-15 > .mat-select-placeholder').click()
            cy.get('#mat-option-46 > .mat-option-text').click()
            cy.get('#mat-input-10').type(firstName)
            cy.get('#mat-input-5').type(firstName)
            cy.get('#mat-input-6').type(randomNumbers)
            cy.get('input[type="file"]').attachFile(imagePath);
            cy.get('#mat-input-7').type(randomNumbers)
            cy.get('#mat-input-8').click()
            cy.get('#mat-option-47 > .mat-option-text').click()
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-99 > .mat-option-text').click()

        })

        it("Successfully create non bank FI with all details filled without logo", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(1) > .mat-button-wrapper').click()
            cy.get('#mat-select-value-15 > .mat-select-placeholder').click()
            cy.get('#mat-option-46 > .mat-option-text').click()
            cy.get('#mat-input-10').type(firstName)
            cy.get('#mat-input-5').type(firstName)
            cy.get('#mat-input-6').type(randomNumbers)
            cy.get('#mat-input-7').type(randomNumbers)
            cy.get('#mat-input-8').click()
            cy.get('#mat-option-47 > .mat-option-text').click()
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-99 > .mat-option-text').click()

        })

        it("Cancel an attempted bank FI creation", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(1) > .mat-button-wrapper').click()
            cy.get('#mat-select-value-15 > .mat-select-placeholder').click()
            cy.get('#mat-option-46 > .mat-option-text').click()
            cy.get('#mat-input-10').type(firstName)
            cy.get('#mat-input-5').type(firstName)
            cy.get('#mat-input-6').type(randomNumbers)
            cy.get('#mat-input-7').type(randomNumbers)
            cy.get('#mat-input-8').click()
            cy.get('#mat-option-47 > .mat-option-text').click()
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-99 > .mat-option-text').click()
            cy.contains("Cancel").click()
            cy.contains("Yes, Im sure").click()
        })
        it("Leave a mandatory field unfilled", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(1) > .mat-button-wrapper').click()
            cy.get('#mat-select-value-15 > .mat-select-placeholder').click()
            cy.get('#mat-option-46 > .mat-option-text').click()
            cy.get('#mat-input-10').type(firstName)
            // cy.get('#mat-input-5').type(firstName)
            cy.get('#mat-input-6').type(randomNumbers)
            cy.get('#mat-input-7').type(randomNumbers) //bnak account
            cy.get('#mat-input-8').click()
            cy.get('#mat-option-47 > .mat-option-text').click()
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-99 > .mat-option-text').click()
            cy.contains("Add FI").should("be.disabled")
            cy.wait(2000)
        })
        it("Upload a document that does not fall within the accepted format", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(1) > .mat-button-wrapper').click()
            cy.get('#mat-select-value-15 > .mat-select-placeholder').click()
            cy.get('#mat-option-46 > .mat-option-text').click()
            cy.get('#mat-input-10').type(firstName)
            cy.get('#mat-input-5').type(firstName)
            cy.get('#mat-input-6').type(randomNumbers)
            cy.get('input[type="file"]').attachFile(filePath);
            cy.get('#mat-input-7').type(randomNumbers)
            cy.get('#mat-input-8').click()
            cy.get('#mat-option-47 > .mat-option-text').click()
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-99 > .mat-option-text').click()
            cy.contains("Add FI").should("be.disabled")

        })

        it("Attempt adding an existing bank FI", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-0 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(1) > .mat-button-wrapper').click()
            cy.get('#mat-select-value-15 > .mat-select-placeholder').click()
            cy.get('#mat-option-46 > .mat-option-text').click()
            cy.get('#mat-input-10').type("Blue Financial Services Ghana Ltd ")
            cy.get('#mat-input-5').type("BFSGL8099")
            cy.get('#mat-input-6').type("FI80008")
            cy.get('input[type="file"]').attachFile(imagePath);
            cy.get('#mat-input-7').type(randomNumbers)
            cy.get('#mat-input-8').click()
            cy.get('#mat-option-47 > .mat-option-text').click()
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-99 > .mat-option-text').click()
            cy.contains("Add FI").click()
        })
    })

    context("Editig", () => {
    it("Edit Active FI", () => {
        cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
        cy.get('.mat-select-arrow-wrapper').click()
        cy.get('#mat-option-0 > .mat-option-text').click()
        cy.wait(2000)
        cy.get('.mat-focus-indicator').click()
        cy.wait(3000)
        cy.get('#mat-tab-label-0-2 > .mat-tab-label-content').click()
        cy.get(':nth-child(1) > .cdk-column-actionButtons > [style="display: flex;"] > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > span > .ng-tns-c181-9').click()
        cy.get('#mat-input-10').clear().type("Blue Financial Services Ghana")
        cy.get('#mat-input-5').clear().type("BFSGL8096")
        cy.get('#mat-input-8').click()
        cy.get('#mat-option-52 > .mat-option-text').click()
        cy.get('.mat-select-placeholder').click()
        cy.get('#mat-option-169 > .mat-option-text').click()
        cy.get(':nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
    })

    it("Edit FI Details", () => {
        cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
        cy.get('.mat-select-arrow-wrapper').click()
        cy.get('#mat-option-0 > .mat-option-text').click()
        cy.wait(2000)
        cy.get('.mat-focus-indicator').click()
        cy.wait(3000)
        cy.get('#mat-tab-label-0-2 > .mat-tab-label-content').click()
        cy.get('tbody > :nth-child(1) > .cdk-column-FI-Code').click()
        cy.get(':nth-child(1) > .cdk-column-actionButtons > :nth-child(1) > [style="display: inline-block;"] > div.ng-tns-c181-53 > .editRowIcon').click()
        cy.get('[src="../../../assets/images/save-icon.svg"]').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .cdk-column-actionButtons > :nth-child(1) > [style="display: inline-block;"] > div.ng-tns-c181-53 > .editRowIcon').click()
        cy.get('#mat-input-7').clear().type(randomEmail)
        cy.get('#mat-input-8').clear().type(randomNumbers)
        cy.get('[src="../../../assets/images/save-icon.svg"]').click()
    })

})
})

