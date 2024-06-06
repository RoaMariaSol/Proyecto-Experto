import React from "react";

import '../estilos/conponentes/paginas/MarvelPage.css';

const MarvelPage = (props) => {
    return (
        <main className="main-princesas">
            <div className="cont-portada-princesa">
                <img className="portada-princesa" src="/imgPeliculas/marvel-portada.jpg"></img>
            </div>

            <div className="primer-marvel">
                <div className="primer-flex">

                    <div className="spiderman-img">
                        <img src="/imgPeliculas/spiderman.jpg"></img>
                    </div>

                    <div className="texto2">
                        <h3>El Origen de</h3>
                        <h1>Los Vengadores</h1>
                        <p>
                            Los Vengadores nacen en 1963 de la mente de Stan Lee y Jack Kirby, como respuesta a la famosa Liga de la Justicia de DC cómic que, por aquel entonces, acaparaba todos los números uno en los rankings de ventas. Aunque hay que destacar que, a diferencia de La Liga de la Justicia, donde sus integrantes eran lo más de lo más de DC (Superman, Batman, WonderWoman…), Los Vengadores que Stan y Jack escogieron para su colección no eran superestrellas de la editorial.
                            <br></br><br></br>
                            No en vano se trataba del grupo más dispar que se había formado hasta la fecha, con Iron Man (que debía sus poderes a la tecnología), Thor (una deidad asgariana), Hulk (una mole de poder y furia incontrolable), El Hombre Hormiga (científico transformado en héroe) y La Avispa (pareja del Hombre Hormiga que obtiene sus poderes de su ciencia). Por aquel entonces, Los Vengadores era una apuesta muy arriesgada con héroes muy raros para la época y tachados de solitarios, obligados por las circunstancias a trabajar en equipo.
                        </p>
                    </div>
                </div>
            </div>

            <div className="galeria-marvel">
                <div className="gale-img">
                    <img src="/imgPeliculas/groot.png"></img>
                </div>
                <div className="galeria2">
                    <div className="renglon-gale">
                        <img src="/imgPeliculas/marvel1.jpg"></img>
                        <img src="/imgPeliculas/marvel2.jpg"></img>
                        <img src="/imgPeliculas/marvel3.jpg"></img>
                    </div>
                    <div className="renglon-gale">
                        <img src="/imgPeliculas/marvel4.jpg"></img>
                        <img src="/imgPeliculas/marvel5.jpg"></img>
                        <img src="/imgPeliculas/marvel6.jpg"></img>
                    </div>
                </div>
            </div>

            <div className="guardianes-cont">
                <div className="texto-guardianes">
                    <h1>Guardianes de la galaxia</h1>
                    <p>
                    Aventura espacial de proporciones épicas y repleta de acción que amplía el Universo Cinematográfico de Marvel. En esta ocasión, el temerario aventurero Peter Quill es objeto de un implacable cazarrecompensas después de robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuya ambición amenaza todo el universo. Para poder escapar del incansable Ronan, Quill se ve obligado a pactar una complicada tregua con un cuartero de disparatados inadaptados: Rocket, un mapache armado con un rifle, Groot, un humanoide con forma de árbol, la letal y enigmática Gamora y el vengativo Drax the Destroyer. Pero cuando Quill descubre el verdadero poder de la esfera, deberá hacer todo lo posible para derrotar a sus extravagantes rivales en un intento desesperado de salvar el destino de la galaxia.
                    </p>
                </div>
                <div className="guardianes-img">
                    <img src="/imgPeliculas/guardianes.jpg"></img>
                </div>
            </div>

        </main>
    )
}

export default MarvelPage;