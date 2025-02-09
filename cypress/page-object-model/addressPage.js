class addressPage {

    elements = {
        txtAddress: () => cy.get("#address1"),
        txtCity: () => cy.get("#city"),
        selectState: () => cy.get("#id_state"),
        txtZipCode: () => cy.get("#postcode"),
        txtPhoneNumber: () => cy.get("#phone"),
        btnSave: () => cy.get("#submitAddress > span"), 
        btnProceedToCheckout: () => cy.get("#center_column > form > p > button"),
        btnTermsOfService: () => cy.get("#cgv"),
        btnProceedToCheckout2: () => cy.get("#form > p > button"),
        btnBankWirePay: () => cy.get("#HOOK_PAYMENT > div:nth-child(1) > div > p > a"),
        btnConfirmOrder: () => cy.get("#cart_navigation > button"),
        lnkOrderHistory: () => cy.get("#center_column > p.cart_navigation.exclusive > a")
    }

    insertAddress(address, city, zip, number) {
        this.elements.txtAddress().click().type(address)
        this.elements.txtCity().click().type(city)
        this.elements.selectState().select('1');
        this.elements.txtZipCode().click().type(zip)
        this.elements.txtPhoneNumber().click().type(number)
        this.elements.btnSave().click()
        cy.visit('http://www.automationpractice.pl/index.php?controller=order?step=1')
    }

    proceedToCheckout() {
        this.elements.btnProceedToCheckout().click()
    }

    clickAgreeTermsOfService() {
        this.elements.btnTermsOfService().click()
    }

    proceedToCheckout2() {
        this.elements.btnProceedToCheckout2().click()
    }

    selectBankWirePay() {
        this.elements.btnBankWirePay().click()
    }

    clickConfirmOrder() {
        this.elements.btnConfirmOrder().click()
    }

    openOrderHistory() {
        this.elements.lnkOrderHistory().click()
    }
}

module.exports = new addressPage();
