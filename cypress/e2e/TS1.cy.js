const landingPage = require("../page-object-model/landingPage");
const authenticationPage = require("../page-object-model/authenticationPage")
const myAccountPage = require("../page-object-model/myAccountPage")
const womenProductPage = require("../page-object-model/womenProductPage")
const productPage = require("../page-object-model/productPage")
const contactPage = require("../page-object-model/contactPage")
const addressPage = require("../page-object-model/addressPage")
const orderHistoryPage = require("../page-object-model/orderHistoryPage")
const myCartPage = require("../page-object-model/myCartPage")
const report = require("../page-object-model/report")
const { faker } = require('@faker-js/faker')
import 'cypress-file-upload'


describe('Test script for flow in task 5', () => {
    const email = faker.internet.email()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const dob = faker.date.birthdate({ min: 18, max: 80, mode: 'age' }).toISOString().split('T')[0];
    const password = faker.internet.password()
    const address = faker.location.streetAddress()
    const city = faker.location.city()
    const zipCode = faker.location.zipCode('#####')
    const rawPhone = faker.phone.number('(###) ###-#### x####')
    const homePhone = rawPhone.split(' x')[0]
    let orderReference
    let date
    let price


    it('Tesing flow for user registration, setting products filter, adding item in the cart, changing color and size, ordering item ', () => {
        cy.visit('http://www.automationpractice.pl/')
        //Open Sign In page and register new user
        landingPage.openSignInPage()
        authenticationPage.clickInputEmailField()
        authenticationPage.insertEmailAddress(email)
        authenticationPage.clickCreateAnAccountButton()
        authenticationPage.registerNewUser(firstName, lastName, password, dob)
        //Open Women Menu
        myAccountPage.clickWomenMenu()
        //Sort products by product name from A to Z, black color and price range $20 - $30
        womenProductPage.clickSortByDropdown()
        womenProductPage.clickBlackColor()
        womenProductPage.setSlider1LeftPosition() //Setting $20
        womenProductPage.setSlider2LeftPosition() //Setting $30
        //Open Blouse item, select and size
        womenProductPage.openItem()
        productPage.clickSizeDropdown()
        //Change item color to white because item is not in stock
        productPage.changeItemColor()
        //Add item to cart, verify success message and click Continue shopping button
        cy.wait(3000)
        productPage.changeItemColor()
        cy.wait(3000)
        productPage.clickAddToCart() 
        //Verify success message
        productPage.elements.txtSuccessfullyAddedItem().should('have.text', '\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t')
        productPage.clickContinueShopping()
        //Open contact form
        productPage.clickContactUs()
        //Fill in data on contact page, send it and check message
        contactPage.clickSubjectHeadingDropdown()
        contactPage.chooseFile()
        contactPage.enterMessageInField(firstName, lastName, email, dob)
        contactPage.clickSend()
        contactPage.elements.msgSuccess().should('have.text', 'Your message has been successfully sent to our team.')
        //Open user account and check user data (name, surname, email, DOB)
        contactPage.openUserAccount()
        myAccountPage.openUserPersonalInformation()
        myAccountPage.compareUserPersonalData(firstName, lastName, email, dob)
        //Open cart and continue shopping
        myAccountPage.clickCartButton()
        myCartPage.clickProceedToCheckout()
        addressPage.insertAddress(address, city, zipCode, homePhone)
        addressPage.proceedToCheckout()
        addressPage.clickAgreeTermsOfService()
        addressPage.proceedToCheckout2()
        addressPage.selectBankWirePay()
        addressPage.clickConfirmOrder()
        addressPage.openOrderHistory()
        orderReference = orderHistoryPage.getOrderReference()
        date = orderHistoryPage.getDate()
        price = orderHistoryPage.getPrice()
        //Report
        report.createTestReport(firstName, lastName, email, password, dob, orderReference, date, price)
    })
    
})