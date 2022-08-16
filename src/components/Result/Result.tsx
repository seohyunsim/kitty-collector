import React from "react";
import { Wrap, RestartBtn } from "./styles";

interface props {
  finalScore: number;
}

export const Result = ({ finalScore }: props) => {
  const onClick = () => {
    window.location.reload();
  };
  return (
    <Wrap>
      <p>당신의 점수는 :</p>
      <span>{finalScore}</span>
      <RestartBtn onClick={onClick}>다시 해보기</RestartBtn>
    </Wrap>
  );
};
