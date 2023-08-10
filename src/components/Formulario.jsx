import Select from "./Select"
import { monedas } from "../data/monedas"
import { useEffect, useState } from "react"


const Formulario = () => {

  const [criptos, setCriptos] = useState([]);

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


  return (
    <form>
      <Select
        label="Elige tu Moneda"
        id="moneda"
        data={monedas}
      />

      <Select
        label="Elige tu Criptomoneda"
        id="criptomoneda"
        data={criptos}
      />
    </form>
  )
}

export default Formulario