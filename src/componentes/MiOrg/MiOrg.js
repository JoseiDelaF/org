import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{
    //const [nombreVariable, funcionActualiza] = useState(valor inicial)
    //const [nombre, actualizarNombre] = useState()

    //const [mostrar, actualizarMostrar ] =  useState(true);

    /*const manejarClick = () =>{
        console.log("Mostrar/Ocultar elemento")
        actualizarMostrar(!mostrar);
    }*/

    return <section className="orgSection">
        <h3 className="tittle">Mi organización</h3>
        <img src='./img/add.png' alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg;