import Head from 'next/head'
import baseLayout from '@/styles/BaseLayout.module.css'
import home from '@/styles/Home.module.css'

export default function Search() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={baseLayout.main}>
        <p className={home.searchHint}>Buscar productos, marcas y más…</p>
      </main>
    </>
  )
}
