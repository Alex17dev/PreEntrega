import TarjetaEquipo from "../TarjetaEquipo/TarjetaEquipo.jsx";
import styles from "./EquipoList.module.css";

function EquipoList({ equipos }) {
    return (
        <ul className={styles.contenedorCards}>
            {equipos.map((equipo) => (
                <TarjetaEquipo key={equipo.id} {...equipo} />
            ))}
        </ul>
    );
}

export default EquipoList;