import React from "react";

import '../estilos/conponentes/paginas/ProductosPage.css';

const DisfrazPage = (props) =>{
    return (
        <main className="main-disfraz">
            <h1>Disfraces</h1>
            <div className="renglon">

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/aurora.png"></img>
                        <h3>$125</h3>
                    </div>
                    <h4>Princesa Aurora Disfraz</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/tiana.png"></img>
                        <h3>$140</h3>
                    </div>
                    <h4>Princesa Tiana Disfraz</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/bella.png"></img>
                        <h3>$135</h3>
                    </div>
                    <h4>Princesa Bella Disfraz</h4>
                </div>

            </div>


            <div className="renglon">

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/cenicienta.png"></img>
                        <h3>$135</h3>
                    </div>
                    <h4>Princesa Cenicienta Disfraz</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/jasmin.png"></img>
                        <h3>$140</h3>
                    </div>
                    <h4>Princesa Jasmin Disfraz</h4>
                </div>

                <div className="card">
                    <div className="cont-img">
                        <img className="foto-prod" src="/imgShop/ana.png"></img>
                        <h3>$150</h3>
                    </div>
                    <h4>Princesa Ana Disfraz</h4>
                </div>
                
            </div>

        </main>
    )
}

export default DisfrazPage;