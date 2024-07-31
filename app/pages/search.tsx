import { useState, useEffect } from 'react'
import { GetServerSidePropsContext, NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import styles from '@/styles/BaseLayout.module.css'
import Results from '@/components/Results'
import SortSelect from '@/components/SortSelect'
import FiltersNav from '@/components/FiltersNav'
import SearchBar from '@/components/SearchBar'
import FiltersModal from '@/components/FiltersModal'
import SortModal from '@/components/SortModal'
import APISearchService from '../services/searchService'
import { RootState } from '@/store/store'
import { setState, initialState as storeInitialState } from '@/store/slice'

const API_SERVICE_URL = 'https://api.mercadolibre.com/sites/MLA/search'

const getFilterData = (filterObj: any) => {
  const [filterData] = Object.entries(filterObj)

  return filterData || []
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  let initialState

  const { query, sort, ...filter } = context.query
  const [filterId, filterValue] = getFilterData(filter)

  if (query) {
    const searchService = new APISearchService(API_SERVICE_URL)
    const searchResponse = await searchService.search({
      q: query as string,
      sort: sort as string,
      [filterId]: filterValue,
    })

    initialState = searchResponse
  } else {
    initialState = storeInitialState
  }

  return {
    props: {
      initialState,
    }
  }
}

interface ISearch {
  initialState: RootState;
}

export default function Search ({ initialState } : ISearch) {
  const dispatch = useDispatch()
  const [isSortModalOpen, setIsSortModalOpen] = useState(false)
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false)
  const { results, availableFilters, availableSorts, defaultSort } = useSelector((state: RootState) => state.global)

  useEffect(() => {
    dispatch(setState(initialState));
  }, [dispatch, initialState])

  const actions = [
    {
      label: 'Ordenar',
      handler: () => setIsSortModalOpen(true),
    },
    {
      label: 'Filtrar',
      handler: () => setIsFiltersModalOpen(true),
    }
  ]

  const handleFiltersModalClose = () => setIsFiltersModalOpen(false)
  const handleSortModalClose = () => setIsSortModalOpen(false)

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={styles.main__container}>
        <div className={styles.main__row}>
          <SearchBar actions={actions} />
          <FiltersModal
            isFiltersModalOpen={isFiltersModalOpen}
            onFiltersModalClose={handleFiltersModalClose}
            availableFilters={availableFilters}
          />
          <SortModal
            isSortModalOpen={isSortModalOpen}
            onSortModalClose={handleSortModalClose}
            availableSorts={availableSorts}
            defaultSort={defaultSort}
          />
        </div>
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
