import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { IoSearchOutline } from 'react-icons/io5'
import styles from '@/styles/Header.module.css'

const Header = () => {
  const { previousQuery } = useSelector((state: RootState) => state.global)

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div className={styles.navBar__logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Logotipo de Mercado Libre" fill priority />
          </Link>
        </div>
        <form action="/search" className={styles.searchBar}>
          <input
            name="query"
            type="search"
            role="search"
            placeholder="Buscar productos, marcas y más…"
            defaultValue={previousQuery}
            className={styles.searchBar__input}
          />
          <button className={styles.searchBar__button} type="submit">
            <i>
              <IoSearchOutline size={20} />
            </i>
          </button>
        </form>
      </nav>
    </header>
  )
}

export default Header
