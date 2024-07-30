import { FC } from 'react'
import { Filter, IFilter } from '@/components/Filter'
import styles from '@/styles/Filters.module.css'

interface IFiltersNav {
  availableFilters: IFilter[];
}

const FiltersNav: FC<IFiltersNav> = ({ availableFilters }) => {
  return (
    <nav className={styles.filters}>
      <h2 className={styles.filters__title}>Filtros</h2>
      {availableFilters.map(({ values, name, type, id }) => (
        <Filter
          key={id}
          id={id}
          name={name}
          values={values}
          type={type}
        />
      ))}
    </nav>
  )
}

export default FiltersNav
