import HomePage from "./pages/homepage";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "./components/navbar";

const AppContainer = styled.div`
  ${tw`
  bg-dark-blue
      w-full
      h-full
      flex
      flex-col
`};
`;

function App() {
  return (
    <AppContainer>
      <NavBar />
      <HomePage />
    </AppContainer>
  );
}

export default App;
