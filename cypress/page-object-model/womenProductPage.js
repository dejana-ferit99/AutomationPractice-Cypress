class womenProductPage {

    elements = {
        dropdownSortBy: () => cy.get("#selectProductSort"),
        btnBlackColor: () => cy.get("#ul_layered_id_attribute_group_3 > li:nth-child(3) > label > a"),
        itemBlouse: () => cy.get("#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img")
    }

    clickSortByDropdown() {
        this.elements.dropdownSortBy().select('name:asc')
    }

    clickBlackColor() {
        this.elements.btnBlackColor().click()
    }

    openItem(){
        this.elements.itemBlouse().click()
    }

    setSlider1LeftPosition() {
        cy.get('#layered_price_slider > div')
        .then(($slider) => {
            const sliderOffset = $slider.offset().left;
            const startX = sliderOffset; 
            const step = 5; 
            
            cy.get('.ui-slider-range.ui-widget-header.ui-corner-all')
                .trigger('mousedown', { which: 1, pageX: startX })
                .trigger('mousemove', { pageX: startX + 4 * step }) 
                .trigger('mouseup'); 
        });
    }

    setSlider2LeftPosition() {
        cy.get('#layered_price_slider > div') 
        .then(($slider) => {
            const sliderOffset = $slider.offset().left;  
            const sliderWidth = $slider.width(); 
            const startX = sliderOffset + sliderWidth; 
            const step = 10; 
    
            cy.get('#layered_price_slider > a:nth-child(3)') 
                .trigger('mousedown', { which: 1, pageX: startX })
                .trigger('mousemove', { pageX: startX - 12 * step }) 
                .trigger('mouseup');
        });
    }
    

}

module.exports = new womenProductPage();