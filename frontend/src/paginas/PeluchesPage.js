import React from "react";

import '../estilos/conponentes/paginas/ProductosPage.css';

const PeluchesPage = (props) =>{
    return (
        <main className="main-peluche">
            <h1>Peluches</h1>
            <div className="renglon">

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/ratatuil.png"></img>
                        <h3>$25</h3>
                    </div>
                    <h4>Ratatuil Peluche Pequeño</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/sebastian.png"></img>
                        <h3>$30</h3>
                    </div>
                    <h4>Sebastian Peluche Mediano</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/simba.png"></img>
                        <h3>$45</h3>
                    </div>
                    <h4>Simba Peluche Mediano</h4>
                </div>

            </div>


            <div className="renglon">

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/dumbo.png"></img>
                        <h3>$60</h3>
                    </div>
                    <h4>Dumbo Peluche Grande</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/pinocho.png"></img>
                        <h3>$40</h3>
                    </div>
                    <h4>Pinocho Peluche Grande</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/bambi.png"></img>
                        <h3>$60</h3>
                    </div>
                    <h4>Bambi Peluche Grande</h4>
                </div>
                
            </div>

        </main>
    )
}

export default PeluchesPage;