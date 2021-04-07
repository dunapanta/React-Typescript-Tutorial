import React, { useEffect } from "react";
import { reqResApi } from "../api/reqRes";

export default function Usuarios() {
  useEffect(() => {
    reqResApi.get("/users").then(resp =>{
        console.log(resp.data.data)
    }).catch(err => console.log(err))
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