import { stat } from "node:fs";
import React, { useReducer, useEffect } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

//la action debe estar definida por lo general se utiliza type
type AuthAction = {
  type: "logout";
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };
    default:
      return state;
  }
};

export default function Login() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alet alert-info">Validando..</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      <div className="alet alert-danger">No autenticado</div>
      <div className="alet alert-success">Autenticado</div>

      <button className="btn btn-primary">Iniciar Sesión</button>
      <button className="btn btn-danger">Cerrar Sesión</button>
    </>
  );
}
