import React, {useState, useEffect} from 'react'
import ListaContactos from './ListaContactos';

export default function HomeList() {
    const [contactos, setContactos] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setContactos([
                {nombre: 'Adrian', telefono: 4771147422},
                {nombre: 'Maria', telefono: 5698741569},
                {nombre: 'Daniela', telefono: 4772408472}
            ]);
        }, 5000);
    }, []);
    return (
        <div>
            {(contactos.length === 0) ? <h1>Loading...</h1> : <ListaContactos lista= {contactos}/>}
        </div>
    )
}
