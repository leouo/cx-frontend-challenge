import { createContext, useContext, useState } from 'react';

const SearchContext = createContext()

export const SearchProvider = ({ children, initialValue }) => {
  const [searchResponse, setResults] = useState(initialValue)

  return (
    <SearchContext.Provider value={{ ...searchResponse, setResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext)
