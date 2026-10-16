import TarjetaProductos from "../TarjetaProductos/TarjetaProductos"
import styles from "./ProductosList.module.css"

function ProductosList({ productos }) {
    return (
        <div className={styles.contenedor}>
            {productos.map(producto => (
                <TarjetaProductos key={producto.id} {...producto} />
            ))}
        </div>
    )
}

export default ProductosList