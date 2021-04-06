import React, { useState } from "react";

export default function Contador() {
    // con typescript useState trabaja con genericos si se inicia con numero el state infiere que es numero
    const [contador, setContador] = useState<number>(0)

    const aumentar = () => {
        setContador(prevState => prevState +1)
    }
    const disminuir = () => {
        setContador(prevState => prevState -1)
    }
  return (
    <>
      <h3>
        Contador: <small>{contador}</small>
      </h3>
      <button onClick={aumentar} className="btn btn-primary">+1</button>
      &nbsp;
      <button onClick={disminuir}  className="btn btn-primary">-1</button>
    </>
  );
}
