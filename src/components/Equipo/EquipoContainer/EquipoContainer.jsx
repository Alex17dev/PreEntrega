import { useEffect, useState } from "react";
import EquipoList from "../EquipoList/EquipoList";
import styles from "./EquipoContainer.module.css";

function EquipoContainer({ Mensaje }) {
    const [equipos, setEquipos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/nosotros.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los contactos');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setEquipos(datos);
            })
            .catch((err) => { // <-- Corrección aquí: se usa .catch para los errores
                setError(err.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Cargando equipo, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={styles.contenedor}>
            <h1>{Mensaje}</h1>
            <EquipoList equipos={equipos} />
        </div>
    );
}

export default EquipoContainer;