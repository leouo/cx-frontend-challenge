import { FC } from 'react'
import styles from '@/styles/SearchBar.module.css'

interface ISearchBarAction {
  label: string;
  handler: () => void;
}

interface ISearchBar {
  actions: ISearchBarAction[];
}

const SearchBar: FC<ISearchBar> = ({ actions }) => {
  return (
    <div className={styles.searchBar}>
      <ul className={styles.searchBar__actions}>
        {actions.map(({ label, handler }) => (
          <li key={label} className={styles.searchBar__action}>
            <button onClick={handler} className={styles.searchBar__button}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar
