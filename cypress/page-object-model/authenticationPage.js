class authenticationPage {

    elements = {
        inputEmailField: () => cy.get("#create-account_form > div > div.form-group > input"),
        btnCreateAnAccount: () => cy.get("#SubmitCreate"),
        rbtnTitle: () => cy.get("#uniform-id_gender1"),
        inputFirstName: () => cy.get("#customer_firstname"),
        inputLastName: () => cy.get("#customer_lastname"),
        inputPassword: () => cy.get("#passwd"),
        dropdownDate: () => cy.get("#days"),
        dropdownMonth: () => cy.get("#months"),
        dropdownYear: () => cy.get("#years"),
        btnRegister: () => cy.get("#submitAccount")
    }

    clickInputEmailField() {
        this.elements.inputEmailField().click()

    }

    insertEmailAddress(email) {
        this.elements.inputEmailField().type(email)
    }

    clickCreateAnAccountButton(){
        this.elements.btnCreateAnAccount().click()
    }

    registerNewUser(firstName, lastName, password, dob) {
        let [year, month, day] = dob.split('-')
        if (day.startsWith('0')) {
            day = day.substring(1);
        }
        if (month.startsWith('0')) {
            month = month.substring(1);
        }
        this.elements.rbtnTitle().click()
        this.elements.inputFirstName().type(firstName)
        this.elements.inputLastName().type(lastName)
        this.elements.inputPassword().type(password)
        this.elements.dropdownDate().select(day)
        this.elements.dropdownMonth().select(month)
        this.elements.dropdownYear().select(year)
        this.elements.btnRegister().click()
    }
}

module.exports = new authenticationPage();