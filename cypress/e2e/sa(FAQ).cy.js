

describe("Super admin", () => {
    beforeEach(() => {
        cy.visit("https://scf-admin.qa.solvgbsgh.com/#/sign-in")
     
   });
 
    
    context("FAQ Management", () => {

        var sentence = "How to help solvezy"
        var sentence2 = "Disburse more money"

        it("Add new Anchor FAQ, edit and delete", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.mat-toolbar-row > :nth-child(1)').click()
            cy.get(':nth-child(1) > .mt-24').click()
            cy.wait(3000)
            cy.get(':nth-child(2) > .mat-list-item-content').click()
            cy.contains('Add FAQs').click()
            cy.wait(3000)
            cy.get('input[data-placeholder="Enter the question"]').type(sentence)
            cy.get('input[data-placeholder="Enter the answer"]').type(sentence2)
            cy.get('.mt-10 > .ml-10').click()
            cy.wait(3000)
            cy.get(".mat-card.mat-focus-indicator.mb-10.ng-star-inserted").eq(6).click({ force: true })
            cy.get("[src='/assets/images/edit-icon.svg']").eq(6).should('be.visible').click({ force: true });
            cy.get('.mat-form-field-infix').type(sentence)
            cy.contains("Update").click()
            cy.wait(3000)
            cy.get(".mat-card.mat-focus-indicator.mb-10.ng-star-inserted").eq(6).click({ force: true })
            cy.get("[src='/assets/images/delete-icon.svg']").eq(6).should('be.visible').click({ force: true });
            cy.get('.delete_button > .mat-button-wrapper').click()

        })


        it.only("Add new dealer FAQ, edit and delete", () => {
            cy.loginsa("debasis.roy@solvezy.com", "Test@1234")
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.mat-toolbar-row > :nth-child(1)').click()
            cy.get(':nth-child(1) > .mt-24').click()
            cy.wait(3000)
            cy.get(':nth-child(2) > .mat-list-item-content').click()
            cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click()
            cy.contains('Add FAQs').click()
            cy.wait(3000)
            cy.get('input[data-placeholder="Enter the question"]').type(sentence)
            cy.get('input[data-placeholder="Enter the answer"]').type(sentence)
            cy.get('.mt-10 > .ml-10').click()
            cy.wait(3000)
            cy.get(".mat-card.mat-focus-indicator.mb-10.ng-star-inserted").eq(6).click({ force: true })
            cy.get("[src='/assets/images/edit-icon.svg']").eq(6).should('be.visible').click({ force: true });
            cy.get('.mat-form-field-infix').type(sentence)
            cy.contains("Update").click()
            cy.wait(3000)
            cy.get(".mat-card.mat-focus-indicator.mb-10.ng-star-inserted").eq(6).click({ force: true })
            cy.get("[src='/assets/images/delete-icon.svg']").eq(6).should('be.visible').click({ force: true });
            cy.get('.delete_button > .mat-button-wrapper').click()
        })

       
    })

})
   