import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
  background-color: #6161615f;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const waveTitle = keyframes`
   from {
    transform: translateY(-10px);
  } to {
    transform: translateY(0);
  }
`;

export const Title = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  font-size: 55px;
  span {
    @font-face {
      font-family: "MabinogiClassicR";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/MabinogiClassicR.woff2")
        format("woff2");
    }
    font-family: "MabinogiClassicR";
    font-weight: 800;
    margin: 0 5px;
    position: relative;
    animation: ${waveTitle} 2.5s infinite;
    :nth-of-type(1) {
      animation-delay: 0.1s;
    }
    :nth-of-type(2) {
      animation-delay: 0.2s;
    }
    :nth-of-type(3) {
      animation-delay: 0.3s;
    }
    :nth-of-type(4) {
      animation-delay: 0.4s;
    }
    :nth-of-type(5) {
      animation-delay: 0.5s;
    }
    :nth-of-type(6) {
      animation-delay: 0.6s;
    }
    :nth-of-type(7) {
      animation-delay: 0.7s;
    }
  }
`;

export const ImageWrap = styled.div`
  img {
    width: 100px;
    margin: 0 15px;
  }
`;

export const Description = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0 3em;
  span {
    font-size: 20px;
    font-weight: normal;
    line-height: 2.5;
  }
`;

export const BtnWrap = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  button {
    @font-face {
      font-family: "LeferiPoint-WhiteObliqueA";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff")
        format("woff");
    }
    padding: 10px 2.5em;
    border-radius: 55px;
    cursor: pointer;
    font-family: "LeferiPoint-WhiteObliqueA";
    font-size: 40px;
    font-weight: 400;
    :hover {
      background-color: #f5cb82;
    }
  }
`;
