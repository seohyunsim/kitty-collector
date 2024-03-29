import styled, { keyframes, css } from "styled-components";

export const Wrap = styled.div`
  text-align: center;
  height: 100vh;
  outline: none;
  .title {
    padding: 10px;
    h2 {
      font-size: 20px;
      width: 40%;
      padding: 12px;
      margin: 0px auto;
      border-bottom: 3px dotted darkgreen;
    }
  }
`;

export const Score = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  span {
    font-size: 20px;
  }
`;

export const bounce = keyframes`
   from {
    transform: scale(125%);
  } to {
    transform: scale(100%);
  }
`;

export const ScoreNum = styled.div`
  width: 80%;
  margin: 0 auto;
  @font-face {
    font-family: "SDSamliphopangche_Outline";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff")
      format("woff");
  }
  font-size: 85px;
  font-family: "SDSamliphopangche_Outline";
  > .upScore {
    font-family: "SDSamliphopangche_Outline";
    animation: ${bounce} 0.5s infinite;
    color: #cd0000;
  }
  > .default {
    font-family: "SDSamliphopangche_Outline";
  }
`;

export const KittyGroup = styled.div`
  .Kittys {
    padding: 1.5em;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;

export const Kitty = styled.img`
  width: 90px;
  margin-top: -33px;
  :nth-of-type(1) {
    width: 65px;
  }
  :nth-of-type(2) {
    width: 75px;
    margin-top: -23px;
  }
  :nth-of-type(3) {
    width: 95px;
  }
  :nth-of-type(4) {
    width: 120px;
  }
  :nth-of-type(5) {
    width: 150px;
    margin-top: -38px;
  }
`;

export const ArrowWrap = styled.div`
  width: 100%;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
`;

export const LeftArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 75%;
  right: 75%;
  img {
    width: 60px;
  }
  input {
    width: 60px;
    & :focus {
      background-color: red;
    }
  }
`;

export const RightArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 75%;
  left: 75%;
  img {
    width: 60px;
  }
  input {
    width: 60px;
  }
`;

export const Sign = styled.div`
  height: 20em;
  text-align: center;
  position: absolute;
  left: 80px;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 30px;
    font-weight: 600;
  }
  span {
    font-size: 20px;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
