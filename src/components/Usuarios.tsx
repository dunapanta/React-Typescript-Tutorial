import React, { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  useEffect(() => {
    cargarUsuarios();
  }, []);

  const paginaRef = useRef(1)

  const cargarUsuarios = async () => {
      try {
          //Paginación
          const resp = await reqResApi.get<ReqResListado>('/users',{
              params: {
                  page: paginaRef.current
              }
          })
          if (resp.data.data.length > 0){
              setUsuarios(resp.data.data)
                paginaRef.current ++
          }else{
              alert('No hay más registros')
          }

      }catch(err){
          console.log(err)
      }
    /* reqResApi
      .get<ReqResListado>("/users")
      .then((resp) => {
        console.log(resp.data.data);
        setUsuarios(resp.data.data);
      })
      .catch((err) => console.log(err)); */
  };

  const renderItem = (usuario: Usuario) => {
    const { id, first_name, last_name, email, avatar } = usuario;
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 40,
              borderRadius: 100,
            }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Siguientes
      </button>
    </>
  );
}
