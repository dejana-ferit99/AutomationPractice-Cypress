class contactPage {

    elements = {
        btnChooseFile: () => cy.get("#uniform-fileUpload > span.action"),
        messageField: () => cy.get("#message"),
        btnSend: () => cy.get("#submitMessage"),
        fieldEmail: () => cy.get("#email"),
        subjectDropdown: () => cy.get("#id_contact"),
        msgSuccess: () => cy.get("#center_column > p"),
        btnAccount: () => cy.get("div.header_user_info:nth-child(1)")
    }

    chooseFile() {
        const filePath = '../fixtures/Osijek.jpg'
        cy.get('input[type="file"]')
          .attachFile(filePath);
    }

    clickSubjectHeadingDropdown() {
        this.elements.subjectDropdown().select('2')
    }

    enterEmail(email) {
        this.elements.fieldEmail().click().type(email)
    }

    enterMessageInField(firstName, lastName, email, dob) {
        const message = `${firstName}, ${lastName}, ${email}, ${dob}`
        this.elements.messageField().click().type(message)
    }

    clickSend() {
        this.elements.btnSend().click()
    }

    openUserAccount() {
        this.elements.btnAccount().click()
    }

}

module.exports = new contactPage();