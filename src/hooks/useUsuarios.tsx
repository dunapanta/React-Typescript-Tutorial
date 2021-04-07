import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  useEffect(() => {
    cargarUsuarios();
  }, []);

  const paginaRef = useRef(1);

  const cargarUsuarios = async () => {
    try {
      //Paginación
      const resp = await reqResApi.get<ReqResListado>("/users", {
        params: {
          page: paginaRef.current,
        },
      });
      if (resp.data.data.length > 0) {
        setUsuarios(resp.data.data);
        paginaRef.current++;
      } else {
        alert("No hay más registros");
      }
    } catch (err) {
      console.log(err);
    }
    /* reqResApi
      .get<ReqResListado>("/users")
      .then((resp) => {
        console.log(resp.data.data);
        setUsuarios(resp.data.data);
      })
      .catch((err) => console.log(err)); */
  };

  return {
      usuarios,
      cargarUsuarios
  }
};
