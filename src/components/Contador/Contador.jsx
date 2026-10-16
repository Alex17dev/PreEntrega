import { useState } from "react";
import styles from "./Contador.module.css"

export function Contador() {

    const [contador, SetContador] = useState(0);

    const incrementar = () => {
        SetContador(contador + 1);
    };
    
    const decrementar = () => {
        SetContador(contador - 1);
    };

    return (
        <div className={styles.contenedor}>
            <h3>Contador de Ejemplo</h3>
            <p>Valor actual: {contador}</p>
            <button onClick={incrementar}>Sumar + 1</button>
            <button onClick={decrementar}>restar - 1</button>
        </div>
    )
};