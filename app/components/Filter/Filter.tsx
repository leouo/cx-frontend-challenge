import { FC } from 'react'
import FilterRange from '@/components/FilterRange'
import { FilterOption, IFilterOption } from '@/components/FilterOption'
import styles from '@/styles/Filters.module.css'

export interface IFilter {
  id: string;
  name: string;
  type: string;
  values: IFilterOption[];
}

const handleRangeSubmit = () => null

export const Filter: FC<IFilter> = ({ id, name, type, values: options }) => {
  return (
    <section className={styles.filter}>
      <h3 className={styles.filter__name}>{name}</h3>
      <ul className="filter__options">
        {options.map(({ id: optionId, results: results, name }) => (
          <FilterOption
            key={optionId}
            name={name}
            filterId={id}
            id={optionId}
            results={results}
          />
        ))}
      </ul>
      {type === 'range' ? <FilterRange onRangeSubmit={handleRangeSubmit} /> : null}
    </section>
  )
}
