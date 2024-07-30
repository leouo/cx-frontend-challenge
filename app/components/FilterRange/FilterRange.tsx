import { FC } from 'react'
import { IoChevronForwardCircleSharp } from 'react-icons/io5'
import styles from '@/styles/Filters.module.css'

interface IFilterRange {
  onRangeSubmit: () => null
}

const FilterRange: FC<IFilterRange> = ({ onRangeSubmit }) => {
  return (
    <form className={styles.filter__range}>
      <input type="text" name="range_min" placeholder="Mínimo" className={styles.filter__input} />
      <span className={styles.filter__inputSeparator}>_</span>
      <input type="text" name="range_max" placeholder="Máximo" className={styles.filter__input} />
      <button
        type="submit"
        name="range_submit"
        aria-label="Submeter filtro"
        className={styles.filter__button}
        onClick={onRangeSubmit}
      >
        <i>
          <IoChevronForwardCircleSharp size={25} fill="#E0E0E0" />
        </i>
      </button>
    </form>
  )
}

export default FilterRange