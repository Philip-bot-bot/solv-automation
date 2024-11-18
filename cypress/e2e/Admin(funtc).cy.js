import { faker } from "@faker-js/faker";

describe("Maker admin portal", () => {
    beforeEach(() => {
        cy.visit("https://scf-admin.qa.solvgbsgh.com/#/sign-in")

    });


    const randomNumbers = Array.from({ length: 9 }, () => faker.number.int({ min: 1, max: 9 })).join('');
    const firstName = faker.person.firstName();
    const randomEmail = `${firstName.replace(/\s+/g, '')}@solv.com.gh`;
    
    

    context("Functionalities of admin portal", () => {

        it("Verify search bars across tabs on the portal", () => {
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
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
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.mat-stroked-button').click()
            cy.wait(2000)
            cy.get('#mat-tab-label-0-1').click()
            cy.wait(2000)
            cy.get('.mat-stroked-button').click()
            cy.wait(2000)
            cy.get('#mat-tab-label-0-2').click()
            cy.wait(2000)
            cy.get('.mat-stroked-button').click()
            cy.wait(2000)
            cy.get('#mat-tab-label-0-3').click()
            cy.wait(2000)
            cy.get('.mat-stroked-button').click()


        })

        it("Verify pagination across all tabs", () => {
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
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
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
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

        it("Details editing", () => {
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234")
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('img[src*="toolTip.svg"]').eq(0).click();
            cy.get("input[data-placeholder='Anchor Name']").clear().type("Queen B")
            cy.contains("Save").click()
            cy.wait(3000)
            cy.contains("Active").click()
            cy.wait(3000)
            cy.get('img[src*="toolTip.svg"]').eq(3).click();
            cy.wait(3000)
            cy.get('#mat-input-8').click()
            cy.get('#mat-input-8').clear().type(randomNumbers);
            cy.get('#mat-input-9').click({force:true})
            cy.get('#mat-input-9').clear().type(randomEmail);
            cy.get('[src="../../../assets/images/save-icon.svg"]').click()
            cy.get('#mat-tab-label-0-1').click()
            cy.wait(3000)
            cy.get('img[src*="toolTip.svg"]').eq(0).click();
            cy.get('#mat-input-15').clear().type(randomNumbers)
            cy.contains("Save").click()
            cy.contains("Dealer Accepted").click()
            cy.wait(3000)
            cy.get('img[src*="toolTip.svg"]').eq(0).click();
            cy.get('#mat-input-16').click()
            cy.get("#mat-input-16").clear().type(randomNumbers);
            cy.get('[src="../../../assets/images/save-icon.svg"]').click()
            cy.get('#mat-tab-label-0-2').click()
            cy.wait(3000)
            cy.get('img[src*="toolTip.svg"]').eq(2).click();
            cy.wait(2000)
            cy.get('#mat-input-20').click()
            cy.get('#mat-input-20').clear().type(firstName + firstName);
            cy.contains("Save Changes").click()
            cy.wait(2000)
            cy.contains("Active").click()
            cy.wait(2000)
            cy.get('img[src*="toolTip.svg"]').eq(2).click();
            cy.get('#mat-input-27').click()
            cy.get('#mat-input-27').clear().type(randomNumbers);
            cy.get('[src="../../../assets/images/save-icon.svg"]').click()
        })

    })

})

