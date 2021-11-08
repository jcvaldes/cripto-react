import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cotizacion from "./components/Cotizacion,";
import Spinner from "./components/Spinner";
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;
function App() {
  // para la moneda
  const [moneda, saveMoneda] = useState("");
  // para la cryptomoneda
  const [criptomoneda, saveCriptomoneda] = useState("");
  // para obtener la cotizacion
  const [resultado, saveResultado] = useState({});
  // para el spinner
  const [cargando, saveCargando] = useState(false);

  const showInfoCripto = (cargando) => cargando ? <Spinner /> : <Cotizacion resultado={resultado} />;
  useEffect(() => {
    // evitamos la ejecución inecesaria por primera vez
    // console.log('Cotizando...')

    // consultar la api para obtener la cotizacion
    const cotizarCriptomoneda = async () => {
      if (moneda === "") return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      saveCargando(true);
      setTimeout(() => {
        // cambiar el estado de cargando
        saveCargando(false);
        console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
        // guardar cotizacion
        saveResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 1000);
    };
    cotizarCriptomoneda();
  }, [criptomoneda, moneda]);
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen cripto" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario
          saveMoneda={saveMoneda}
          saveCriptomoneda={saveCriptomoneda}
        />
        {showInfoCripto(cargando)}
        
      </div>
    </Contenedor>
  );
}

export default App;
