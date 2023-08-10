import Select from "./Select"
import { monedas } from "../data/monedas"
import { useEffect } from "react"


const Formulario = () => {


  return (
    <form>
      <Select
        label="Elige tu Moneda"
        id="moneda"
        data={monedas}
      />


    </form>
  )
}

export default Formulario