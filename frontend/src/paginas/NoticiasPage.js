import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NoticiaItem from "../componentes/noticias/NoticiaItem";



const NoticiasPage = (props) =>{

    const [loading, setLoading] = useState (false);
    const [noticias, setNoticias] = useState ([]);

    useEffect(() => {
        const cargarNoticias = async () => {
            setLoading (true);
            const response = await axios.get ('http://localhost:3000/api/noticias');
            setNoticias(response.data);
            setLoading(false);
        };

        cargarNoticias();
    }, []);



    return (
        <main className="main-noticia">
        {loading ?(
            <p>Cargando...</p>
        ) :(
            noticias.map(item => <NoticiaItem key={item.id} volanta={item.volanta} title={item.titulo} subtitle ={item.subtitulo} image={item.imagen} body={item.cuerpo} image2={item.imagen2} image3={item.imagen3} body2={item.cuerpo2} body3={item.cuerpo3}/>)
        )}
        </main>
    
    )
}

export default NoticiasPage;




      /*   <main className="main-noticias">
             <div className="noticia-top">
                <div className="titulos-etc">
                    <div className="titulos">
                        <h3>Volanta</h3>
                        <h1>Titulo</h1>
                        <p>Fecha</p>
                    </div>

                    <div className="etc">
                        <div class="usuario">
                            <img className="img-usuario" src="/imgNoticias/usuario1.jpg" alt="" />

                            <div className="texto">
                                <p>Nombre del escritor</p>
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
                <h4>Subtitulo</h4>
                <img  src="" alt="imagen1" />
                <p>Cuerpo 1</p>
                <img  alt="imagen2" />
                <p>
                   cuerpo 2
                </p>
                <img src="" alt="imagen3" />
                <p>
                    Cuerpo 3
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
        </main> */