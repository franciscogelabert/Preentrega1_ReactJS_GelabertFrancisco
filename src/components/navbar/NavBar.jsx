import React from 'react';
import Logo from './Logo';
import CartWidget from './CartWidget.jsx';
import ItemListContainer from './ItemListContainer.jsx';
import Valor from './ValorFijo.jsx';
import "../../style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg flex-row">
        <div className="container-fluid justify-content-between">
         <Logo/>
           <ItemListContainer
            menu1="Home"
            menu2="Mi Perfil"
            menu3="Publicar"
            tipo="alimento"
          />
          <div className="d-flex align-items-center flex-column">
            <Valor />
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
