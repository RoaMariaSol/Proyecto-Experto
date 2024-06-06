import React from "react";

import '../estilos/conponentes/paginas/HomePage.css'
import { Link, NavLink } from "react-router-dom";

const HomePage = (props) => {
    return (
        <main className="cont-home">
            <div>
                <img src="imgHome/castillo-home.jpg" alt="imghome" className="imghome" />
            </div>

            <div className="contenedor-fondo">
                {/* HISTORIA */}
                <div className="contenedor-historia">
                    <h1>La Hiostoria de Disney</h1>
                    <div className="flex">
                        <div className="genio">
                            <img src="/imgHome/genio-home.png" />
                        </div>
                        <div className="texto-genio">
                            <h2>El Cominezo</h2>
                            <p>La historia de Disney no sería la misma sin la figura de Walt Disney, es por lo que se comenzamos con una una breve biografía de Walt Disney. Walter Elias Disney nació el 5 de diciembre de 1901 en Chicago, Illinois. Desde pequeño le apasionaba el cine y el dibujo, por ello, aprendió la técnica del dibujo en el Instituto de Arte de Kansas City. Su primera gran creación fue Mickey Mouse cuya idea le surgió en un viaje de tren de Hollywood a Nueva York.
                                <br></br><br></br>
                                En 1937 produjo el primer largometraje de dibujos animados de la historia del cine, Blancanieves y los siete enanitos. Durante años realizó películas hasta que en 1953 confió en la televisión para difundir sus productos. Su primera película con actores reales fue Mary Poppins en 1964. Walt Disney fue galardonado con veintinueve Oscars. En 1966 falleció víctima de un cáncer de pulmón.
                                <br></br><br></br>
                                Varias personas intentaron sustituirle, aun así la única persona que demostró ser digno sucesor fue el productor ejecutivo Michael Eisner.</p>
                            <h2>El Concepto</h2>
                            <p>Disney es mucho más que películas, series infantiles y parques temáticos. Disney representa diversión, ilusión y amor. Y la marca es consciente de esto y de su influencia en el mundo infantil.
                                <br></br><br></br>
                                Pero, ¿Qué lo hace mágico?, ¿Por qué se ha convertido en un referente a nivel mundial en cuanto a su modo de gestión y liderazgo para transformarse en una empresa líder? Todo esto lo veremos en este artículo con el fin de aprender de las grandes empresas.
                            </p>
                            <h2>El Primer Parque</h2>
                            <p>El primero fue el primer parque de atracciones de The Walt Disney Company, abierto el 17 de julio de 1955, inaugurado por el propio Walt Disney y presidido por el Castillo de La Bella Durmiente. Cuenta con atracciones clásicas y muy populares como It's a Small World, Big Thunder Mountain, Space Mountain, Mickey & Minnie’s Runaway Railway, la terrorífica Haunted Mansion y la zona temática de Star Wars Galaxy’s Edge. También con la más reciente zona dedicada a Mickey Mouse llamada Mickey’s Toontown, orientada a las familias y con atracciones 3D.</p>
                        </div>

                    </div>

                </div>




                {/* NOTICIAS */}
                <div id="contenedor-noticias" className="contenedor-noticias">
                    <h1>Noticias</h1>
                    <div className="with-noticias">
                        <div to="/wakanda" id="tarjeta-noticia" className="tarjeta-noticia">
                            <div className="izquierda">
                                <p>21 Ene</p>
                                <p>Noticias Marvel</p>
                            </div>
                            <div className="centro">
                                <div className="centro-img">
                                    <img src="imgNoticias/noticia-wakanda1.jpeg" />
                                </div>
                                <h4>Regreso a Wakanda en Black Panther: Wakanda Forever de Marvel Studios</h4>
                            </div>
                            <div className="derecha">
                                <NavLink to="/wakanda">Leer más</NavLink>
                            </div>
                        </div>

                        <div id="tarjeta-noticia" className="tarjeta-noticia">
                            <div class="izquierda">
                                <p>26 Sep</p>
                                <p>Noticias Disney+</p>
                            </div>
                            <div className="centro">
                                <div className="centro-img">
                                    <img src="/imgNoticias/noticias-dato1.jpeg" />
                                </div>
                                <h4>¡5 datos curiosos sobre los coches de Disney y Pixar en el camino! </h4>
                            </div>
                            <div className="derecha">
                                <NavLink to="/datos">Leer más</NavLink>
                            </div>
                        </div>

                        <div id="tarjeta-noticia" className="tarjeta-noticia">
                            <div class="izquierda">
                                <p>3 May</p>
                                <p>Noticias Disney</p>
                            </div>
                            <div className="centro">
                                <div className="centro-img">
                                    <img src="/imgNoticias/noticia-wish1.jpeg" />
                                </div>

                                <h4>Make-A-Wish celebra 150.000 deseos de Disney en el Día Mundial de los Deseos</h4>
                            </div>
                            <div class="derecha">
                                <NavLink to="/wish">Leer más</NavLink>
                            </div>
                        </div>

                        <div id="tarjeta-noticia" className="tarjeta-noticia">
                            <div class="izquierda">
                                <p>15 May</p>
                                <p>Noticias Películas</p>
                            </div>
                            <div className="centro">
                                <div className="centro-img">
                                    <img src="imgNoticias/noticia-avatar1.png" />
                                </div>

                                <h4>Avatar: The Way of Water llega a Disney+ el 7 de junio</h4>
                            </div>
                            <div className="derecha">
                                <NavLink to="/avatar">Leer más</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;