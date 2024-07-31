import { FC } from 'react'
import { useRouter } from 'next/router'
import { IoChevronForwardCircleSharp } from 'react-icons/io5'
import styles from '@/styles/Filters.module.css'

interface IFilterRange {
  filterId: string;
}

const FilterRange: FC<IFilterRange> = ({ filterId }) => {
  const { query, push, pathname } = useRouter()
  
  const handleRangeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target
    const [min, max] = new FormData(form as HTMLFormElement).values()

    const rangeValue = `${min}-${max}`

    push({
      pathname,
      query: {
        ...query,
        price: rangeValue,
      },
    })
  }

  return (
    <form className={styles.filter__range} onSubmit={handleRangeSubmit} name={filterId}>
      <input
        type="text"
        name="min"
        placeholder="Mínimo"
        required
        pattern="^[0-9]+([,.][0-9]+)?$"
        title="Ingrese un valor válido, por ejemplo, 1234.5 o 1234.56"
        className={styles.filter__input}
      />
      <span className={styles.filter__inputSeparator}>_</span>
      <input
        type="text"
        name="max"
        placeholder="Máximo"
        required
        pattern="^[0-9]+([,.][0-9]+)?$"
        title="Ingrese un valor válido, por ejemplo, 1234.5 o 1234.56"
        className={styles.filter__input}
      />
      <button
        type="submit"
        name="range_submit"
        aria-label="Enviar filtro"
        className={styles.filter__button}
      >
        <i>
          <IoChevronForwardCircleSharp size={25} fill="#E0E0E0" />
        </i>
      </button>
    </form>
  )
}

export default FilterRange
