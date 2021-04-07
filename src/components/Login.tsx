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

type LoginPayload = {
  username: string;
  nombre: string;
};

//la action debe estar definida por lo general se utiliza type
// Se utiliza | para diferentes actions
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };
    case "login":
      return {
        ...state,
        token: "AJDSJ43345",
        nombre: action.payload.nombre,
        username: action.payload.username,
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

  const login = () => {
    dispatch({
      type: "login",
      payload: { username: "dunapanta", nombre: "Daniel" },
    });
  };

  const logout = () => {
      dispatch({
          type: 'logout'
      })
  }

  return (
    <>
      <h3>Login</h3>
      {state.token ? (
        <div className="alet alert-success">
          Autenticado como: {state.nombre}
        </div>
      ) : (
        <div className="alet alert-danger">No autenticado</div>
      )}

      {state.token ? (
        <button onClick={logout} className="btn btn-danger">Cerrar Sesión</button>
      ) : (
        <button onClick={login} className="btn btn-primary">Iniciar Sesión</button>
      )}
    </>
  );
}
