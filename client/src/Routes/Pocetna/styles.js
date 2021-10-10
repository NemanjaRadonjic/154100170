import styled from "styled-components";
import theme from "@theme";
import BannerImg from "@images/Banner.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
`;

export const BannerContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30rem;
  background-size: cover;
  background-image: linear-gradient(
      to left bottom,
      rgb(50, 50, 50),
      rgba(0, 0, 0, 0.8)
    ),
    url(${BannerImg});
  overflow: hidden;
`;

export const BannerBorder = styled.div`
  height: 15rem;
  width: 15rem;
  position: relative;
  transform: rotate(45deg);

  &::before {
    content: "";
    position: absolute;
    top: -5rem;
    left: -5rem;
    border: 1px solid rgb(${theme.gold});
    height: 25rem;
    width: 25rem;
  }
`;

export const BannerImageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: 1px solid rgba(${theme.white}, 0.5);
`;

export const BannerImage = styled.img`
  height: 22rem;
  width: 26rem;
  margin-top: -6rem;
  margin-left: -4.5rem;
  transform: rotate(-45deg);
`;

export const Info = styled.div``;

export const InfoItem = styled.div`
  color: rgb(${theme.gray});
  // font-family: ${theme.writtenFont};
  font-style: italic;
  font-size: 1rem;
  margin: 0.5rem 0;
`;
