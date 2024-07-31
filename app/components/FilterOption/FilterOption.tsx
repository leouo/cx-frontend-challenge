import { FC } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import styles from '@/styles/Filters.module.css'
import { RootState } from '@/store/store'

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
  const { previousQuery } = useSelector((state: RootState) => state.global)

  return (
    <li className={styles.filter__option}>
      <Link
        href={`\search?query=${previousQuery}&${filterId}=${id}`}
        className={styles.filter__link}
        data-cy="filter-option"
      >
        <span className={styles.filter__optionName}>{name}</span>
        <span className={styles.filter__resultsCount}>({results})</span>
      </Link>
    </li>
  )
}
