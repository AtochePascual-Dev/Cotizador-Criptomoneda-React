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

const Select = ({ label, id, data }) => {

  return (
    <>
      <Label
        htmlFor={id}>
        {label}
      </Label>

      <Selected
        id={id}
      >
        <option value="">-- Seleccione --</option>
        {
          data.map((moneda) =>
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
  )
}

export default Select