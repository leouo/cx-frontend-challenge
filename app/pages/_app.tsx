import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '@/components/BaseLayout'
import { SearchProvider } from '../context/searchContext'

export default function App({ Component, pageProps: { initialContext, ...pageProps } }: AppProps) {
  return (
    <SearchProvider initialValue={{ ...initialContext }}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </SearchProvider>
  )
}
