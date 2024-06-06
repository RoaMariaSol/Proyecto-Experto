import React from "react";

import '../estilos/conponentes/paginas/PixarPage.css';

const PixarPage = (props) => {
    return (
        <main className="main-princesas">
            <div className="cont-portada-princesa">
                <img className="portada-princesa" src="/imgPeliculas/pixar-portada.jpg"></img>
            </div>

            <div className="primer-pixar">
                <div className="primer-flex">
                    <div className="primer-img">
                        <img src="/imgPeliculas/toy.png"></img>
                    </div>
                    <div className="texto2">
                        <h3>El Origen de</h3>
                        <h1>Pixar Studios</h1>
                        <p>
                            Pixar Animation Studios, ubicado en Emeryville, California, fue fundado el 3 de febrero de 1986.
                            <br></br><br></br>
                            El estudio cinematográfico produjo Toy Story (el primer largometraje animado producido completamente por computadora) para Disney y en febrero de 1997 firmó un contrato de cinco películas también con Disney: empresa que, en ese momento, acordó comprar hasta el 5 por ciento de las acciones de Pixar, según indica el sitio web oficial de d23.com.
                            <br></br><br></br>
                            Otras producciones memorables del estudio incluyen Bichos: Una Aventura en Miniatura, Monsters, Inc., Buscando a Nemo y Los Increíbles.
                            <br></br><br></br>
                            El 24 de enero de 2006, Disney anunció que compraría Pixar, acuerdo que se completó el 5 de mayo de 2006. Después de la adquisición por parte de Disney, Pixar continuó su serie de éxitos con películas como Cars, Ratatouille, Up y Brave.
                        </p>
                    </div>
                </div>
            </div>

            <div className="ser-jack">
                <div className="texto-jack">
                    <h1>Cortos Pixar</h1>
                    <p>
                    Desde los pájaros parados en un cable, hasta el abuelito que jugaba ajedrez solo. Pixar tiene años regalándonos un pequeño corto con cada película que estrenan.
                    <br></br><br></br>
                    A partir de 1995 se convirtió en una tradición ver un pequeño cortometraje animado acompañando a las películas de Pixar. Desde los pájaros parados en un cable, hasta la historia de un dumpling medio rebelde. Pixar ya nos acostumbró a esperar un simpático cortito como aperitivo antes de ver sus pelis.
                    </p>
                </div>
                <div className="jack-img">
                    <img src="/imgPeliculas/jack2.jpg"></img>
                </div>
            </div>

            <div className="galeria-princesas">
                <div className="gale-pajaro">
                    <img src="/imgPeliculas/pajaro.png"></img>
                </div>
                <div className="galeria-pixar">
                    <div className="renglon-gale">
                        <img src="/imgPeliculas/pixar1.jpg"></img>
                        <img src="/imgPeliculas/pixar2.jpg"></img>
                        <img src="/imgPeliculas/gale3.jpg"></img>
                    </div>
                    <div className="renglon-gale">
                        <img src="/imgPeliculas/pixar4.jpg"></img>
                        <img src="/imgPeliculas/pixar5.jpg"></img>
                        <img src="/imgPeliculas/pixar6.jpg"></img>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default PixarPage;