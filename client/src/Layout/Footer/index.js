import { Container, Info, Social, Phone } from "./styles";

import { ReactComponent as FacebookIco } from "@src/icons/facebook-square-brands.svg";
import { ReactComponent as GmailIco } from "@src/icons/envelope-solid.svg";
import { ReactComponent as InstagramIco } from "@src/icons/instagram-square-brands.svg";

function Footer() {
  return (
    <Container>
      <Info>Vivamus vitae ornare ex.</Info>
      <Social>
        <a
          href="https://www.facebook.com/domacetortekolacipeciva/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIco className="ico" />
        </a>
        <a href="mailto:insertemailhere@gmail.com">
          <GmailIco className="ico" />
        </a>
        <a
          href="https://www.instagram.com/domace_torte_kolaci_peciva/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIco className="ico" />
        </a>
      </Social>
      <Phone>
        Ako imate bilo kakva pitanja ili porudzbine pozovite <br />
        061 4600243
      </Phone>
    </Container>
  );
}

export default Footer;
