import styled from "@emotion/styled"

const ContenedorResultado = styled.div`
  margin-top: 5rem;
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 10rem 2fr;
  }
`;

const Imagen = styled.img`
  width: 10rem;
`;

const Precio = styled.p`
  margin-bottom: 1rem;
  font-size: 2.4rem;
  font-weight: bold;
  
  span{
  font-size: 1.6rem;
  font-weight: normal;
  }
`;

const Texto = styled.p`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  
  span{
  font-size: 1.6rem;
  font-weight: normal;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;


  return (
    <ContenedorResultado>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen criptomoneda"
      />
      <div>
        <Precio>El precio es de: {PRICE}</Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Varición últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última Actulización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </ContenedorResultado>
  )
}

export default Resultado