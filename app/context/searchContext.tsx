import { createContext, useContext, useState, useEffect, FC } from 'react'
import { ISelectOption } from '@/components/Select'
import { IProduct } from '@/components/Product'
import { IFilter } from '@/components/Filter'

export interface ISearchContext {
  previousQuery: string;
  results: IProduct[];
  availableFilters: IFilter[];
  availableSorts: ISelectOption[];
  defaultSort: ISelectOption;
}

interface ISearchProvider {
  children: React.ReactNode;
  initialValue: ISearchContext;
}

export const defaultContextValue = {
  previousQuery: '',
  results: [],
  availableFilters: [],
  availableSorts: [],
  defaultSort: {
    id: '',
    name: '',
  },
}

const SearchContext = createContext<ISearchContext>(defaultContextValue)

export const SearchProvider: FC<ISearchProvider> = ({ children, initialValue }) => {
  const [searchResponse, setSearchResponse] = useState(initialValue)

  useEffect(() => {
    setSearchResponse(initialValue)
  }, [initialValue])

  return (
    <SearchContext.Provider value={{ ...searchResponse }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
