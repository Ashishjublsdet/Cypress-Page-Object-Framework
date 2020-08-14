import { HomePage } from '../Pages/HomePage'
describe('Login', () => {
  it('Verify', () => {
    const page = new HomePage()
    cy.visit('https://www.flipkart.com/')
    page.searchProducts()
    page.clickSearchIcon()
  })
})