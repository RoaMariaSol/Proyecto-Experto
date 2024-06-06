import React from "react";

import '../../estilos/conponentes/paginas/NoticiaEstatica.css';

import Insta from '../../assets/facebook.svg';
import Facebook from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter-x.svg';

const NoticiaItem = (props) =>{
    const {volanta, title, subtitle, body, body2, body3, image, image2, image3 } = props;
    return (
        <main className="main-noticias">
             <div className="noticia-top">
                <div className="titulos-etc">
                    <div className="titulos">
                        <h3>{volanta}</h3>
                        <h1>{title}</h1>
                    </div>

                    <div className="etc">
                        <div class="usuario">
                            <img className="img-usuario" src="/imgNoticias/usuario1.jpg" alt="" />

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
                <h4>{subtitle}</h4>
                <img  src={image} alt="imagen1" />
                <p>
                <div dangerouslySetInnerHTML={{__html: body}}/>
                </p>
                <img src={image2} alt="imagen2" />
                <p>
                <div dangerouslySetInnerHTML={{__html: body2}}/>
                </p>
                <img src={image3} alt="imagen3" />
                <p>
                    <div dangerouslySetInnerHTML={{__html: body3}}/>
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

export default NoticiaItem;