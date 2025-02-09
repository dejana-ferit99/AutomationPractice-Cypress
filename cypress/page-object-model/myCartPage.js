class myCartPage {

    elements = {
        btnProceedToCheckout: () => cy.get("a.button.btn.btn-default.standard-checkout"),
    }

    clickProceedToCheckout() {
        cy.visit("http://www.automationpractice.pl/index.php?controller=address&back=order.php%3Fstep%3D1")
    }

}

module.exports = new myCartPage();