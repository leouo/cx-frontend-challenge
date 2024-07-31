describe('SearchPage', () => {
  const SEARCH_TERM = 'iphone'
  const SEARCH_RESULT_URL = `http://localhost:3000/search?query=${SEARCH_TERM}`

  beforeEach(() => {
    cy.visit(SEARCH_RESULT_URL)
  })

  describe('on load (desktop)', () => {
    it('should display results correctly', () => {
      cy.contains('Filtros').should('be.visible')
      cy.contains('Ordenar por').should('be.visible')
    })
  
    it('should display search results', () => {
      cy.get('[data-cy="product"]').should('have.length.greaterThan', 0);
    })
  
    it('should display search term on input', () => {
      cy.get('input[name="query"]').should('have.value', SEARCH_TERM)
    })

    it('should display logo and go back on click', () => {
      cy.get('a[title="Volver a la página de inicio"]').click({ force: true })

      cy.url().should('eq', 'http://localhost:3000/')
      cy.contains('Buscar productos, marcas y más…').should('be.visible')
    })
  })

  describe('on load (mobile)', () => {
    beforeEach(() => {
      cy.viewport(320, 660)
    })

    it('should display search bar correctly', () => {
      cy.contains('Ordenar').should('be.visible')
      cy.contains('Filtrar').should('be.visible')
    })

    it('should display search results', () => {
      cy.get('[data-cy="product"]').should('have.length.greaterThan', 0);
    })
  })

  describe('filter section', () => {
    it('should filter by options', () => {
      cy.contains('h3', 'Precio')
        .next('ul')
        .find('[data-cy="filter-option"]')
        .first()
        .click()
      
      cy.url().should('include', 'price=*-')
    })

    it('should filter by range inputs', () => {
      cy.get('form[name="price"]').find('input[name="min"]').type('0')
      cy.get('form[name="price"]').find('input[name="max"]').type('19000.0')

      cy.get('form[name="price"]').find('button[type="submit"]').click()
      cy.url().should('include', `/search?query=${SEARCH_TERM}&price=0-19000.0`)
    })
  })

  describe('sort select (desktop)', () => {
    it('should list sort options', () => {
      cy.contains('button', 'Más relevantes').click()
      
      cy.contains('Menor precio').should('be.visible')
      cy.contains('Mayor precio').should('be.visible')
      cy.contains('Más relevantes').should('be.visible')
    })

    it('should display default option selected', () => {
      cy.contains('button', 'Más relevantes').click()
      
      cy.get('li[aria-selected="true"]').should('be.visible')
    })

    it('should sort products on select', () => {
      cy.contains('button', 'Más relevantes').click()
      
      cy.contains('Mayor precio').click()
      cy.url().should('include',  '/search?query=iphone&sort=price_desc')
    })
  })

  describe('sort select (mobile)', () => {
    beforeEach(() => {
      cy.viewport(320, 660)
    })

    it('should open modal and list sort options', () => {
      cy.contains('button', 'Ordenar').click()
      
      cy.contains('Menor precio').should('be.visible')
      cy.contains('Mayor precio').should('be.visible')
      cy.contains('Más relevantes').should('be.visible')
    })

    it('should sort products on select', () => {
      cy.contains('button', 'Ordenar').click()
      
      cy.contains('Mayor precio').click()
      cy.url().should('include',  '/search?query=iphone&sort=price_desc')
    })
  })
})