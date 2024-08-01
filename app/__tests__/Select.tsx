import { render, screen, fireEvent  } from '@testing-library/react'
import { Select } from '@/components/Select'

const options = [
  {
    id: 'option-01',
    name: 'Option 01',
  },
  {
    id: 'option-02',
    name: 'Option 02',
  },
]

const [defaultOption] = options

describe('Select', () => {
  it('renders correctly', () => {
    const handleSelectChangeStub = jest.fn()

    render(
      <Select
        id="test-select"
        options={options}
        defaultOption={defaultOption.id}
        onChange={handleSelectChangeStub}
      />
    )

    const select = screen.getByRole('listbox')
    const optionOne = screen.getByRole('option', { name: 'Option 01' })
    const optionTwo = screen.getByRole('option', { name: 'Option 02' })

    expect(optionOne).toBeInTheDocument()
    expect(optionTwo).toBeInTheDocument()
    expect(select).toBeInTheDocument()
  })

  it('renders default value', () => {
    const handleSelectChangeStub = jest.fn()

    render(
      <Select
        id="test-select"
        options={options}
        defaultOption={defaultOption.id}
        onChange={handleSelectChangeStub}
      />
    )

    const defaultValue = screen.getByRole('listbox', { name: 'Ordenação aplicada Option 01' })
    expect(defaultValue).toBeInTheDocument()
  })

  it('changes value', () => {
    const handleSelectChangeStub = jest.fn()

    render(
      <Select
        id="test-select"
        options={options}
        defaultOption={defaultOption.id}
        onChange={handleSelectChangeStub}
      />
    )

    expect(screen.getByRole('listbox', { name: 'Ordenação aplicada Option 01' })).toBeInTheDocument()

    const selectButton = screen.getByRole('listbox', { name: 'Ordenação aplicada Option 01' })
    fireEvent.click(selectButton)

    const optionTwo = screen.getByRole('option', { name: 'Option 02' })
    fireEvent.click(optionTwo)

    expect(screen.getByRole('listbox', { name: 'Ordenação aplicada Option 02' })).toBeInTheDocument()
  })
})
