import styled from "@emotion/styled";

const ErroDiv = styled.div`
  margin-bottom: 2rem;
  padding: 1rem ;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center ;
  background-color: #750a0a;
`;

const Error = ({ children }) => {


  return (
    <ErroDiv>{children}</ErroDiv>
  )
}

export default Error