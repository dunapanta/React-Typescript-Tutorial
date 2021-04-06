import React from "react";

//El objeivo de una interface es ayudar a que typescript sepa como lucen mis objetos
// es decir defino las reglas de validacion
// Por lo general no se crea objetos dentro de la misma interface, se crea otra
interface Persona {
    nombre: string,
    edad: number,
    /* direccion: {
        pais: string,
        ciudad: string
    } */
    direccion: Direccion

}

interface Direccion {
    pais: string,
    ciudad: string
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombre: "Daniel",
    edad: 25,
    direccion: {
      pais: "Ecuador",
      ciudad: "Quito",
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
