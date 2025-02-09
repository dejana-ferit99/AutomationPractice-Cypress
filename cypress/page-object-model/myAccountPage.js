class myAccountPage {

    elements = {
        btnWomenMenu: () => cy.get("#block_top_menu > ul > li:nth-child(1) > a"),
        btnMyPersonalInformation: () => cy.get("#center_column > div > div > ul > li:nth-child(5)"),
        txtFirstName: () => cy.get("#firstname"),
        txtLastName: () => cy.get("#lastname"),
        txtEmail: () => cy.get("#email"),
        txtDay: () => cy.get("#uniform-days > span"), 
        txtMonth: () => cy.get("#uniform-months > span"),
        txtYear: () => cy.get("#uniform-years > span"),
        btnCart: () => cy.get("#header div:nth-child(3) > div > a")

    }

    clickWomenMenu() {
        this.elements.btnWomenMenu().click()
    }

    openUserPersonalInformation() {
        this.elements.btnMyPersonalInformation().click()
    }

    getFirstNameValue() {
        return this.elements.txtFirstName().invoke('val')
    }

    getLastNameValue() {
        return this.elements.txtLastName().invoke('val')
    }

    getEmailValue() {
        return this.elements.txtEmail().invoke('val')
    }
    
    getTxtDay() {
        return this.elements.txtDay().invoke('text')  
    }

    getTxtMonth() {
        return this.elements.txtMonth().invoke('text')
    }

    getTxtYear() {
        return this.elements.txtYear().invoke('text')  
    }

    compareUserPersonalData(first_name, last_name, e_mail, dob_dob) {
        let [year_1, month_1, day_1] = dob_dob.split('-');

        if (day_1.startsWith('0')) {
            day_1 = day_1.substring(1)
        }
        if (month_1.startsWith('0')) {
            month_1 = month_1.substring(1);
        }
    
        const monthMap = {
            'January': '1', 'February': '2', 'March': '3', 'April': '4',
            'May': '5', 'June': '6', 'July': '7', 'August': '8',
            'September': '9', 'October': '10', 'November': '11', 'December': '12'
        };
    
        this.getFirstNameValue().then((firstName) => {
            expect(firstName).to.equal(first_name)
        });
    
        this.getLastNameValue().then((lastName) => {
            expect(lastName).to.equal(last_name)
        });
    
        this.getEmailValue().then((email) => {
            expect(email).to.equal(e_mail)
        });
    
        this.getTxtDay().then((day) => {
            expect(day.trim()).to.equal(day_1)
        });
    
        this.getTxtMonth().then((month) => {
            const monthNumeric = monthMap[month.trim()]
            expect(monthNumeric).to.equal(month_1)
        });
    
        this.getTxtYear().then((year) => {
            expect(year.trim()).to.equal(year_1)
        });
    }    

    clickCartButton() {
        cy.visit('http://www.automationpractice.pl/index.php?controller=order')
    }

}

module.exports = new myAccountPage();