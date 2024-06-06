import React from "react";

import '../estilos/conponentes/paginas/ProductosPage.css';

const TazasPage = (props) =>{
    return (
        <main className="main-taza">
            <h1>Tazas</h1>
            <div className="renglon">

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/100.png"></img>
                        <h3>$60</h3>
                    </div>
                    <h4>Disney 100 Años Taza con Tapa</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/alicia.png"></img>
                        <h3>$50</h3>
                    </div>
                    <h4>Alicia Taza Mediana</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/nemo.png"></img>
                        <h3>$65</h3>
                    </div>
                    <h4>Nemo Taza Meidana</h4>
                </div>

            </div>


            <div className="renglon">

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/stich.png"></img>
                        <h3>$60</h3>
                    </div>
                    <h4>Stich Taza Grande</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/spideman.png"></img>
                        <h3>$55</h3>
                    </div>
                    <h4>Spiderman Taza Grande</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/arturito.png"></img>
                        <h3>$65</h3>
                    </div>
                    <h4>Arturito Taza Grande</h4>
                </div>
                
            </div>

        </main>
    )
}

export default TazasPage;