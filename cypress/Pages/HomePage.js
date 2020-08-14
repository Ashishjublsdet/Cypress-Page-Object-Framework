export class HomePage {
    constructor() {
        this.searchBar="//input[@placeholder='Search for products, brands and more']"
        this.serchIcon="//button[@type='submit']";
    }

    pressEsc(){
       // cy.xpath(this.login_btm).click()
       cy.get('body').type('{esc}', { force: true })
    }
    
    searchProducts(){
        cy.xpath(this.searchBar).click()
        cy.xpath(this.searchBar).type("Mobiles")
    }
    clickSearchIcon(){
        cy.xpath(this.serchIcon).click()
    }
}