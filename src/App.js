import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [tela, setTela] = useState("login");
  // Podemos fazer o if ternário dentro de uma variável e chamar ela dentro do jsx, como mostra abaixo:
  const renderizacao = tela === "login" ? <TelaLogin /> : <TelaCadastro />

  function alterarTela(screen){
    setTela(screen)
  }


  {/* também podemos fazer essa pessagem de telas por switch case */}

  // Dessa forma podemos fazer com switch: 
  
  // switch (tela){
  //     case "login":
  //       return <TelaLogin alterarTela={alterarTela}/> 
  //     case "cadastro":
  //       return <TelaCadastro alterarTela={alterarTela}/>
  //     case "principal":
  //       return <TelaPrincipal alterarTela={alterarTela}/>
  //     default:
  //       return<TelaPrincipal alterarTela={alterarTela}/>
  // }
  return (
    <MainContainer>
      <GlobalStyled />

      {/* Como mostra abaixo: */}
      {/* {tela === "login" ? <TelaLogin /> : <TelaCadastro />}
      Só é possível passar duas condições no if ternário. Ou é login ou é cadastro. Se quisermos colocar a tela principal teremos que fazer de outra maneira */}

      {/* Aqui chamamos o ternário: */}
      {/* {renderizacao} */}

      {/* Outro modo é o modo curto circuito: */}

      {tela === "login" && <TelaLogin alterarTela={alterarTela}/>}
      {tela === "cadastro" && <TelaCadastro alterarTela={alterarTela}/>}
      {tela === "principal" && <TelaPrincipal alterarTela={alterarTela}/>}

      {/* O metódo do curto circuito é mais interessante pq não é necessário ter um limite de telas como o ternário */}
    </MainContainer>
  );
}

export default App;
