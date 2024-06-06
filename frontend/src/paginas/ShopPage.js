import React from "react";

import '../estilos/conponentes/paginas/ShopPage.css';
import { NavLink } from "react-router-dom";


const ShopPage = (props) =>{
    return (
        <main className="shop-main">
            <div className="cont-todo">
                <h1>Shop Disney</h1>

                <div className="cont-tarjetas"> 

                    <div className="tarjeta">
                        <div className="cont-img">
                        <img className="portada" src="/imgShop/peluches-portada.jpg"></img>
                        </div>
                        <div className="texto">
                            <h3>Peluches</h3>
                            <NavLink to="/peluches" className="boton">Comprar</NavLink>
                        </div>
                    </div>

                    <div className="tarjeta">
                        <div className="cont-img">
                        <img className="portada" src="/imgShop/tazas-pertada.jpg"></img>
                        </div>
                        <div className="texto">
                            <h3>Tazas</h3>
                            <NavLink to="/tazas" className="boton">Comprar</NavLink>
                        </div>
                    </div>

                    <div className="tarjeta">
                        <div className="cont-img">
                        <img className="portada" src="/imgShop/disfraces-portada.jpg"></img>
                        </div>
                        <div className="texto">
                            <h3>Disfraces</h3>
                            <NavLink to="/disfraces" className="boton">Comprar</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ShopPage;