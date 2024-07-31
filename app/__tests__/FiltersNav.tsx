import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import FiltersNav from '@/components/FiltersNav'
import { textFilter, rangeFilter } from '../fixtures/search-filters'
import store from '@/store/store'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: '',
    push: jest.fn(),
    pathname: '',
  })
}))

describe('FiltersNav', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <FiltersNav availableFilters={[textFilter]} />
      </Provider>
    )

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
    render(
      <Provider store={store}>
        <FiltersNav availableFilters={[textFilter]} />
      </Provider>
    )

    const allOptions = screen.getAllByRole('listitem')

    expect(allOptions.length).toBe(3)
  })

  it('renders range filter', () => {
    render(
      <Provider store={store}>
        <FiltersNav availableFilters={[rangeFilter]} />
      </Provider>
    )

    const minField = screen.getByPlaceholderText('Mínimo')
    const maxField = screen.getByPlaceholderText('Máximo')
    const submitButton = screen.getByRole('button', { name: 'Enviar filtro' })

    expect(minField).toBeInTheDocument()
    expect(maxField).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})
