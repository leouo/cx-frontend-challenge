import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import BaseLayout from '@/components/BaseLayout'
import { SearchProvider } from '../context/searchContext'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps: { initialContext, ...pageProps } }: AppProps) {
  return (
    <SearchProvider initialValue={{ ...initialContext }}>
      <BaseLayout>
        <style jsx global>
          {`
            html {
              font-family: ${roboto.style.fontFamily};
            }
          `}
        </style>
        <Component {...pageProps} />
      </BaseLayout>
    </SearchProvider>
  )
}
