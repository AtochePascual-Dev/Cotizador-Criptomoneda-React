import Formulario from "./components/Formulario";
import styled from "@emotion/styled";
import ImagenCriptoPng from './img/imagen-criptos.png';
import { useState } from "react";
import Resultado from "./components/Resultado";

const Contianer = styled.div`
  width: 90%;
  max-width: 90rem;
  margin: 0 auto;
  padding-top: 5rem;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 4em;
  color: white;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2,1fr);
  }
`;

const ImagenCripto = styled.img`
  max-width: 28rem;
  margin-top: 2rem;
  display: block;
  
  @media (min-width: 768px) {
    max-width: 35rem;
  }
`;

const Header = styled.h1`
  margin-bottom: 5rem;
  font-size: 4rem;
  text-align:center;
  
  &::after{
  content: "";
  width: 20rem;
  height: .6rem;
  margin: 1rem auto 0;
  display: block;
  background-color: #69a4fb;
  }
`;

function App() {
  const [resultado, setResulado] = useState({});

  return (
    <Contianer>

      <ImagenCripto
        src={ImagenCriptoPng}
        alt="imagen criptomoneda"
      />

      <div>
        <Header>Cotiza tu Criptomoneda</Header>
        <Formulario
          setResulado={setResulado}
        />

        {
          resultado.PRICE &&
          <Resultado
            resultado={resultado}
          />
        }
      </div>

    </Contianer>
  )
}

export default App
