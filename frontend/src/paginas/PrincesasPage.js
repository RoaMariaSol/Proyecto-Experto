import React from "react";

import '../estilos/conponentes/paginas/PrincesasPage.css';

const PrincesasPage = (props) => {
    return (
        <main className="main-princesas">
            <div className="cont-portada-princesa">
                <img className="portada-princesa" src="/imgPeliculas/princesas-portada.jpg"></img>
            </div>

            <div className="primer-princesa">
                    <div className="primer-flex">
                        <div className="primer-img">
                            <img src="/imgPeliculas/blancanieves.jpg"></img>
                        </div>
                        <div className="texto2">
                            <h3>La primera Princesa Disney</h3>
                            <h1>Blancanieves</h1>
                            <p>
                                La primera película de animación estrenada por Walt Disney fue Blancanieves y los Siete Enanitos en 1937. Así, Blancanieves es considerada la primera princesa Disney.
                                <br></br>
                                En la película, la bella princesa encanta a todas las criaturas del reino con su bondad, excepto a una: su celosa madrastra, la Reina. Cuando el Espejo Mágico proclama que Blancanieves es la más bella de todas, la princesa acaba huyendo por el bosque, donde se hace amiga de los adorables siete enanitos.
                                <br></br>
                                Sin embargo, la Reina engaña a la niña con una manzana encantada, que la congela al darle un mordisco. ¡Y sólo la magia de un beso de su verdadero amor puede salvarla!
                            </p>
                        </div>
                    </div>
                </div>

            <div className="ser-princesa">
                <div className="texto">
                    <h1>Soy Princesa Siendo Yo</h1>
                    <p>
                        Ser una princesa es mucho más que llevar una corona en la cabeza y usar un bonito vestido. Las princesas de Disney han vivido historias fabulosas, enfrentado grandes peligros y triunfado gracias a sus muchas cualidades. La valentía y la fortaleza son claves en sus aventuras, y su deseo de explorar el mundo es el que las empuja siempre a más.
                        Anímate a descubrir cómo las princesas usaron sus talentos en sus vidas de cuento y conoce también a las sabias (¡o peligrosas!) mujeres que estuvieron junto a ellas.
                    </p>
                </div>
                <div className="ser-img">
                    <img src="/imgPeliculas/merida.png"></img>
                </div>
            </div>

                <div className="galeria-princesas">
                    <div className="gale-img">
                        <img src="/imgPeliculas/hada.png"></img>
                    </div>
                    <div className="galeria">
                        <div className="renglon-gale">
                            <img src="/imgPeliculas/gale1.jpg"></img>
                            <img src="/imgPeliculas/gale2.jpg"></img>
                            <img src="/imgPeliculas/gale3.jpg"></img>
                        </div>
                        <div className="renglon-gale">
                            <img src="/imgPeliculas/gale4.jpg"></img>
                            <img src="/imgPeliculas/gale5.jpg"></img>
                            <img src="/imgPeliculas/gale6.jpg"></img>
                        </div>
                    </div>
                </div>

        </main>
    )
}

export default PrincesasPage;