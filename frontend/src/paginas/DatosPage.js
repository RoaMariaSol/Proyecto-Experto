import React from "react";

import '../estilos/conponentes/paginas/NoticiaEstatica.css';
import Insta from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter-x.svg';

const DatosPage = (props) => {
    return (
        <main className="main-noticia">
            <div className="noticia-top">
                <div className="titulos-etc">
                    <div className="titulos">
                        <h3>Noticias Disney+</h3>
                        <h1>¡5 datos curiosos sobre los coches de Disney y Pixar en el camino!</h1>
                    </div>

                    <div className="etc">
                        <div className="usuario">
                            <img src="/imgNoticias/usuario4.jpeg" alt="" />

                            <div className="texto">
                                <p>Tina Pollck</p>
                                <p>Colaburadora de noticias Disney</p>
                            </div>
                        </div>
                        <div className="redes">
                            <div className="icono">
                                <img src={Insta}></img>
                            </div>
                            <div className="icono">
                                <img src={Facebook}></img>
                            </div>
                            <div className="icono">
                                <img src={Twitter}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="noticia-centro">
                <h4>¡Acelera tus motores, fanáticos de Cars! La querida franquicia de Pixar está de regreso a lo grande, con una nueva serie llamada Cars on the Road , que ahora se transmite en Disney+. Cars on the Road reúne a la audiencia con los favoritos de los fanáticos Lightning McQueen (Owen Wilson) y Mater (Larry the Cable Guy).</h4>
                <p> Todo comienza cuando Mater es invitado a la boda de su hermana, lo que provoca un épico viaje por carretera a través del país, ¡en el que su mejor amigo, Rayo McQueen, está más que feliz de acompañarlo! Desde un viaje a un hotel embrujado, un paseo por el circo y una aventura musical con temática de camión, las travesuras de Mater y McQueen seguramente deleitarán tanto a los devotos de Cars como a los nuevos fanáticos.
                    <br></br><br></br>
                    Pudimos escuchar todo sobre la serie de la mano de los directores Steve Purcell, Brian Fee y Bobby Podesta, así como del productor Marc Sondheimer y el propio Mater, ¡Larry the Cable Guy! Aquí hay algunos datos divertidos sobre la realización del programa que aprendimos.</p>
                <h2>1. ¡La serie se inspiró en un viaje por carretera de la vida real!</h2>
                <p>
                    Uno de los directores de Cars on the Road , Steve Purcell, compartió la historia de un viaje por carretera que él y su familia hicieron por todo el país cuando tenía 8 años y pensó que sería la manera perfecta de posicionar las aventuras de Mater. y Rayo McQueen. “Al crear esta serie y escribir estas historias, sentí como una gran oportunidad crear algo que fuera una especie de modular en el sentido de que cada parada en el camino pudiera ser una ubicación totalmente nueva, una sensibilidad totalmente nueva y un conjunto de personajes totalmente nuevo. ," el compartió.
                </p>
                <h2>2. Todos los directores tienen historia con la franquicia Cars .</h2>
                <p>
                    Ver Cars on the Road deja claro que se puso mucho amor y experiencia en la serie, ¡y tiene sentido que haya sido creada por ex alumnos de la franquicia Cars! Steve Purcell y Brian Fee fueron artistas de la historia de Cars, ¡luego Fee pasó a dirigir Cars 3! Y, por supuesto, Bobby Podesta aportó su experiencia en animación de su época como director de animación en Cars y supervisor de animación en Cars 3.
                    <br></br><br></br>
                    Brian dijo: “Los tres volvemos a los primeros Cars. Entonces, está en nuestro ADN. Está en nuestra sangre... Todos estamos muy arraigados en estos personajes. Es como si estos personajes fueran parte de nuestra familia y todos los entendiéramos en ese nivel... Y tenemos huellas digitales ligeramente diferentes y formas ligeramente diferentes de entrar. Y creo que todos, a pesar de que cada director toma el mando y pone sus huellas digitales por todas partes. En cierto modo, dependemos unos de otros para ayudar a llenar los vacíos y mejorarlo”.
                </p>
                <h2>3. ¡Esté atento a los huevos de Pascua!</h2>
                <p>Todo gran proyecto de Pixar tiene algunos huevos de Pascua ocultos, ¡y Cars on the Road no es una excepción! ¡El productor Marc Sondheimer revela que el camión de Pizza Planet se puede ver a lo largo de toda la serie en cada episodio! ¡Pero también hay algunos detalles a los que debes prestar atención! Bobby Podesta bromea: “Una cosa a la que nuestra audiencia debe prestar atención [son] los créditos y la música. Nuestro compositor Jake Monaco tomó nuestro tema principal y creó una versión diferente para cada episodio de los créditos al estilo del programa. Y es una pieza de música bastante sorprendente la que hay ahí. Así que hay algo para ti desde el principio hasta el final". Sondheimer añade: "¡Además, podrás ver los créditos y ver a toda la gente maravillosa que trabajó en ello!".</p>
                <h2>4. ¡Cada director tenía algo que los emocionó al verlo cobrar vida en la animación final!</h2>
                <p>Obviamente, uno de los mejores momentos al crear un espectáculo es ver el producto terminado por el que tanto trabajaste. Bobby Podesta no dudó en hacernos saber que su episodio musical “Trucks” fue un gran momento de inmediato: “[El episodio] fue tan exagerado y muy divertido, y tan diferente a todo en lo que había trabajado. el mundo de los automóviles que seguimos impulsándolo y impulsándolo. Y luego pensamos que habíamos terminado, y luego lo presionamos un poco más”.
                    <br></br><br></br>
                    A Steve Purcell también le encantó jugar con el medio de animación e impulsarlo un poco más. En su episodio "Dino Park", una secuencia de sueños de Mater condujo a una imagen divertida que entusiasmó a Purcell. Él explica: “Para mí, fue ver la sección de stop motion donde intentamos replicar el estilo stop motion de los autos dinosaurio de los años 60. Y al ver eso me di cuenta y cómo los animadores pudieron lograrlo. Porque para mí, les estaba dando este objetivo extraño que era, quería que pareciera un poco dudoso, pero quería que fuera genial al mismo tiempo. Y pudieron conseguir esta hermosa escena de acción. Pero sientes la calidad hecha a mano, tal como se habría visto en los años 60, cuando estaba viendo esas geniales películas de Ray Harryhausen o King Kong o lo que sea. Eso fue emocionante para mí”.
                    <br></br><br></br>
                    Finalmente, el director Brian Fee indagó en su infancia en busca de un sentimiento que le alegraba ver a los animadores darle vida. Él cuenta: “[P]or uno de los episodios en los que trabajé llamado “The Legend”, McQueen y Mater salen al bosque e interactúan con Bigfoot. Y hay un momento allí en el que McQueen está solo en el bosque, está oscuro... y hay mal humor y estábamos tratando de capturar, ya sabes, esa sensación de ciencia ficción de los 80 de estar afuera en el bosque. Y eso fue algo que creo que nunca había hecho antes. Así que creo que para mí, poder aprovechar las cosas que me encantaba ver y que me inspiraron cuando era niño, y tratar de incorporarlas. Y los animadores y la iluminación, es simplemente increíble. El equipo de Cars fue simplemente increíble y todos lo llevaron mucho más allá de lo que jamás hubiera pensado. Así que fue una gran alegría verlo funcionar.</p>
                <h2>5. Si aún no estás familiarizado con la franquicia Cars , ¡cualquiera puede unirse a este viaje por carretera!</h2>
                <p>
                    Tómalo de Larry the Cable Guy... también conocido como el propio Mater: “Por supuesto, puedes pasar directamente. Quiero decir, McQueen y Mater, son un equipo de comedia legendario. Entonces, sí, puedes comenzar desde el principio si nunca lo has visto, pero una vez que estés enganchado, que lo estarás, definitivamente querrás comenzar desde el principio [de la franquicia] y ver cómo Todo progresó y cómo surgieron”. ¡Simplemente enciende tu Disney+ y disfruta del viaje!
                </p>
            </div>

            <div class="redes-abajo">
                <div className="redes">
                    <div className="icono">
                        <img src={Insta}></img>
                    </div>
                    <div className="icono">
                        <img src={Facebook}></img>
                    </div>
                    <div className="icono">
                        <img src={Twitter}></img>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default DatosPage;

