import { render, screen } from '@testing-library/react'
import FiltersNav from '@/components/FiltersNav'
import { textFilter, rangeFilter } from '../fixtures/search-filters'

describe('FiltersNav', () => {
  it('renders correctly', () => {
    render(<FiltersNav availableFilters={[textFilter]} />)

    const allOptions = screen.getAllByRole('listitem')

    const optionWithResults = screen.getByRole('link', {
      name: 'Celulares y Smartphones (8)',
    })

    const navHeader = screen.getByRole('heading', {
      level: 2,
      name: 'Filtros',
    })

    expect(navHeader).toBeInTheDocument()
    expect(optionWithResults).toBeInTheDocument()
    expect(allOptions.length).toBe(3)
  })

  it('renders text filter', () => {
    render(<FiltersNav availableFilters={[textFilter]} />)

    const allOptions = screen.getAllByRole('listitem')

    expect(allOptions.length).toBe(3)
  })

  it('renders range filter', () => {
    render(<FiltersNav availableFilters={[rangeFilter]} />)

    const minField = screen.getByPlaceholderText('Mínimo')
    const maxField = screen.getByPlaceholderText('Máximo')
    const submitButton = screen.getByRole('button', { name: 'Submeter filtro' })

    expect(minField).toBeInTheDocument()
    expect(maxField).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})
