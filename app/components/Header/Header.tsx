import Image from 'next/image'
import { useRouter } from 'next/router'
import { IoSearchOutline } from 'react-icons/io5'
import styles from '@/styles/Header.module.css'

const Header = () => {
  const { query: { query } } = useRouter()

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div className={styles.navBar__logo}>
          <a href="/">
            <Image src="/logo.png" alt="Logotipo de Mercado Libre" fill priority />
          </a>
        </div>
        <form action="/search" className={styles.searchBar}>
          <input
            name="query"
            type="search"
            role="search"
            placeholder="Buscar productos, marcas y más…"
            defaultValue={query}
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
