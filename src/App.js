//* Imports
import "./App.css";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Daily from "./components/Daily";
import Monthly from "./components/Monthly";
import Weekly from "./components/Weekly";
import NavLinks from "./components/NavLinks";

//* App JSX
function App() {
  return (
    <div className="App">
      <Container className="app-container">
        <NavLinks />
        <Switch>
          <Route path="/daily" component={Daily} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/monthly" component={Monthly} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
