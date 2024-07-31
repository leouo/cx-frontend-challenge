import { FC } from 'react'
import Link from 'next/link'
import Modal from '@/components/Modal'
import { IFilter } from '@/components/Filter'
import { IoChevronDown } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import styles from '@/styles/FiltersModal.module.css'

interface IFiltersModal {
  isFiltersModalOpen: boolean;
  onFiltersModalClose: () => void;
  availableFilters: IFilter[];
}

const FiltersModal: FC<IFiltersModal> = ({ isFiltersModalOpen, onFiltersModalClose, availableFilters }) => {
  const { previousQuery } = useSelector((state: RootState) => state.global)

  return (
    <Modal
      isOpen={isFiltersModalOpen}
      onClose={onFiltersModalClose}
      title="Filtros"
    >
      <>
        {availableFilters.map(({ values: filterOptions, name: filterName, id: filterId }) => (
          <details key={filterId} className={styles.filter}>
            <summary className={styles.filter__name}>
              <span>{filterName}</span>
              <IoChevronDown className={styles.select__icon} stroke="#3483FA" size={16} />
            </summary>
            <ul className={styles.filter__content}>
              {filterOptions.map(({ id, name }) => (
                <li key={id}>
                  <Link
                    href={`\search?query=${previousQuery}&${filterId}=${id}`}
                    className={styles.filter__option}
                    onClick={onFiltersModalClose}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </>
    </Modal>
  )
}

export default FiltersModal
