import Head from 'next/head'
import styles from '@/styles/BaseLayout.module.css'
import Results from '@/components/Results'
import FiltersNav from '@/components/FiltersNav'
import { useSearch } from '../context/searchContext'

const getFilterData = filterObj => {
  const [filterData] = Object.entries(filterObj)

  return filterData || []
}

export const getServerSideProps = async context => {
  const { query, sort, ...filter } = context.query
  const [filterId, filterValue] = getFilterData(filter)

  if (query) {
    const API_URL = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&${filterId}=${filterValue}&sort=${sort}&limit=30`

    const res = await fetch(API_URL)
    
    const {
      results,
      available_sorts,
      available_filters,
    } = await res.json()

    return {
      props: {
        results: results,
        availableSorts: available_sorts,
        availableFilters: available_filters,
      },
    }
  }

  return {
    props: {
      results: [],
      availableSorts: [],
      availableFilters: [],
    },
  }
}

export default function Search() {
  const { results, availableFilters } = useSearch()

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
          <div className={styles.main__container}>
            <div className={styles['main__row--right-alignment']}>Sort Select</div>
            <div className={styles.main__row}>
              <FiltersNav availableFilters={availableFilters} />
              <Results results={results} />
            </div>
          </div>
      </main>
    </>
  )
}
