import { FC } from 'react'
import styles from '@/styles/BaseLayout.module.css'
import Header from '@/components/Header'

interface IBaseLayout {
  children: React.ReactNode;
}

const BaseLayout: FC<IBaseLayout> = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>
      {children}
    </main>
  </>
)

export default BaseLayout
