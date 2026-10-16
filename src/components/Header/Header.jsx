import styles from "./Header.module.css"
function Header() {
    return (
        <header className={styles.header}>
            
            <div className={styles.contenedor}>

                <div>
                    <h1 className={styles.logo}>
                        Lilium
                    </h1>
                    <p className={styles.subtitulo}>
                        FLores seleccionados
                    </p>
                </div> 

                <nav className={styles.nav}>
                    <a href="#" className={styles.enlace}>
                        Inicio
                    </a>
                    <a href="#" className={styles.enlace}>
                        Flores
                    </a>
                    <a href="#" className={styles.enlace}>
                        Nosotros
                    </a>
                    <a href="#" className={styles.enlace}>
                        Contacto
                    </a>
                    <a href="#"className={styles.carrito}>
                        Carrito
                    </a>
                </nav>

            </div> 
        </header>

    )
}
export default Header;
