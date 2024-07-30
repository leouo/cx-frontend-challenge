import { createContext, useContext, useState, useEffect } from 'react';

const SearchContext = createContext()

export const SearchProvider = ({ children, initialValue }) => {
  const [searchResponse, setSearchResponse] = useState(initialValue)

  useEffect(() => {
    setSearchResponse(initialValue)
  }, [initialValue])

  return (
    <SearchContext.Provider value={{ ...searchResponse, setSearchResponse }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
