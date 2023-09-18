import "./ListaOpciones.css";

const ListaOpciones = (props) =>{

    

    const manejarCabio = (e) =>{
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCabio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;