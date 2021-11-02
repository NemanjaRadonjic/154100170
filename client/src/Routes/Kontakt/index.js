import {
  Container,
  Header,
  Content,
  Text,
  Contact,
  Phone,
  IframeContainer,
} from "./styles.js";

import theme from "@theme";
import { Shape } from "../../Layout/Diamond/styles";

import { ReactComponent as FacebookIco } from "@src/icons/facebook-square-brands.svg";
import { ReactComponent as GmailIco } from "@src/icons/envelope-solid.svg";
import { ReactComponent as InstagramIco } from "@src/icons/instagram-square-brands.svg";

function Kontakt() {
  return (
    <Container>
      <Shape
        size="30vw"
        borderColor={`rgb(${theme.gold})`}
        borderSize="10vw"
        left="-40%"
        bottom="50%"
      />
      <Shape
        size="30vw"
        borderColor={`rgb(${theme.black})`}
        borderSize="10vw"
        right="-30%"
        top="0%"
      />
      <Header>Kontakt</Header>
      <Content>
        <div>
          <Contact>
            <a
              href="https://www.facebook.com/domacetortekolacipeciva/"
              target="_blank"
            >
              <FacebookIco className="ico border" />
            </a>
            <a href="mailto:insertemailhere@gmail.com">
              <GmailIco className="ico border" />
            </a>
            <a
              href="https://www.instagram.com/domace_torte_kolaci_peciva/"
              target="_blank"
            >
              <InstagramIco className="ico border" />
            </a>
          </Contact>
          <div>
            <Text>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </Text>
            <Text>
              Excepteur sint occaecat non: <Phone>061 4600243</Phone>
            </Text>
          </div>
        </div>
        <IframeContainer>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5804.564590725136!2d21.935112779373156!3d43.329281546793844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE5JzQ2LjEiTiAyMcKwNTYnMTcuMyJF!5e0!3m2!1sen!2srs!4v1634298567801!5m2!1sen!2srs"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </IframeContainer>
      </Content>
    </Container>
  );
}

export default Kontakt;
