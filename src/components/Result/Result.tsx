import React, { useState } from "react";
import { Wrap, RestartBtn } from "./styles";

export const Result = () => {
  const [score, setScore] = useState<number>(0);
  const onClick = () => {
    window.location.reload();
  };
  return (
    <Wrap>
      <p>당신의 점수는 :</p>
      <span>{score}</span>
      <RestartBtn onClick={onClick}>다시 해보기</RestartBtn>
    </Wrap>
  );
};
