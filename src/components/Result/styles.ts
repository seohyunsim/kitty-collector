import styled from "styled-components";

export const Wrap = styled.div`
  height: 70vh;
  color: white;
  p {
    font-size: 35px;
    @media screen and (max-width: 768px) {
      font-size: 4.5vw;
    }
  }
  span {
    @font-face {
      font-family: "HBIOS-SYS";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2")
        format("woff2");
    }
    font-family: "HBIOS-SYS";
    font-size: 120px;
    padding: 5px 0.5em;
    background-color: wheat;
    color: #440000;
    @media screen and (max-width: 768px) {
      font-size: 15vw;
    }
  }
`;

export const RestartBtn = styled.div`
  padding: 20px 8em;
  margin: 10vh 0;
  font-size: 25px;
  background-color: darkseagreen;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: goldenrod;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 20vw;
    font-size: 4vw;
  }
`;
