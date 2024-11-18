import { faker, fi } from "@faker-js/faker"

describe("Maker admin portal", () => {
    beforeEach(() => {
        cy.visit("https://scf-admin.qa.solvgbsgh.com/#/sign-in")
     
   });


    const firstName = faker.person.firstName();
    const randomNumbers = Array.from({ length: 9 }, () => faker.number.int({ min: 1, max: 9 })).join('');
    const filePath = 'sample-document.pdf';


    context("Program tests", () => {

        it("As an admin I should be able to create a program", () => {
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234");
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(2)').click();
            cy.get('input[formcontrolName="masterAnchorName"]').type('Ibe');
            cy.contains("Ibe one").click();
            cy.get('input[formcontrolName="programName"]').type(firstName + randomNumbers); // Use unique program name
            cy.contains("Program Type*").click();
            cy.contains("Buyer Finance").click({ force: true });
            cy.contains("Program Tier*").click({ force: true });
            cy.contains("Tier-I").click({ force: true });
            cy.get('input[formcontrolName="creditPeriod"]').type('21');
            cy.get('input[formcontrolName="finance"]').type('50');
            cy.get('input[formcontrolName="renewalDate"]').click();
            cy.contains("29").click();
            cy.contains(".header-3.mb-24", "Commercial Details");
            cy.contains(".sub-header.mb-24", "Processing Fees - Anchor").should("be.visible");
            cy.get("input[formcontrolName='processingFee_anchorBank']").type("2");
            cy.get("input[formcontrolName='processingFee_anchorSolv']").type("4");
            cy.contains(".sub-header.mb-24", "Processing Fees - Dealer").should("be.visible");
            cy.get("input[formcontrolName='processingFee_spokeBank']").type("1");
            cy.get("input[formcontrolName='processingFee_spokeSolv']").type("1.5");
            cy.contains(".sub-header.mb-24", "Transaction Fees").should("be.visible");
            cy.get("input[formcontrolName='transactionFees_bank']").type("1");
            cy.get("input[formcontrolName='transactionFees_solv']").type("2");
            cy.contains(".sub-header.mb-24", "Pricing").should("be.visible");
            cy.get("input[formcontrolName='pricing_bank']").type("2");
            cy.get("input[formcontrolName='pricing_solv']").type("0.5");
            cy.contains(".sub-header.mb-24", "Past Due").should("be.visible");
            cy.get("input[formcontrolName='pastDue_bank']").type("1");
            cy.get("input[formcontrolName='pastDue_solv']").type("1.5");
            cy.contains(".sub-header.mb-24", "Penalty").should("be.visible");
            cy.get("input[formcontrolName='penalty_bank']").type("3");
            cy.get("input[formcontrolName='penalty_solv']").type("1.5");
            cy.contains(".header-3.mb-24", "Recourse Details").should("be.visible");
            cy.get("[placeholder='Type*']").type("1");
            cy.contains("CypressAug").click();
            cy.get("[placeholder='Unit*']").click();
            cy.contains("Amount").click();
            cy.get("input[formcontrolname='resourceDetails_value']").type("3");
            cy.contains("Save Details").click();
            cy.wait(3000)
            cy.get('.myForm > :nth-child(1) > .mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
            cy.contains("AHSDJ").click()
            cy.get('#mat-input-30').type("2000")
            cy.get('#mat-input-31').type("21")
            cy.get('#mat-input-28').type("0")
            cy.get('#mat-input-29').type("100")
            cy.get('#mat-input-33').type("1")
            cy.get('#mat-input-50').type("2900")
            cy.get('#mat-input-51').type("4000")
            cy.get('input[formcontrolName="approval_date"]').click()
            cy.contains('.mat-calendar-body-cell-content', '7').click()
            cy.get('input[formcontrolName="renewal_date"]').click()
            cy.contains('.mat-calendar-body-cell-content.mat-focus-indicator', '29').click();
            cy.get('#mat-radio-9 > .mat-radio-label > .mat-radio-label-content').click();
            cy.contains("Save Details").click()
            cy.wait(2000)

        });
        it.only("Attempt program creation leaving mandatory fields unfilled", () => {
            cy.loginsa("bhaskar.n@solvezy.com", "Test@1234");
            cy.get('.mat-select-arrow-wrapper').click()
            cy.get('#mat-option-1 > .mat-option-text').click()
            cy.wait(2000)
            cy.get('.mat-focus-indicator').click()
            cy.wait(3000)
            cy.get('.pt-25 > :nth-child(2)').click();
            cy.get('input[formcontrolName="masterAnchorName"]').type('Cypress');
            cy.get('input[formcontrolName="masterAnchorName"]').clear();
            cy.get('input[formcontrolName="masterAnchorName"]').type('Ibe');
            cy.contains("Ibe one").click();
            cy.contains("Change Master Anchor").click()
            cy.get('input[formcontrolName="masterAnchorName"]').clear();
            cy.get('input[formcontrolName="masterAnchorName"]').type('Car');
            cy.contains("Carlton Ltd").click();
            cy.get('input[formcontrolName="programName"]').type(firstName + randomNumbers);
            cy.contains("Program Type*").click();
            cy.contains("Buyer Finance").click({ force: true });
            cy.contains("Program Tier*").click({ force: true });
            cy.contains("Tier-I").click({ force: true });
            cy.get('input[formcontrolName="creditPeriod"]').type('21');
            cy.get('input[formcontrolName="finance"]').type('50');
            cy.get('input[formcontrolName="creditPeriod"]').clear()
            cy.get('input[formcontrolName="creditPeriod"]').type('6');
            cy.get('input[formcontrolName="creditPeriod"]').clear()
            cy.get('input[formcontrolName="creditPeriod"]').type('181');
            cy.get('input[formcontrolName="creditPeriod"]').clear();
            cy.get('input[formcontrolName="creditPeriod"]').type('21');
            cy.get('input[formcontrolName="finance"]').clear()
            cy.get('input[formcontrolName="finance"]').type('101');
            cy.get('input[formcontrolName="finance"]').clear()
            cy.get('input[formcontrolName="finance"]').type('2');
            cy.get('input[formcontrolName="finance"]').clear()
            cy.get('input[formcontrolName="finance"]').type('50');
            cy.get('input[formcontrolName="renewalDate"]').click();
            cy.contains("29").click();
            cy.contains(".header-3.mb-24", "Commercial Details");
            cy.contains(".sub-header.mb-24", "Processing Fees - Anchor").should("be.visible");
            cy.get("input[formcontrolName='processingFee_anchorBank']").type("2");
            cy.get("input[formcontrolName='processingFee_anchorSolv']").type("4");
            cy.contains(".sub-header.mb-24", "Processing Fees - Dealer").should("be.visible");
            cy.get("input[formcontrolName='processingFee_spokeBank']").type("1");
            cy.get("input[formcontrolName='processingFee_spokeSolv']").type("1.5");
            cy.contains(".sub-header.mb-24", "Transaction Fees").should("be.visible");
            cy.get("input[formcontrolName='transactionFees_bank']").type("1");
            cy.get("input[formcontrolName='transactionFees_bank']").type("1");
            cy.get("input[formcontrolName='transactionFees_solv']").type("2")
            cy.get("input[formcontrolName='transactionFees_solv']").type("2");
            cy.contains(".sub-header.mb-24", "Pricing").should("be.visible");
            cy.get("input[formcontrolName='pricing_bank']").type("2");
            cy.get("input[formcontrolName='pricing_bank']").clear();
            cy.get("input[formcontrolName='pricing_bank']").type("102");
            cy.get("input[formcontrolName='pricing_solv']").type("0.5");
            cy.get("input[formcontrolName='pricing_solv']").clear();
            cy.get("input[formcontrolName='pricing_solv']").type("104");
            cy.contains(".sub-header.mb-24", "Past Due").should("be.visible");
            cy.get("input[formcontrolName='pastDue_bank']").type("1");
            cy.get("input[formcontrolName='pastDue_bank']").clear().type("103");
            cy.get("input[formcontrolName='pastDue_solv']").type("1.5");
            cy.get("input[formcontrolName='pastDue_solv']").clear().type("105");
            cy.contains(".sub-header.mb-24", "Penalty").should("be.visible");
            cy.get("input[formcontrolName='penalty_bank']").type("3");
            cy.get("input[formcontrolName='penalty_bank']").clear();
            cy.get("input[formcontrolName='penalty_bank']").type("3");
            cy.get("input[formcontrolName='penalty_solv']").type("1.5");
            cy.contains(".header-3.mb-24", "Recourse Details").should("be.visible");
            cy.get("[placeholder='Type*']").type("1");
            cy.contains("CypressAug").click();
            cy.get("[placeholder='Unit*']").click();
            cy.contains("Amount").click();
            cy.get("input[formcontrolname='resourceDetails_value']").type("3");
            cy.get("input[formcontrolname='resourceDetails_value']").clear();
            cy.get("input[formcontrolname='resourceDetails_value']").type("3");
            cy.contains("Save Details").click();
            cy.wait(2000)
            cy.get("input[formcontrolName='pricing_bank']").clear().type("2");
            cy.get("input[formcontrolName='pricing_solv']").clear().type("0.5");
            cy.get("input[formcontrolName='pastDue_bank']").clear().type("1");
            cy.get("input[formcontrolName='pastDue_solv']").clear().type("1.5");
            cy.contains("Save Details").click();
            cy.wait(4000)
            cy.get('.myForm > :nth-child(1) > .mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
            cy.contains("AHSDJ").click()
            cy.get('#mat-input-33').type("2000")
            cy.get('#mat-input-34').type("5")
            cy.get('#mat-input-31').type("0")
            cy.get('#mat-input-32').type("10000")
            cy.get('#mat-input-36').type("9")
            cy.get('#mat-input-33').clear().type("1")
            cy.get('#mat-input-34').clear().type("21")
            cy.get('#mat-input-31').clear().type("0")
            cy.get('#mat-input-32').clear().type("100")
            cy.get('#mat-input-36').clear().type("4")
            cy.get('#mat-input-50').type("2900")
            cy.get('#mat-input-51').type("4000")
            cy.get('input[formcontrolName="approval_date"]').click()
            cy.contains('.mat-calendar-body-cell-content', '7').click()
            cy.get('input[formcontrolName="renewal_date"]').click()
            cy.contains('.mat-calendar-body-cell-content.mat-focus-indicator', '29').click();
            cy.get('#mat-radio-9 > .mat-radio-label > .mat-radio-label-content').click();
            cy.contains("Save Details").should("be.disabled")
            cy.wait(2000)
        

        })



    })


})

