class report {
    createTestReport(firstName, lastName, email, password, dob, order, date, price) {
        console.log("Test Report:")
        console.log("First Name:", firstName)
        console.log("Last Name:", lastName)
        console.log("Email:", email)
        console.log("Password:", password)
        console.log("Date of Birth:", dob)
        console.log("Order ID:", order)
        console.log("Order Date:", date)
        console.log("Order Price:", price)
    }
    
}

module.exports = new report();