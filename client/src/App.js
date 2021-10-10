import Navbar from "./Layout/Navbar";
import Heading from "./Layout/Heading";
import Footer from "./Layout/Footer";

import Pocetna from "@routes/Pocetna";
import Onama from "@routes/Onama";
import Kontakt from "@routes/Kontakt";
import Proizvodi from "@routes/Proizvodi";
import Galerija from "@routes/Galerija";

import { Container } from "./styles";

import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container>
      <Navbar />
      <Heading />
      <Switch>
        <Route exact path="/">
          <Redirect to="/pocetna" />
        </Route>
        <Route exact path="/pocetna">
          <Pocetna />
        </Route>
        <Route exact path="/o-nama">
          <Onama />
        </Route>
        <Route exact path="/kontakt">
          <Kontakt />
        </Route>
        <Route exact path="/proizvodi">
          <Proizvodi />
        </Route>
        <Route exact path="/galerija">
          <Galerija />
        </Route>
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
