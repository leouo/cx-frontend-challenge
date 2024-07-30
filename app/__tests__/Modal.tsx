import { useState } from 'react'
import { render, screen, fireEvent  } from '@testing-library/react'
import Modal from '@/components/Modal'

const ModalWrapper = ({ children, ...args}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose} {...args}>
        {children}
      </Modal>
    </>
  )
}

describe('Modal', () => {
  it('should open correctly', () => {
    render(
      <ModalWrapper title="Modal Test">
        <p>Modal Content</p>
      </ModalWrapper>
    )

    const openModalButton = screen.getByRole('button', { name: 'Open Modal' })
    fireEvent.click(openModalButton)

    const modalHeader = screen.getByRole('heading', { name: 'Modal Test', level: 3 })
    const closeModalButton = screen.getByRole('button', { name: 'Close modal' })
    const modalContent = screen.getByText('Modal Content')

    expect(modalHeader).toBeInTheDocument()
    expect(modalContent).toBeInTheDocument()
    expect(closeModalButton).toBeInTheDocument()
  })

  it('should close correctly', () => {
    render(
      <ModalWrapper title="Modal Test">
        <p>Modal Content</p>
      </ModalWrapper>
    )

    const openModalButton = screen.getByRole('button', { name: 'Open Modal' })
    fireEvent.click(openModalButton)

    const modalContent = screen.getByText('Modal Content')
    expect(modalContent).toBeInTheDocument()

    const closeModalButton = screen.getByRole('button', { name: 'Close modal' })
    fireEvent.click(closeModalButton)

    expect(modalContent).not.toBeInTheDocument()
  })
})
