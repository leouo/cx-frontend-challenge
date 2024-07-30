import { render, screen,  } from '@testing-library/react'
import Results from '@/components/Results'
import { results, resultsWithoutPrice, resultsFreeShipping } from '../fixtures/search-results'

describe('Results', () => {
  it('renders correctly', () => {
    render(<Results results={results} />)

    const searchResults = screen.getByRole('region', { name: 'Resultados de la búsqueda' })
    const productTitle = screen.getByRole('heading', { name: 'Fundas Silicone Lisas iPhone 11' })
    const productThumbnail = screen.getByRole('img', { name: 'Fundas Silicone Lisas iPhone 11' })
    const productPrice = screen.getByText('$ 8.999,00')
    const productInstallments = screen.getByText('En 3 cuotas de $ 2.999,67')

    expect(searchResults).toBeInTheDocument()
    expect(productTitle).toBeInTheDocument()
    expect(productPrice).toBeInTheDocument()
    expect(productThumbnail).toBeInTheDocument()
    expect(productInstallments).toBeInTheDocument()
  })

  it('renders price placeholder', () => {
    render(<Results results={resultsWithoutPrice} />)

    const productPricePlaceHolder = screen.getByText('Precio a convenir')

    expect(productPricePlaceHolder).toBeInTheDocument()
  })

  it('renders free shipping', () => {
    render(<Results results={resultsFreeShipping} />)

    const freeShippingIcon = screen.getByLabelText('envío gratis')

    expect(freeShippingIcon).toBeInTheDocument()
  })
})