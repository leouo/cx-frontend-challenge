import Image from 'next/image'
import { IoSearchOutline } from 'react-icons/io5'
import styles from '@/styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div className={styles.navBar__logo}>
          <Image src="/logo.png" alt="Logotipo de Mercado Libre" fill priority />
        </div>
        <form action="/" className={styles.searchBar}>
          <input
            name="query"
            type="search"
            role="search"
            placeholder="Buscar productos, marcas y más…"
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
