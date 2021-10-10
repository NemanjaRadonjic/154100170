import { Container } from "./styles";

import Article from "./Article";

import {
  BannerContainer,
  BannerBorder,
  BannerImageContainer,
  BannerImage,
  Info,
  InfoItem,
} from "./styles";

import Pocetna1 from "@images/Pocetna1.jpg";
import Pocetna2 from "@images/Pocetna2.jpg";
import Pocetna3 from "@images/Pocetna3.jpg";
import Pocetna4 from "@images/Pocetna4.jpg";
import Pocetna5 from "@images/Pocetna5.jpg";
import BannerImg from "@images/Banner.jpg";

import theme from "@theme";
import { Shape } from "../../Layout/Diamond/styles";

function Pocetna() {
  return (
    <Container>
      <Shape
        size="40rem"
        borderColor={`rgb(${theme.gold})`}
        borderSize="15rem"
        left="-35%"
        bottom="20%"
      />
      <Shape
        size="40rem"
        borderColor={`rgb(${theme.black})`}
        borderSize="10rem"
        right="-20%"
        bottom="40%"
      />
      <Shape
        size="50rem"
        borderColor={`rgb(${theme.black})`}
        borderSize="15rem"
        right="-40%"
        bottom="-35%"
      />
      <Article
        mainImage={Pocetna1}
        order={"left"}
        message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <Article
        mainImage={Pocetna2}
        order={"right"}
        message={"Nunc luctus eros est, et sodales dui dignissim eget."}
      />
      {/* secondary banner */}
      <BannerContainer>
        <Info>
          <InfoItem>- Praesent vehicula tempus ligula.</InfoItem>
          <InfoItem>- Duis pulvinar lacus sed pharetra fringilla.</InfoItem>
          <InfoItem>- Nulla facilisi.</InfoItem>
          <InfoItem>- Donec dignissim suscipit lectus sed iaculis.</InfoItem>
          <InfoItem>- Quisque at cursus enim.</InfoItem>
          <InfoItem>- Cras convallis consectetur ligula nec porta.</InfoItem>
        </Info>
        <BannerBorder>
          <BannerImageContainer>
            <BannerImage src={Pocetna1} />
          </BannerImageContainer>
        </BannerBorder>
        <Info>
          <InfoItem>- Sed at sem elit.</InfoItem>
          <InfoItem>- Sed cursus dui eget mi volutpat pulvinar.</InfoItem>
          <InfoItem>- Cras eget arcu justo.</InfoItem>
          <InfoItem>- Praesent ac pretium ante.</InfoItem>
          <InfoItem>- Phasellus eu maximus magna.</InfoItem>
          <InfoItem>- Nulla a mauris nulla.</InfoItem>
        </Info>
      </BannerContainer>
      <Article
        mainImage={Pocetna3}
        order={"center"}
        message={"Vestibulum in purus eget lectus tempor aliquet."}
        message2={
          "Donec quam odio, ultrices a hendrerit ut, sagittis ut libero."
        }
      />
    </Container>
  );
}

export default Pocetna;
