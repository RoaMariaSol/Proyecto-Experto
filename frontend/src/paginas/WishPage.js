import React from "react";

import '../estilos/conponentes/paginas/NoticiaEstatica.css';
import Insta from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter-x.svg';

const WishPage = (props) => {
    return (
        <main className="main-noticia">
            <div class="noticia-top">
                <div class="titulos-etc">
                    <div class="titulos">
                        <h3>Noticias Disney</h3>
                        <h1>Make-A-Wish celebra 150.000 deseos de Disney en el Día Mundial de los Deseos</h1>
                    </div>

                    <div class="etc">
                        <div class="usuario">
                            <img src="/imgNoticias/usuario2.jpeg" alt="" />

                            <div class="texto">
                                <p>Vanessa Roberson</p>
                                <p>Colaburadora de noticias Disney</p>
                            </div>
                        </div>
                        <div class="redes">
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
                <h4>Disney y Make-A-Wish celebraron el Día Mundial del Deseo el sábado 29 de abril de 2023, fecha que marca el aniversario del deseo que inspiró la fundación de Make-A-Wish en 1980. Desde que ese primer deseo oficial fue concedido en Disneyland Resort, Disney y Make-A-Wish han trabajado juntos para ayudar a cumplir 150.000 deseos en todo el mundo para niños y sus familias.</h4>
                <img src="/imgNoticias/noticia-wish1.jpeg" alt="" />
                <p>
                    Como parte de la celebración del Día Mundial de los Deseos de este año, Josh D'Amaro, presidente de Parques, Experiencias y Productos de Disney y miembro de la junta directiva de Make-A-Wish America, inauguró una ventana especial, primera en su tipo, en Main Street, EE. UU., dedicada a los Wish Kids del mundo en Disneyland Park. Las ventanas de Main Street, EE. UU. históricamente han estado dedicadas a personas que han hecho contribuciones significativas a Disney durante el siglo pasado; Al ser la primera dedicada a una organización sin fines de lucro, esta ventana representa la relación especial que Disney y Make-A-Wish han desarrollado a lo largo de los años. Leslie Motter, presidenta y directora ejecutiva de Make-A-Wish America, dijo: “El Día Mundial de los Deseos presenta una oportunidad para reunir a la comunidad global de seguidores que hace posibles los deseos, y Disney ha sido uno de nuestros patrocinadores más comprometidos e impactantes desde el principio. desde el comienzo. Es un testimonio de la pasión y generosidad de los miembros del elenco pasados ​​y presentes que hayamos llegado al punto en que nuestras familias deseadas sean reconocidas con sus propias ventanas dedicadas en Disneyland Resort”..</p>
                <img src="/imgNoticias/noticia-wish2.jpeg" alt="" />
                <p>
                    El conjunto está compuesto por tres ventanas. La ventana central está dedicada a todos los niños deseados del mundo; el de la izquierda rinde homenaje a Chris Greicius, el primer deseo que inspiró la creación de Make-A-Wish; y el de la derecha está dedicado a Frank 'Bopsy' Salazar, tanto el primer deseo oficial concedido por Make-A-Wish como el primer deseo de Disney. El trío de ventanas está ubicado sobre el Wish Lounge rediseñado y dedicado de nuevo, donde las familias de los deseos pueden descansar durante las visitas al parque. Walt Disney Imagineering trabajó con artistas de Walt Disney Animation Studios para darle vida a este salón de deseos, inspirado en el estilo visual y los personajes de la próxima película animada de Disney Animation, Wish , que se estrenará en noviembre de 2023.
                    <br></br><br></br>
                    Mientras organizaba la ceremonia de inauguración del escaparate en California, Disney anunció que Mikayla, una talentosa joven de 16 años de Florida que “vive y respira teatro”, será el deseo oficial número 150.000 de Disney. Mikayla y su familia quedaron sorprendidos con la noticia mientras pasaban la noche en la Cinderella Castle Suite en Walt Disney World. Regresará al parque a finales de este año para cumplir su deseo de actuar en el escenario de Disney.
                </p>
                <img src="/imgNoticias/noticia-wish3.jpeg" alt="" />
                <p>
                    Durante los últimos 43 años, Disney se ha convertido en el mayor concededor de deseos para Make-A-Wish, haciendo realidad miles de deseos y brindando el impacto transformador de un deseo a niños y familias que enfrentan enfermedades críticas. "Disney y Make-A-Wish son una combinación perfecta: ambos estamos en el negocio de crear felicidad", dijo Josh D'Amaro, presidente de Experiencias y Productos de Parques de Disney y miembro de la junta directiva de Make-A-Wish America. “También entendemos el impacto transformador que podemos tener en las vidas de los niños deseados y sus familias. Estamos encantados de honrar la historia de Make-A-Wish y Disney juntos y esperamos crear momentos especiales durante muchos años por venir”.
                    <br></br><br></br>
                    También se celebraron otras celebraciones del Día Mundial de los Deseos en los parques de Disney de todo el mundo. El sábado 15 de abril, Shanghai Disney Resort organizó un concierto benéfico en beneficio de su capítulo local Make-A-Wish. Disneyland de Hong Kong organizó una fiesta de celebración del Día Mundial de los Deseos el 30 de abril, en la que Javis, un niño de 10 años, cumplió su deseo de tocar la batería en el escenario, mientras que Disneyland París recibió a 80 niños de los deseos y sus familias en el parque temático para su fin de semana de los deseos. . A principios de semana, tres niños de Make-A-Wish y sus familias asistieron a la gala europea de Guardianes de la Galaxia Vol. 3 para cumplir sus deseos de ver la película y conocer a algunas de sus estrellas de superhéroes favoritas. Y aún por venir, Tokyo Disney Resort celebrará dos deseos de Make-A-Wish Japan en honor al 40 aniversario del parque.
                    <br></br><br></br>
                    Disney trabaja con Make-A-Wish para cumplir deseos que van desde vacaciones en parques temáticos y complejos turísticos, cruceros y compras, hasta visitas a estudios, encuentros con talentos, experiencias con temas deportivos y más. Muchos miembros del elenco de Disney también son voluntarios que conceden deseos, padres de niños que desean o ellos mismos son ex alumnos de deseos. Para obtener más información sobre la relación de larga data entre Disney y Make-A-Wish, visite wish.org/Disney .
                </p>
            </div>

            <div class="redes-abajo">
                <div class="redes">
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

export default WishPage;