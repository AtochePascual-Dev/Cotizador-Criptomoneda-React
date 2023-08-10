import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import useSelect from "../hooks/useSelect";
import Error from "./Error";
import { monedas } from "../data/monedas"

const Buttom = styled.input`
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 1rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  border-radius: .5rem;
  cursor: pointer;
  color: white;
  background-color: #4647b9;
  transition: background-color .3s ease-in-out;
  
  &:hover{
  background-color: #31339b;
  }
`;

const Formulario = ({ setResulado, setSpiner }) => {
  const [criptos, setCriptos] = useState([]);
  const [moneda, SelectMoneda] = useSelect("Elige tu Moneda", monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelect("Elige tu Criptomoneda", criptos);
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      const URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const respuesta = await fetch(URL);
      const resultado = await respuesta.json();
      const criptoMonedasAPI = resultado.Data.map((critoApi) => ({ id: critoApi.CoinInfo.Name, nombre: critoApi.CoinInfo.FullName }))
      setCriptos(criptoMonedasAPI)
    };

    consultarAPI();
  }, []);


  const cotizarCriptoMonedasAPI = async (moneda, criptomoneda) => {
    const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    const respuesta = await fetch(URL);
    const resultado = await respuesta.json();
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado.DISPLAY[criptomoneda][moneda];
    setSpiner(false);
    setResulado({ PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if ([moneda, criptomoneda].includes('')) {
      setError(true);
      return
    };

    setError(false);
    setSpiner(true);
    setResulado({});
    cotizarCriptoMonedasAPI(moneda, criptomoneda);
  };

  return (
    <form
      onSubmit={handleSubmit}
    >

      {error && <Error>Seleccione una Moneda y Criptomoneda</Error>}

      <SelectMoneda />

      <SelectCriptomoneda />

      <Buttom
        type="submit"
        value="Cotizar"
      />
    </form>
  )
}

export default Formulario