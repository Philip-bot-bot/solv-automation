import { faker, fi } from "@faker-js/faker"

describe("Maker admin portal", () => {
    beforeEach(() => {
        cy.visit("https://scf-admin.qa.solvgbsgh.com/#/sign-in")
     
   });

    
    const firstName = faker.person.firstName();
    const randomEmail = `${firstName.replace(/\s+/g, '')}@solv.com.gh`;
    const randomNumbers = Array.from({ length: 9 }, () => faker.number.int({ min: 1, max: 9 })).join('');


    context("master anchor tests", () => {

        it("Should create master anchor using the maker admin portal", () => {
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > .ng-star-inserted').click()
            cy.get("input[data-placeholder='Business Incorporation Number']").type(randomNumbers);
            cy.get("input[data-placeholder='Master Anchor Name']").type(firstName + firstName);
            cy.get("input[data-placeholder='GPS Addresse']").type("GE-093-5674");
            cy.get("input[data-placeholder='Postal Address']").type("POBox 242, Accra");
            cy.get("input[data-placeholder='Primary Contact Name']").type("Alvin Meelvin");
            cy.get("input[data-placeholder='Email ID']").type(randomEmail);
            cy.get("input[data-placeholder='Phone Number']").type(randomNumbers);
            cy.get(".mat-button-wrapper").click();
            cy.wait(2000)
        });

        
        it("Should prompt an error message when mandatory fields are not filled", () => {
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > .ng-star-inserted').click()
            cy.get("input[data-placeholder='Business Incorporation Number']").type(randomNumbers);
            cy.get("input[data-placeholder='Master Anchor Name']").type(firstName + firstName);
            cy.get("input[data-placeholder='GPS Addresse']").type("GE-093-5674");
            cy.get("input[data-placeholder='Postal Address']").type("POBox 242, Accra");
            cy.get("input[data-placeholder='Primary Contact Name']").type(firstName + firstName);
            cy.get("input[data-placeholder='Phone Number']").type(randomNumbers);
            cy.get('.mt-20 > .mat-focus-indicator').should("be.disabled");
            cy.wait(2000)
        });

        it.only("Should prompt an error message when an existing BIN is used", () => {
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > .ng-star-inserted').click()
            cy.get("input[data-placeholder='Business Incorporation Number']").type("BIN0575752");
            cy.get("input[data-placeholder='Master Anchor Name']").type(firstName + firstName);
            cy.get("input[data-placeholder='GPS Addresse']").type("GE-093-5674");
            cy.get("input[data-placeholder='Postal Address']").type("POBox 242, Accra");
            cy.get("input[data-placeholder='Primary Contact Name']").type(firstName + firstName);
            cy.get("input[data-placeholder='Email ID']").type(randomEmail);
            cy.get("input[data-placeholder='Phone Number']").type(randomNumbers);
            cy.get(".mat-button-wrapper").click();
            cy.wait(2000)
            cy.get("input[data-placeholder='GPS Addresse']").clear().type("GE-093-574");
            cy.wait(2000)
            cy.get("input[data-placeholder='Phone Number']").clear().type("456384");
            cy.wait(2000)
            cy.get("input[data-placeholder='Email ID']").clear().type("heistyopmail.come");
            cy.wait(2000)



        });

        it("Should be able to detect invalid inputs", () => {
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > .ng-star-inserted').click()
            cy.get("input[data-placeholder='Business Incorporation Number']").type("BIN0575752");
            cy.get("input[data-placeholder='Master Anchor Name']").type(firstName + firstName);
            cy.get("input[data-placeholder='GPS Addresse']").type("GE-093-5674");
            cy.get("input[data-placeholder='Postal Address']").type("POBox 242, Accra");
            cy.get("input[data-placeholder='Primary Contact Name']").type(firstName + firstName);
            cy.get("input[data-placeholder='Email ID']").type(randomEmail);
            cy.get("input[data-placeholder='Phone Number']").type(randomNumbers);
            cy.get(".mat-button-wrapper").click();
            cy.wait(2000)
            
        })


    })


})

