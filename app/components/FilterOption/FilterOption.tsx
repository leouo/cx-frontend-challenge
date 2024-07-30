import { FC } from 'react'
import Link from 'next/link'
import { useSearch } from '../../context/searchContext'
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
  const { previousQuery } = useSearch()

  return (
    <li className={styles.filter__option}>
      <Link href={`\search?query=${previousQuery}&${filterId}=${id}`} className={styles.filter__link}>
        <span className={styles.filter__optionName}>{name}</span>
        <span className={styles.filter__resultsCount}>({results})</span>
      </Link>
    </li>
  )
}
