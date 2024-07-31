import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Select, ISelectOption } from '@/components/Select'
import styles from '@/styles/SortSelect.module.css'

interface ISortSelect {
  availableSorts: ISelectOption[];
  defaultSort: ISelectOption;
}

const SortSelect: FC<ISortSelect> = ({ availableSorts, defaultSort }) => {
  const { query, push, pathname } = useRouter()

  const handleSelectChange = (selectedOption: string) => {
    push({
      pathname,
      query: {
        ...query,
        sort: selectedOption,
      },
    })
  }

  return (
    <div className={styles.sortSelect}>
      <label
        className={styles.sortLabel}
        htmlFor="sort-select"
        aria-label="Ordenar por"
      >
        Ordenar por
      </label>
      <Select
        id="sort-select"
        options={availableSorts}
        defaultOption={defaultSort.id}
        onChange={handleSelectChange}
      />
    </div>
  )
}

export default SortSelect
