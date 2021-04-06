import { useState } from "react"

export const useCounter = ( inicial: number =  0) => {
    // con typescript useState trabaja con genericos si se inicia con numero el state infiere que es numero
    const [contador, setContador] = useState<number>(inicial)

    const acumular = (numero: number) => {
        setContador(prevState => prevState + numero)
    }
    return {
        contador,
        acumular
    }
}
