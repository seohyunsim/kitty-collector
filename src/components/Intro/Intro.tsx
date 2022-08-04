import React from "react";
import { Link } from "react-router-dom";
import { brownKitty, greyKitty } from "../common";
import { Wrap, Title, ImageWrap, Description, BtnWrap } from "./styles";

export const Intro = () => {
  const title = ["고", "양", "이", "컬", "렉", "터", "!"];
  return (
    <Wrap>
      <Title>
        {title.map((str, idx) => {
          return <span key={idx}>{str}</span>;
        })}
      </Title>
      <ImageWrap>
        <img alt="greykitty" src={greyKitty} />
        <img alt="brownKitty" src={brownKitty} />
        <span>hi ~</span>
      </ImageWrap>
      <Description>
        <span>
          중앙에 2종류의 고양이를 올바른 곳으로 보내주세요.
          <br />
          <br />
          올바른 곳에 보내게 되면 점수가 증가하고, 다른 곳에 보내게 되면 게임이
          종료돼요.
          <br />
          <br />
          최대한 많은 고양이들을 올바른 곳으로 보내보세요!
        </span>
      </Description>
      <BtnWrap>
        <Link to={"./main"}>
          <button>start</button>
        </Link>
      </BtnWrap>
    </Wrap>
  );
};
