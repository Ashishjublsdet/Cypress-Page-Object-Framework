import { HomePage } from '../Pages/HomePage'
describe('Login', () => {
  it('Verify', () => {
    const page = new HomePage()
    cy.visit('https://pizzaonline.dominos.co.in/')
    // cy.xpath("//*[@data-label='my-account']").click()
    page.clickLogin()
  })
})