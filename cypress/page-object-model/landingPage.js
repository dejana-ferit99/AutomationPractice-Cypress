class landingPage {

    elements = {
        btnSignIn: () => cy.get("div.header_user_info > a")
    }

    openSignInPage() {
        this.elements.btnSignIn().click()
    }
}

module.exports = new landingPage();