import HomePage from "./pages/homepage";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutpage from "./pages/aboutpage";
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
      <Router>
        <Route exact path="/">
          <NavBar />
          <HomePage />
        </Route>
        <Route path="/about">
          <NavBar />
          <Aboutpage />
        </Route>
      </Router>
    </AppContainer>
  );
}

export default App;
