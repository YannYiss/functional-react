import React from 'react';

export default function ListaContactos({lista}) {
    const renderContactos = () => {
        return (lista.map((contacto) =>
            <p>{contacto.nombre} - {contacto.telefono}</p>
        ));
    }

    return(
        <>
        <h1>Esta es la lista de contactos:</h1>
        {renderContactos()}
        </>
    )
}
