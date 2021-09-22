import { Container, Item } from "./styles";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Container>
        <Item>
          <Link to="/pocetna">Početna</Link>
        </Item>
        <Item>
          <Link to="/o-nama">O nama</Link>
        </Item>
        <Item>
          <Link to="/kontakt">Kontakt</Link>
        </Item>
        <Item>
          <Link to="/proizvodi">Proizvodi</Link>
        </Item>
        <Item>
          <Link to="/galerija">Galerija</Link>
        </Item>
      </Container>
    </>
  );
}

export default Navbar;
