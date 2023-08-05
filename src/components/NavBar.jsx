import React from "react";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import Valor from "./valorFijo";

const Navbar = () => {
    return (
        <nav class="navbar fixed-top  navbar-expand-lg ">
            <div class="container-fluid justify-content-between">
                <Logo />
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Seleccione uno ...
                    </button>
                        <ItemListContainer tipo="alimento"/>
                </div>
                <div class="d-flex align-items-center flex-column mb-3">
                <Valor/>
                <CartWidget />
                </div>
                
            </div >
        </nav >
    )
}
export default Navbar

