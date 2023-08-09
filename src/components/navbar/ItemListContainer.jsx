import React from 'react';

const ItemListContainer = (props) => {
  const ingredientes = [
    { id: 1, alimento: 'Tomate', calorias: 200, vitaminas: 'A,B', sodio: 100 },
    { id: 2, alimento: 'Naranja', calorias: 100, vitaminas: 'C', sodio: 50 },
    { id: 3, alimento: 'Carne', calorias: 500, vitaminas: 'D', sodio: 200 },
    { id: 4, alimento: 'Pan', calorias: 400, vitaminas: 'A', sodio: 200 },
    {
      id: 5,
      alimento: 'Mandarina',
      calorias: 200,
      vitaminas: 'A,B',
      sodio: 100,
    },
    { id: 6, alimento: 'Banana', calorias: 100, vitaminas: 'C', sodio: 50 },
    { id: 7, alimento: 'Chocolate', calorias: 500, vitaminas: 'D', sodio: 200 },
    { id: 8, alimento: 'Frutilla', calorias: 400, vitaminas: 'A', sodio: 200 },
  ];

  function atributo(arreglo, valor) {
    if (valor == 'calorias') {
      return arreglo.calorias;
    } else if (valor == 'alimento') {
      return arreglo.alimento;
    } else if (valor == 'vitaminas') {
      return arreglo.vitaminas;
    } else if (valor == 'sodio') {
      return arreglo.sodio;
    }
  }
  return (
    <div className="d-flex align-items-center mb-3 ">
    
    <li className="nav-item mx-3">
      <a
        className="nav-link active text-white fs-6 justify-content-end align-text-bottom"
        aria-current="page"
        href="#"
      >
        {props.menu1}
      </a>
    </li>
    <li className="nav-item mx-3">
      <a
        className="nav-link active text-white fs-6"
        aria-current="page"
        href="#"
      >
       {props.menu2}
      </a>
    </li>
    
    <li className="nav-item mx-3">
      <a
        className="nav-link active text-white fs-6"
        aria-current="page"
        href="#"
      >
        {props.menu3}
      </a>
    </li>
    <div className="dropdown">
      <button
        id="elemSeleccionado"
        className="btn btn-secondary dropdown-toggle mx-2 fs-6"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Seleccione uno ...
      </button>
      <ul className="dropdown-menu">
        {ingredientes.map(i => {
          return (
            <li  key={i.id} >
              <a className="dropdown-item" href="#">
                {atributo(i, props.tipo)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
};
export default ItemListContainer;
