import { Container, Gallery, ImageItem, Nav } from "./styles";

import {
  Route,
  Switch,
  NavLink,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import data from "./data";

import theme from "@theme";
import { Shape } from "../../Layout/Diamond/styles";

import { nanoid } from "nanoid";

function Galerija() {
  let { path, url } = useRouteMatch();

  return (
    <Container>
      <Shape
        size="60rem"
        borderColor={`rgb(${theme.gold})`}
        borderSize="12rem"
        left="-40%"
        bottom="48%"
      />
      <Shape
        size="60rem"
        borderColor={`rgb(${theme.black})`}
        borderSize="12rem"
        right="-40%"
        top="40%"
      />
      <Nav>
        {data.map((item, i) => (
          <NavLink
            key={nanoid()}
            activeClassName="active"
            to={`/galerija/${i + 1}`}
          >
            {i + 1}
          </NavLink>
        ))}
      </Nav>
      <Gallery>
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${url}/1`} />
          </Route>
          {data.map((item, i) => (
            <Route key={nanoid()} path={`${path}/${i + 1}`}>
              {item.map((src) => (
                <ImageItem key={nanoid()} src={src} />
              ))}
            </Route>
          ))}
        </Switch>
      </Gallery>
      <Nav>
        {data.map((item, i) => (
          <NavLink
            key={nanoid()}
            activeClassName="active"
            to={`/galerija/${i + 1}`}
          >
            {i + 1}
          </NavLink>
        ))}
      </Nav>
    </Container>
  );
}

export default Galerija;
