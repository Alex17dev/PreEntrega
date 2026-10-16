import ProductosList from "../ProductosList/ProductosList";
import styles from "./ProductosContainer.module.css";
import { useState, useEffect } from "react";

function ProductosContainer({ Mensaje }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/productos.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos); 
            })
            .catch((error) => { 
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={styles.contenedor}>
            <p className={styles.contenedortext}>SELECIÓN DE FLORES</p>
            <h1 className={styles.subtitulo}>{Mensaje}</h1>
            <p>Podes disfrutar de nuestras flores hawaianas.</p>
            <div className={styles.productos}>
                <ProductosList productos={productos} />
            </div>
        </div>
    );
}

export default ProductosContainer;