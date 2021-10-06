// Style
import "./App.css";
import { Container } from "reactstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Daily from "./components/Daily";
import Monthly from "./components/Monthly";
import Weekly from "./components/Weekly";
import NavLinks from "./components/NavLinks";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
