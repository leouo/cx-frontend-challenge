import { FC } from 'react'
import { Product, IProduct } from '@/components/Product'
import styles from '@/styles/Results.module.css'

interface IResults {
  results: IProduct[];
}

const Results: FC<IResults> = ({ results }) => {
  return (
    <section className={styles.results} aria-label="Resultados de la búsqueda">
      {results.map(({ id, title, thumbnail, installments, price, shipping }) => (
        <Product
          key={id}
          title={title}
          thumbnail={thumbnail}
          installments={installments}
          price={price}
          shipping={shipping}
        />
      ))}
    </section>
  )
}

export default Results
