import React, { useEffect } from "react";
import styled from "styled-components";
import Delayed from "./Delayed";

function Modal({ children }: any) {
  useEffect(() => {}, []);
  return (
    <ModalContainer>
      <DialogBox>
        <GameOver>GAME OVER</GameOver>
        <Delayed waitBeforeShow={1500}>{children}</Delayed>
      </DialogBox>
      <Backdrop />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
`;

const GameOver = styled.span`
  @font-face {
    font-family: "HBIOS-SYS";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2")
      format("woff2");
  }
  font-family: "HBIOS-SYS";
  font-size: 140px;
  font-weight: 800;
  color: #c99999;
  @media screen and (max-width: 768px) {
    font-size: 18vw;
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.714);
`;

export default Modal;
