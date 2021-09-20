import React, { useState } from "react";
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 1rem;
`
const useCriptomoneda = (label, stateInicial, opciones) => {
  // State de nuestro custom hook
  const [state, updateState] = useState(stateInicial);
  const SelectCripto = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
        ))}
      </Select>
    </>
  );
  // retornar el state, updateState y el componente
  return [state, SelectCripto, updateState];
};

export default useCriptomoneda;
