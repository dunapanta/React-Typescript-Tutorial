import { useState } from "react";

// Custom Hook Generico T es un estandar en typescript
export const useForm = <T extends Object>(formularioEstruct: T) => {
    const [formulario, setFormulario] = useState(formularioEstruct);
    
      const onChangeFor = (value: string, campo: keyof T) => {
        setFormulario({
          ...formulario,
          [campo]: value,
        });
      };

      return {
          ...formulario,
        formulario,
        onChangeFor
      }
}