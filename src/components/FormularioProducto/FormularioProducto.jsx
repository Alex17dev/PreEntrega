import styles from "./FormularioProducto.module.css"

function FormularioProducto( {datosForm, manejarCambio, manejarEnvio} ) {
    return (
        <form onSubmit={manejarEnvio} className={styles.contenedor}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label htmlFor="">Id: </label>
                <input type="text" name="id" onChange={manejarCambio} />
            </div>
            <div>
                <label htmlFor="nombre ">Nombre del Producto: </label>
                <input 
                    type="text"
                    name="nombre"
                    placeholder="Ej: Orquidea"
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Precio: </label>
                <input
                    type="number"
                    placeholder="Ej:95"
                    name="precio"
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock: </label>
                <input
                    type="number"
                    placeholder="Ej:5"
                    name="stock"
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Imagen: </label>
                <input type="file"/>
            </div>
            <button type="submit">Guardar Producto</button>
        </form>
    )
}

export default FormularioProducto;