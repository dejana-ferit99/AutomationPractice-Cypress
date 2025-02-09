class productPage {

    elements = {
        dropdownSize: () => cy.get("#group_1"),
        colorButton: () => cy.get("#color_8"),
        btnAddToCart: () => cy.get("#add_to_cart > button"),
        txtSuccessfullyAddedItem: () => cy.get("div.layer_cart_product > h2"),
        btnContinueShopping: () => cy.get("div.button-container > span > span"),
        btnContactUs: () => cy.get("#contact-link > a")
    }

    clickSizeDropdown() {
        this.elements.dropdownSize().select('L');
    }

    changeItemColor() {
        this.elements.colorButton().click()
    }

    clickAddToCart() {
        this.elements.btnAddToCart().click()
    }

    clickContinueShopping() {
        this.elements.btnContinueShopping().click()
    }

    clickContactUs(){
        cy.visit('http://www.automationpractice.pl/index.php?controller=contact')
    }
}

module.exports = new productPage();