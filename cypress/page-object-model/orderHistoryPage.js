class orderHistoryPage {

    elements = {
        txtOrderReference: () => cy.get("#tr.first_item > td.footable-first-column > a"),
        txtDate: () => cy.get("#order-list > tbody > tr.first_item > td.history_date.bold"),
        txtPrice: () => cy.get("tr.first_item > td.history_price > span")
    }


    proceedToCheckout() {
        this.elements.btnProceedToCheckout().click()
    }

    getOrderReference() {
        return this.elements.txtOrderReference().invoke('val')
    }

    getDate() {
        return this.elements.txtDate().invoke('val')
    }

    getPrice() {
        return this.elements.txtPrice().invoke('val')
    }

}

module.exports = new orderHistoryPage();