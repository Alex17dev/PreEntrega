import { useState } from "react";
import styles from "./TarjetaProductos.module.css";

function TarjetaProductos({imagen, nombre, precio, stock }) {

    const [cantidad, SetCantidad] = useState(0);

    const [esFavorito, setEsFavorito] = useState(false);

    const incrementar = () => {
        if (cantidad < stock) {
            SetCantidad(cantidad + 1);
        };
    };

    const decrementar = () => {
        if (cantidad > 1) {
            SetCantidad(cantidad - 1)
        };
    };

    const agregarAlCarrito = () => {
        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`)
    }

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito)
    }



    return (
        <div className={styles.card}>
            <img src={imagen} alt={nombre} />
            <div className={styles.cardTitle}>
                <h3>{nombre}</h3>
                <span
                    className={styles.favorito}
                    onClick={marcarComoFavorito}
                >
                    {esFavorito ? "⭐" : "✰"}
                </span>
            </div>
            <div className={styles.cardInfo}>
                <p className={styles.precio}>Precio: ${precio}</p>
                <p className={styles.stock}>Stock disponible: {stock}</p>
                <div className={styles.cardbtn}>
                    <button onClick={decrementar}>-</button>
                    <p>{cantidad}</p>
                    <button onClick={incrementar}>+</button>
                </div>
            </div>
            <button onClick={agregarAlCarrito} className={styles.cardAgregarBtn}>Agregaste al carrito</button>
        </div>
        
    );
}

export default TarjetaProductos