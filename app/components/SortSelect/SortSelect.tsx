import React, { FC } from 'react'
import { Select, ISelectOption } from '@/components/Select'
import { useRouter } from 'next/router'
import styles from '@/styles/SortSelect.module.css'

interface ISortSelect {
  availableSorts: ISelectOption[];
  defaultSort: ISelectOption;
}

const SortSelect: FC<ISortSelect> = ({ availableSorts, defaultSort }) => {
  const { query, push, reload, pathname, ...otherThiongs } = useRouter()

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
    <label className={styles.sortLabel} htmlFor="sort-select">Ordenar por</label>
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
