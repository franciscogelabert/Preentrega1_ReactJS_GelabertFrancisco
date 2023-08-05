import React from "react";

const ItemListContainer = (props) => {
    const ingredientes = [
        { id: 1, alimento: 'Tomate', calorias: 200, vitaminas: 'A,B', sodio: 100 },
        { id: 2, alimento: 'Naranja', calorias: 100, vitaminas: 'C', sodio: 50 },
        { id: 3, alimento: 'Carne', calorias: 500, vitaminas: 'D', sodio: 200 },
        { id: 4, alimento: 'Pan', calorias: 400, vitaminas: 'A', sodio: 200 },
        { id: 5, alimento: 'Mandarina', calorias: 200, vitaminas: 'A,B', sodio: 100 },
        { id: 6, alimento: 'Banana', calorias: 100, vitaminas: 'C', sodio: 50 },
        { id: 7, alimento: 'Chocolate', calorias: 500, vitaminas: 'D', sodio: 200 },
        { id: 8, alimento: 'Frutilla', calorias: 400, vitaminas: 'A', sodio: 200 }
    ]

    function atributo(arreglo, valor) {
        if (valor == "calorias") {
            return arreglo.calorias
        } else if (valor == "alimento") {
            return arreglo.alimento
        } else if (valor == "vitaminas") {
            return arreglo.vitaminas
        } else if (valor == "sodio") {
            return arreglo.sodio
        }
    }

    return (
        <ul class="dropdown-menu">
            {ingredientes.map(i => {
                return (
                    <li><a class="dropdown-item" href="#">{atributo(i, props.tipo)}</a></li>
                )
            })}
        </ul>
    )

}
export default ItemListContainer
