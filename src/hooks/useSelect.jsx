import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  margin-bottom: 1rem;
  display: block;
  font-size: 3rem;
  font-weight: bold;
`;

const Selected = styled.select`
  width: 100%;
  margin-bottom: 3rem;
  padding: .5rem 1rem;
  text-align: center;
  font-size: 1.8rem;
  border-radius: .5rem;
  cursor: pointer;
  outline: none;
`;

const useSelect = (label, monedas) => {
  const [state, setState] = useState("")

  const SelectMoneda = () =>
    <>
      <Label>
        {label}
      </Label>

      <Selected
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">-- Seleccione --</option>
        {
          monedas.map((moneda) =>
            <option
              key={moneda.id}
              value={moneda.id}
            >
              {moneda.nombre}
            </option>
          )
        }
      </Selected>
    </>

  return [state, SelectMoneda];
}

export default useSelect