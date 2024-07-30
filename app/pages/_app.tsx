import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '@/components/BaseLayout'
import { SearchProvider } from '../context/searchContext'

export default function App({ Component, pageProps: { results, availableSorts, availableFilters, ...pageProps } }: AppProps) {
  return (
    <SearchProvider initialValue={{ results, availableSorts, availableFilters }}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </SearchProvider>
  )
}
