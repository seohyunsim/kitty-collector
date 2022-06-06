import styled, { keyframes, css } from "styled-components";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import React, { useEffect, useState } from "react";

export const Main = () => {
  const blackKitty =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIaro9NdPhttKXZ12oRy7smHDKl_bULANjA&usqp=CAU";

  const whiteKitty =
    "https://cdn.pixabay.com/photo/2013/07/12/15/40/cat-150306_960_720.png";

  const [score, setScore] = useState<number>(0);
  const [kittys, setKittys] = useState<string[]>([
    blackKitty,
    whiteKitty,
    whiteKitty,
    blackKitty,
    whiteKitty,
  ]);

  const kittysList: React.ReactNode = kittys.reverse().map((url, idx) => {
    return <Kitty key={idx} src={url} />;
  });

  console.log(kittys);

  const onLeftArrowClick = (e: React.MouseEvent<SVGElement>) => {
    const kittyId = (e.target as SVGElement).id;
    if (kittyId === kittys[4]) {
      console.log("똑같음!", kittyId);
      kittys.splice(4, 1);
      setKittys(kittys);
      return kittys;
    } else {
      console.log("다름~", kittyId, kittys[4]);
    }
    console.log(kittys);
    return rotateKitty;
  };

  const onRightArrowClick = () => {
    setScore(score + 1);
  };

  const rotateKitty = keyframes`
   from {
    transform : translateX(0);
  }to {
    transform : translateX(-3em);
  }
`;

  return (
    <Wrap>
      <h2>kitty collector</h2>
      <Score>
        <div className="scoreNum">{score}</div>
        <span>score</span>
      </Score>
      <KittyGroup>
        <div className="Kittys">{kittysList}</div>
      </KittyGroup>
      <ArrowWrap>
        <LeftArrow>
          <img src={blackKitty} />
          <TbArrowBigLeft onClick={onLeftArrowClick} id={blackKitty}>
            {blackKitty}
          </TbArrowBigLeft>
        </LeftArrow>
        <RightArrow>
          <img src={whiteKitty} />
          <TbArrowBigRight onClick={onRightArrowClick} />
        </RightArrow>
      </ArrowWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  @font-face {
    font-family: "BRRA_R";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/BRRA_R.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  text-align: center;
  /* border: 1px solid; */
  background-color: #fffffb9e;
  h2 {
    font-family: "BRRA_R";
  }
`;

const Score = styled.div`
  /* border: 1px solid red; */
  padding: 1em;
  display: flex;
  flex-direction: column;
  .scoreNum {
    @font-face {
      font-family: "SDSamliphopangche_Outline";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    font-size: 80px;
    font-family: "SDSamliphopangche_Outline";
    color: #3e3e3e;
  }
  span {
    font-size: 20px;
    padding: 5px;
    font-family: "BRRA_R";
  }
`;

const KittyGroup = styled.div`
  /* border: 1px solid green; */
  padding: 2em;
  .Kittys {
    /* border: 1px solid; */
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;

const rotateKitty = keyframes`
   from {
    transform : translateX(0);
  }to {
    transform : translateX(-3em);
  }
`;

const Kitty = styled.img`
  width: 60px;
  margin-top: -1em;
  animation: ${rotateKitty} 0.8s;
`;

const ArrowWrap = styled.div`
  width: 100%;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 75%;
  svg {
    cursor: pointer;
  }
`;

const LeftArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    width: 50px;
  }
`;

const RightArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    width: 37px;
  }
`;
