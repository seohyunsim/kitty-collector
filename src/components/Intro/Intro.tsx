import React from "react";
import { Link } from "react-router-dom";
import { brownKitty, greyKitty } from "../common";
import { Wrap, Title, ImageWrap, Description, BtnWrap } from "./styles";

export const Intro = () => {
  return (
    <Wrap>
      <Title>
        <span>고</span>
        <span>양</span>
        <span>이</span>
        <span>컬</span>
        <span>렉</span>
        <span>터</span>
        <span>!</span>
      </Title>
      <ImageWrap>
        <img alt="greykitty" src={greyKitty} />
        <img alt="brownKitty" src={brownKitty} />
      </ImageWrap>
      <Description>
        <span>
          중앙에 2종류의 고양이를 올바른 곳으로 보내주세요.
          <br />
          올바른 곳에 보내게 되면 점수가 증가하고, 다른 곳에 보내게 되면 게임이
          종료돼요.
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
