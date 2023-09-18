import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) =>{

    const [nombre , actualizarNombre] = useState("");
    const [puesto , actualizarPuesto] = useState("");
    const [foto , actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (event) =>{
        event.preventDefault();
        console.log("Manejar envio");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()

        crearEquipo({titulo,  colorPrimario: color});

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
            titulo= "Nombre"  
            placeholder="Ingresar nombre" 
            required ={true} 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <CampoTexto 
            titulo= "Puesto" 
            placeholder="Ingresar puesto"
            valor={puesto}
            actualizarValor={actualizarPuesto}
            required 
            />
            <CampoTexto 
            titulo= "Foto" 
            placeholder="Ingresar enlace de foto"
            valor={foto} 
            actualizarValor={actualizarFoto}
            required
            />
            <ListaOpciones 
            titulo= "Equipo" 
            placeholder="Seleccionar equipo"
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos= {props.equipos}
            />
            <Boton 
            texto="Crear"
            />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
            titulo= "Titulo"  
            placeholder="Ingresar titulo" 
            required ={true} 
            valor={titulo} 
            actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
            titulo= "Color" 
            placeholder="Ingresar el color en Hex"
            valor={color}
            actualizarValor={actualizarColor}
            required
            type="color"
            />
            <Boton texto="Crear Equipo"></Boton>
        </form>
    </section>
}

export default Formulario;