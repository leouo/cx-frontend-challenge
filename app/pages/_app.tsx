import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SearchProvider } from '../context/searchContext'

export default function App({ Component, pageProps: { results, availableSorts, availableFilters, ...pageProps } }: AppProps) {
  return (
    <SearchProvider initialValue={{ results, availableSorts, availableFilters }}>
      <Component {...pageProps} />
    </SearchProvider>
  )
}
