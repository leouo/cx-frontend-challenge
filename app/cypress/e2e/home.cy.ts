describe('HomePage', () => {
  const LOCAL_URL = 'http://localhost:3000/'

  it('should display search message', () => {
    cy.visit(LOCAL_URL)
    
    cy.contains('Buscar productos, marcas y más…').should('be.visible')
  })

  it('should have search field', () => {
    cy.visit(LOCAL_URL)
    
    cy.get('input[name="query"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('should performe a search', () => {
    const searchTerm = 'iphone'

    cy.visit(LOCAL_URL)

    cy.get('input[name="query"]').type(searchTerm)
    cy.get('button[type="submit"]').click()

    cy.url().should('include', `/search?query=${searchTerm}`)
  })
})
