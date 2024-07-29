import Head from 'next/head'
import Header from '@/components/Header'
import styles from '@/styles/Search.module.css'

export default function Search() {
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
            <div className={styles.main__row}>Filters, Products</div>
          </div>
      </main>
    </>
  )
}