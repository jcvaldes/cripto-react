import React, { useState } from "react";

const useMoneda = (label, stateInicial, opciones) => {
  // State de nuestro custom hook
  const [state, updateState] = useState(stateInicial);
  const Seleccionar = () => (
    <>
      <label>Moneda</label>
      <select onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">- Seleccione -</option>
        {opciones.map((opcion) => (
          <option value={opcion.codigo}>{opcion.nombre}</option>
        ))}
      </select>
    </>
  );
  // retornar el state, updateState y el componente
  return [state, Seleccionar, updateState];
};

export default useMoneda;
