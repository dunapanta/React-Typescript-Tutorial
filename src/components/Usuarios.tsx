import React, { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export default function Usuarios() {
    const [Usuarios, setUsuarios] = useState<Usuario[]>([])
  useEffect(() => {
    reqResApi
      .get<ReqResListado>("/users")
      .then((resp) => {
        console.log(resp.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        <tbody></tbody>
      </table>
    </>
  );
}
