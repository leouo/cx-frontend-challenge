import { FC } from 'react'
import { IoCloseOutline } from "react-icons/io5"
import styles from '@/styles/Modal.module.css'

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: FC<IModal> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.modal} role="dialog" aria-modal="true">
      <header className={styles.modal__header}>
        <h3 className={styles.modal__title}>{title}</h3>
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className={styles.modal__button}
        >
          <i>
            <IoCloseOutline size={50} />
          </i>
        </button>
      </header>
      {children}
    </div>
  )
}

export default Modal
