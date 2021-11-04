import { Container, ImageContainer, Image, Message } from "./styles";

import Pocetna1 from "@images/Pocetna1.jpg";
import Pocetna2 from "@images/Pocetna2.jpg";
import Pocetna3 from "@images/Pocetna3.jpg";
import Pocetna4 from "@images/Pocetna4.jpg";
import Pocetna5 from "@images/Pocetna5.jpg";

import { nanoid } from "nanoid";

function Article({ order, mainImage, message, message2 }) {
  // algorithm that shuffles images while having a passed one as the last
  const images = [Pocetna1, Pocetna2, Pocetna3, Pocetna4, Pocetna5];

  const maxRotation = 15;
  const minRotation = 5;

  const generateRotation = () => {
    const isPositive = Math.random() > 0.5 ? "-" : "";
    return `${isPositive}${Math.floor(
      Math.random() * (maxRotation - minRotation + 1) + minRotation
    )}deg`;
  };

  const renderImages = () => {
    const backfill = images.filter((img) => img !== mainImage);
    backfill.push(mainImage);
    return backfill.map((img) => (
      <Image
        key={nanoid()}
        src={img}
        rotation={generateRotation()}
        order={order}
      />
    ));
  };
  return (
    <Container>
      {message2 !== undefined && <Message>{message2}</Message>}
      <ImageContainer order={order}>
        {/* <Image src={Pocetna1} rotation={"-15deg"} />
        <Image src={Pocetna2} rotation={"10deg"} />
        <Image src={Pocetna3} rotation={"-5deg"} />
        <Image src={Pocetna4} rotation={"5deg"} />
        <Image src={Pocetna5} rotation={"-5deg"} /> */}
        {renderImages()}
      </ImageContainer>
      <Message order={order}>{message}</Message>
    </Container>
  );
}

export default Article;
