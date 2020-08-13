export class HomePage {
    constructor() {
        this.login_btm=""
    }

    clickLogin(){
        cy.xpath(this.login_btm).click() 
    }
    
}