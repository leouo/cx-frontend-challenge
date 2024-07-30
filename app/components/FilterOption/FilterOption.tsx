import { FC } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Filters.module.css'


type filterId = {
  filterId: string;
}

export interface IFilterOption {
  id: string;
  name: string;
  results: number;
}

type FilterOption = IFilterOption & filterId

export const FilterOption: FC<FilterOption> = ({ id, name, results, filterId }) => {
  const { query: { query } } = useRouter()

  return (
    <li className={styles.filter__option}>
      <a href={`\search?query=${query}&${filterId}=${id}`} className={styles.filter__link}>
        <span className={styles.filter__optionName}>{name}</span>
        <span className={styles.filter__resultsCount}>({results})</span>
      </a>
    </li>
  )
}
