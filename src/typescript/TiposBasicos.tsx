import React from "react";

export const TiposBasicos = () => {
  //por defecto typescript infiere que es de tipo string
  let nombre = "Daniel";
  // para que la variable pueda ser mas de un tipo se lo especifica con |
  let direccion: string | number = "Quito";
  direccion = 543;
  // En el caso de que sea una constante no importa el tipo ya que nunca cambia siempre es 25
  const edad: number = 25;
  //boolean
  const estaActivo: boolean = true;
  //arreglos
  const poderes: string[] = ['Volar', 'Velocidad', 'Inteligencia']

  return (
    <>
      <h3>Tipos Básicos</h3>
      <p>Nombre: {nombre}</p>
      <p>Dirección: {direccion}</p>
      <p>Edad: {edad}</p>
      {estaActivo ? <p>Activo</p> : <p>No Activo</p>}
      {/* {poderes.join(', ')} */}
      <p><strong>Poderes:</strong></p>
      <ul>
        {poderes.map(poder => <li>{poder}</li>)}
      </ul>
    </>
  );
};
