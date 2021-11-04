import {
  Container,
  Header,
  Main,
  Content,
  ImageContainer,
  Image,
  Line,
} from "./styles";

import Pocetna4 from "@images/Pocetna4.jpg";
import Pocetna5 from "@images/Pocetna5.jpg";

import theme from "@theme";
import { Shape } from "../../Layout/Diamond/styles";

function Onama() {
  return (
    <Container>
      <Shape
        size="25rem"
        borderColor={`rgb(${theme.gold})`}
        borderSize="25rem"
        left="-50%"
        bottom="50%"
      />
      <Shape
        size="50rem"
        borderColor={`rgb(${theme.black})`}
        borderSize="12rem"
        left="80%"
        top="50%"
      />
      <Header>O nama</Header>
      <Main>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia
        at quis risus sed. Etiam dignissim diam quis enim lobortis. Nunc congue
        nisi vitae suscipit tellus. Metus aliquam eleifend mi in nulla posuere
        sollicitudin aliquam ultrices.
      </Main>
      <Content>
        <ImageContainer>
          <Image src={Pocetna4} />
        </ImageContainer>
        <Line />
        <ImageContainer>
          <Image src={Pocetna5} />
        </ImageContainer>
      </Content>
      <Main>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga.
      </Main>
    </Container>
  );
}

export default Onama;
