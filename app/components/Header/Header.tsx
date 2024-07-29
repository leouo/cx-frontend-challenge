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
                <div className={styles.searchBar}>
                    <input
                        className={styles.searchBar__input}
                        type="search"
                        placeholder="Buscar productos, marcas y más…"
                    />
                    <button className={styles.searchBar__button} type="submit">
                        <i>
                            <IoSearchOutline size={20} />
                        </i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
