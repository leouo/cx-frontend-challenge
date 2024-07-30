import Head from 'next/head'
import Header from '@/components/Header'
import styles from '@/styles/Search.module.css'
import Results from '@/components/Results'
import { useSearch } from '../context/searchContext'

export const getServerSideProps = async context => {
  const { query } = context.query

  if (query) {
    const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&sort=%7BSORT_ID%7D&price=3000.0-9500.0&limit=30`)
    
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
  const { results } = useSearch()

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className={styles.main}>
          <div className={styles.main__container}>
            <div className={styles['main__row--right-alignment']}>Sort Select</div>
            <div className={styles.main__row}>
              <Results results={results} />
            </div>
          </div>
      </main>
    </>
  )
}