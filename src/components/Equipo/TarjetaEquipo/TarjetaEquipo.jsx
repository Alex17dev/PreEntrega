import styles from "./TarjetaEquipo.module.css";

function TarjetaEquipo({ imagen, nombre, puesto, email }) {
    return (
        <li className={styles.contenedorCard}>
            <img src={imagen} alt={nombre} />
            <h2>Nombre: {nombre}</h2>
            <p>Puesto: {puesto}</p>
            <p>Email: {email}</p>
        </li>
    );
}

export default TarjetaEquipo;