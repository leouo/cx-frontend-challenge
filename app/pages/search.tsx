import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import styles from '@/styles/BaseLayout.module.css'
import Results from '@/components/Results'
import SortSelect from '@/components/SortSelect'
import FiltersNav from '@/components/FiltersNav'
import { useSearch } from '../context/searchContext'

const getFilterData = (filterObj: any) => {
  const [filterData] = Object.entries(filterObj)

  return filterData || []
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query, sort, ...filter } = context.query
  const [filterId, filterValue] = getFilterData(filter)

  if (query) {
    const API_URL = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&${filterId}=${filterValue}&sort=${sort}&limit=30`

    const res = await fetch(API_URL)

    const {
      query: previousQuery,
      results,
      available_sorts: availableSorts,
      sort: defaultSort,
      available_filters: availableFilters,
      filters: [selectedFilter],
    } = await res.json()

    return {
      props: {
        initialContext: {
          previousQuery,
          results: results,
          availableSorts: [...availableSorts, defaultSort],
          defaultSort,
          availableFilters,
          selectedFilter,
        },
      },
    }
  }

  return {
    props: {
      initialContext: {
        previousQuery: '',
        results: [],
        availableSorts: [],
        defaultSort: {},
        availableFilters: [],
        selectedFilter: {},
      },
    }
  }
}

export default function Search() {
  const { results, availableFilters, availableSorts, defaultSort } = useSearch()

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={styles.main__container}>
        <div className={styles['main__row--right-alignment']}>
          <SortSelect
            availableSorts={availableSorts}
            defaultSort={defaultSort}
          />
        </div>
        <div className={styles.main__row}>
          <FiltersNav availableFilters={availableFilters} />
          <Results results={results} />
        </div>
      </div>
    </>
  )
}
