import { FC } from 'react'
import { HiOutlineTruck } from 'react-icons/hi'
import styles from '@/styles/Results.module.css'

export interface IProduct {
  id?: string;
  title: string;
  thumbnail: string;
  installments: {
    quantity: number;
    amount: number;
  } | null;
  price: number | null;
  shipping: {
    free_shipping: boolean;
  };
}

const formatPrice = (price: number) => price.toLocaleString('es-AR', {
  style: 'currency',
  currency: 'ARS',
})

const FreeShippingIcon = () => (
  <div className={styles.product__shippingIcon} aria-label="envío gratis">
    <HiOutlineTruck fill="#20D761" stroke="#333" size={10} />
  </div>
)

export const Product: FC<IProduct> = ({ title, thumbnail, installments, price, shipping }) => {
  return (
    <article className={styles.product}>
      <figure>
        <img className={styles.product__thumbnail} src={thumbnail} alt={title} />
      </figure>
      <div className={styles.product__content}>
        <data className={styles.product__price}>
          {price ? formatPrice(price) : 'Precio a convenir'}
          {shipping?.free_shipping ? <FreeShippingIcon /> : null}
        </data>
        <h2 className={styles.product__title}>{title}</h2>
        {installments ? <p className={styles.product__installments}>En {installments?.quantity} cuotas de {formatPrice(installments?.amount)}</p> : null}
      </div>
    </article>
  )
}
