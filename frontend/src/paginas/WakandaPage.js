import React from "react";

import '../estilos/conponentes/paginas/NoticiaEstatica.css';
import Insta from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter-x.svg';


const WakandaPage = (props) => {
    return (
        <main className="main-noticia">
            <div className="noticia-top">
                <div className="titulos-etc">
                    <div className="titulos">
                        <h3>Noticias Marvel</h3>
                        <h1>Regreso a Wakanda en Black Panther: Wakanda Forever de Marvel Studios</h1>
                    </div>

                    <div className="etc">
                        <div class="usuario">
                            <img src="/imgNoticias/usuario1.jpg" alt="" />

                            <div className="texto">
                                <p>Kari Koeppel</p>
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


            <div className="noticia-centro">
                <h4>Marvel Studios regresa a Wakanda. Ya en los cines y disponible en Disney+ el 1 de febrero,  Black Panther: Wakanda Forever está nuevamente dirigida por Ryan Coogler con guión de Coogler y Joe Robert Cole; los productores ejecutivos son Victoria Alonso, Louis D'Esposito y Barry Waldman; y producida por Kevin Feige y Nate Moore.</h4>
                <img src="/imgNoticias/noticia-wakanda1.jpeg" alt="" />
                <p> Esta entrega encuentra a Shuri (Letitia Wright), la reina Ramonda (Angela Bassett, quien recientemente ganó un Globo de Oro y un premio Critics Choice por el papel), Okoye (Danai Gurira) y Nakia (Lupita Nyong'o) lidiando con la pérdida. de su rey, T'Challa. El mundo está considerando la transición de poder de Wakanda y poniendo a prueba sus límites. Wakanda ha dejado de ser la potencia mundial que secretamente siempre fue; Ahora todo el mundo sabe sobre el vibranium y todos quieren algo para ellos. Sin (creen) la Pantera Negra, ¿quién queda para proteger Wakanda y sus recursos? Por otra parte, se presenta al público el mundo de Talokan, con su líder, Namor (Tenoch Huerta Mejía) y los feroces guerreros Namora (Mabel Cadena) y Attuma (Alex Livinalli).
                    <br></br><br></br>
                    Por supuesto, el actor Chadwick Boseman (Rey T'Challa) falleció trágicamente en 2020 después de una batalla privada contra el cáncer de colon. El mundo (y el elenco y el equipo de Black Panther ) quedaron conmocionados por su pérdida, pero todo ese dolor se canalizó en la realización de Wakanda Forever . El presidente de Marvel Studios, Kevin Feige, dijo: "Cuando perdimos a Chad, todo eso obviamente se incorporó a esta película, manteniendo la idea de una celebración de Wakanda y el personaje en primer plano, además del dolor que conlleva". Todo estaba entretejido en la tela de la película. El productor Nate Moore compartió el proceso de incorporar esa pérdida: “Creo que, como narradores, simplemente queremos ser lo más honestos posible con lo que los personajes experimentarían en la película después de experimentar la pérdida de T'Challa. Y eso no es sólo dolor: a veces también es alegría y a veces humor. Son todas las emociones que cualquiera siente ante una pérdida profunda”. Eso deja muchas opciones sobre cómo podría desarrollarse la historia. Al decidir qué dirección tomar con el guión, el escritor y director Ryan Coogler explicó: “Lo que queríamos observar era que, cuando pierdes a alguien, hay un radio de explosión, ya sabes, como una bomba que explota. ¿Quién fue el más cercano a ello? Eso es lo que exploramos. Los personajes principales, sus identidades estaban envueltas en este hombre, esa es la verdad”.
                    <br /><br />
                    Detrás de escena, el elenco y el equipo también estaban lidiando con su dolor personal. El director Coogler dijo: “Fue fantástico ver a algunas de estas personas y darles un gran abrazo nuevamente. Todos estábamos procesando este sentimiento de pena y pérdida, pero también es fantástico cuando no tienes que hacerlo solo”. La actriz Lupita Nyong'o, que interpreta a Nakia, el amor de T'Challa, estuvo de acuerdo. "Interpretarla fue muy terapéutico para mí, porque tuve que mirar más allá de mis frustraciones por perder a Chadwick y aprender de ella, aprender de esa sabiduría que ella parece poseer", dijo Nyong'o. Danai Gurira también recurrió a la memoria de Boseman en busca de fortaleza mientras hacía la película. “La clave para mí, que me anclaba, era el objetivo de honrarlo a él y a la forma en que amaba la excelencia. Le encantaba vernos brillar y le encantaba vernos hacer lo nuestro”. Sobre la primera película, ella compartió: “Íbamos hacia él y le decíamos: '¿Qué piensas sobre esto? ¿Y qué opinas sobre esto de mi personaje? Y él siempre nos animaba mucho a hacer grandes cosas. Tenía tan buen gusto. [Así que pensar en] eso fue realmente un aspecto anclado durante todo el proceso para mí”. La actriz Letitia Wright, que interpreta a Shuri, la hermana menor de T'Challa, dijo: “Creo que la forma en que fue escrito y la delicadeza, la gentileza con la que lo abordamos, pudimos aportar algo que parecía real, que parecía veraz. Realmente pude entregarle mi corazón y darle a Shuri un arco completo, y espero que la gente realmente pueda resonar con eso y encontrar algo de curación, junto a nosotros, con eso”.</p>
                <img src="/imgNoticias/noticia-wakanda2.jpeg" alt="" />
                <p>
                    Shuri es una de las personas más afectadas por la muerte de T'Challa. Coogler explicó: “Shuri, todos los días que estuvo viva, tenía a su hermano. Entonces, cuando lo perdió, realmente perdió el sentido de sí misma. Ella se identificó como la hermana pequeña de este chico, como su protectora y como la persona que cuida de él. Entonces, cuando pierde eso, queda muy desatada”. Wright explicó cómo abordó el desafío de interpretar un personaje en esa transición. “Fue, en primer lugar, a través de la conexión con Ryan, esa conversación sincera sobre cómo damos un paso adelante. Un suave paso adelante, porque es muy crudo cuando hablamos... ¿Cómo creamos un arco completo de este ser humano, de esta joven que está pasando por algo junto a sus compañeros de familia y a los habitantes de Wakanda? Si Coogler compara el impacto de la muerte de T'Challa con un radio de impacto, entonces Shuri está justo en el centro de eso. Wright dijo: “La conocemos en la primera película y ella es ese rayo de sol. Está tan vestida y protegida por la realeza y el amor... Sólo quiere crear. Amaba a Shuri en el primero, porque no había límites para ella. Ella era la persona a la que acudía su hermano en busca de protección, su armadura, y él la alentó... ¿Cómo se ve eso cuando tienes el corazón roto?
                    <br /><br />
                    Parte del viaje de Shuri en Wakanda Forever la lleva a conocer gente nueva fuera de Wakanda. Sin revelar demasiado, uno de esos nuevos personajes se llama Riri Williams (interpretada por Dominique Thorne). Cuando se le pregunta sobre esa historia, Wright sonríe. "Fue muy divertido. Estoy muy emocionada por Dominique y su actuación; es increíble”. Wright continuó: “Riri es muy divertida y me encanta el hecho de que tenemos una hermosa oportunidad de ver a otra joven negra ser un genio y estar en la escuela haciendo lo suyo e inspirar a tantas… tantas escenas geniales. entre Dominique, Okoye y yo, algunas de mis escenas favoritas. No podía arreglármelas en el set porque estábamos estallando en un rincón de risa”.
                </p>
                <img src="/imgNoticias/noticia-wakanda3.jpeg" alt="" />
                <p>
                    Por supuesto, no todos los momentos coincidían con cómo se sentían personalmente los actores. Lupita Nyong'o compartió su reacción al descubrir la trama de Nakia para la película: “Recuerdo que al principio, mientras leía el guión, tenía mucha envidia de Letitia porque se vuelve caótica”, se rió. “Y así es como me sentí: me sentí en carne viva y quería expresarlo. Nakia, sin embargo, es un ejemplo de alguien que está un poco más avanzado en términos de procesamiento”. Para Nyong'o tenía sentido que Nakia fuera el personaje que mostrara ese aspecto. Ella compartió: “En la primera película, Ryan la describió como el oasis de T'Challa, y eso realmente me impactó. Entonces, cuando estaba leyendo este guión y pensando en dónde está ella, me di cuenta de que lo que alguna vez fue para T'Challa, ahora tiene la oportunidad de ofrecérselo a Shuri”. Nakia no solo puede ofrecer ese consuelo a Shuri, sino también posiblemente a la audiencia. Nyong'o explicó: “Cuando hablamos de exploración del duelo, es realmente fundamental tener a alguien que sea amigo del cambio para las personas en la historia, pero también para la audiencia. Y el hecho de que ella fuera el amor de T'Challa, en cierto modo le permite al público saber que está bien, ya sabes. Está bien." El productor Nate Moore estuvo de acuerdo en que el hecho de que diferentes personajes encarnaran diferentes perspectivas fue beneficioso para la historia. "Teníamos tal colección de talentos y tal colección de personajes que tienen un punto de vista diferente sobre esa pérdida, que creo que Ryan [Coogler] encontró maneras de expresar todos los diferentes colores del dolor a través del conjunto", dijo. . "Es por eso que, con suerte, la película será poderosa para la gente".
                </p>
                <img src="/imgNoticias/noticia-wakanda4.jpeg" alt="" />
                <p>Asegúrate de ver Black Panther: Wakanda Forever de Marvel Studios , en los cines ahora y en Disney+ a partir del 1 de febrero.</p>
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
};

export default WakandaPage;

