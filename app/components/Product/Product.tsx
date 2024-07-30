import { FC } from 'react'
import styles from '@/styles/Results.module.css'

export interface IProduct {
    id?: string;
    title: string;
    thumbnail: string;
    installments: {
        quantity: number;
        amount: number;
    } | null;
    price: number;
    freeShipping?: boolean;
}

const formatPrice = (price: number) => price.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })

export const Product: FC<IProduct> = ({ title, thumbnail, installments, price, freeShipping }) => {
    return (
        <article className={styles.product}>
            <figure>
                <img className={styles.product__thumbnail} src={thumbnail} alt={title} />
            </figure>
            <div className={styles.product__content}>
                <data className={styles.product__price}>{formatPrice(price)}</data>
                <h2 className={styles.product__title}>{title}</h2>
                {installments ? <p className={styles.product__installments}>En {installments?.quantity} cuotas de {formatPrice(installments?.amount)}</p> : null}
            </div>
        </article>
    )
}
