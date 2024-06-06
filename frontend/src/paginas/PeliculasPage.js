import React from "react";

import '../estilos/conponentes/paginas/PeliculasPage.css'

import { NavLink } from "react-router-dom";

const PeliculasPage = (props) =>{
    return (
        <main className="main-pelicula">
            <div className="cont-todo">
                <h1>Peliculas Disney</h1>

                <div className="cont-tarjetas"> 

                    <div className="princesas">
                        <div className="cont-img">
                        <img className="portada" src="/imgPeliculas/princesas8.jpg"></img>
                        </div>
                        <div className="texto">
                            <h3>Princesas</h3>
                            <NavLink to="/princesas" className="boton">Ver más</NavLink>
                        </div>
                    </div>

                    <div className="marvel">
                        <div className="cont-img">
                        <img className="portada" src="/imgPeliculas/Marvel.jpg"></img>
                        </div>
                        <div className="texto">
                            <h3>Marvel</h3>
                            <NavLink to="/marvel" className="boton">Ver más</NavLink>
                        </div>
                    </div>

                    <div className="pixar">
                        <div className="cont-img">
                        <img className="portada" src="/imgPeliculas/pixar3.jpg"></img>
                        </div>
                        <div className="texto">
                            <h3>Pixar</h3>
                            <NavLink to="/pixar" className="boton">Ver más</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PeliculasPage;