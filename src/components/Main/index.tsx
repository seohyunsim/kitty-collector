import styled, { keyframes } from "styled-components";
import React, { useEffect, useState } from "react";

export const Main = () => {
  const greyKitty =
    "https://deciduous-petalite-828.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbc1ba5b8-4dc2-40f8-8e20-61152e968c23%2F22.png?table=block&id=6fae8800-4fd0-4e00-8ac5-4a5c8044c3e9&spaceId=757517fd-f82c-4a1d-8b05-6567709f4aa0&width=2000&userId=&cache=v2";
  const brownKitty =
    "https://deciduous-petalite-828.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc34409a7-0239-4aa2-97d5-60ded89645f7%2F11.png?table=block&id=b2b0aa9f-4fe4-479a-8481-e5604c55d7cd&spaceId=757517fd-f82c-4a1d-8b05-6567709f4aa0&width=2000&userId=&cache=v2";
  const leftArrow =
    "https://deciduous-petalite-828.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9e83368a-70ea-420e-ade2-01056a7d1831%2Fleft.png?table=block&id=f4616461-b0dc-4967-954b-506da84b6ef6&spaceId=757517fd-f82c-4a1d-8b05-6567709f4aa0&width=1020&userId=&cache=v2";
  const rightArrow =
    "https://deciduous-petalite-828.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04ed97e2-12c3-4629-89f3-06b8db004bbf%2Fnext.png?table=block&id=f1f3e603-0035-4f4b-918f-4f423b26c322&spaceId=757517fd-f82c-4a1d-8b05-6567709f4aa0&width=1020&userId=&cache=v2";

  const randomKitty = [greyKitty, brownKitty];
  const [score, setScore] = useState<number>(0);
  const [isIncrease, setIsIncrease] = useState<boolean>(false);
  const [kittys, setKittys] = useState<string[]>([
    greyKitty,
    greyKitty,
    brownKitty,
    greyKitty,
    brownKitty,
  ]);

  //추가 배열 값 랜덤 생성
  const getRandomState = (array: string[]) => {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  };
  const pushNewState = getRandomState(randomKitty);

  const changeKittys = () => {
    kittys.splice(4, 1);
    kittys.unshift(pushNewState);
    setScore(score + 1);
  };

  const leftPressDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const keyboard = e.key;
    if (keyboard) {
      if (keyboard === "ArrowLeft") {
        greyKitty === kittys[4] ? changeKittys() : console.log("다름~");
      } else if (keyboard === "ArrowRight") {
        brownKitty === kittys[4] ? changeKittys() : console.log("다름~");
      }
    }
  };

  const onArrowClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const kittyId = (e.target as HTMLImageElement).id;

    kittyId === kittys[4] ? changeKittys() : console.log("다름~");
  };

  useEffect(() => {
    if (score === 0) setIsIncrease(false);
    else if (score % 10 === 0) setIsIncrease(!isIncrease);
    else if (score % 10 !== 0) setIsIncrease(false);
  }, [score]);

  return (
    <Wrap>
      <div className="title">
        <h2>kitty collector</h2>
      </div>
      <Score>
        <ScoreNum>
          <div className={isIncrease ? "upScore" : "default"}>{score}</div>
        </ScoreNum>
        <span>score</span>
      </Score>
      <KittyGroup>
        <div className="Kittys">
          {kittys.map((url, idx) => {
            return <Kitty key={idx} src={url} />;
          })}
        </div>
      </KittyGroup>
      <ArrowWrap>
        <LeftArrow>
          <img alt="greyKitty" src={greyKitty} />
          <form onKeyDown={leftPressDown}>
            <input
              type="image"
              alt="leftArrow"
              onClick={onArrowClick}
              id={greyKitty}
              src={leftArrow}
            />
          </form>
        </LeftArrow>
        <RightArrow>
          <img alt="brownKitty" src={brownKitty} />
          <input
            type="image"
            alt="rightArrow"
            onClick={onArrowClick}
            id={brownKitty}
            src={rightArrow}
          />
        </RightArrow>
      </ArrowWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  text-align: center;
  .title {
    padding: 1em;
    h2 {
      width: 45%;
      border-radius: 15px;
      padding: 12px;
      background-color: #e6f3ca;
      margin: 0px auto;
    }
  }
`;

const Score = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  span {
    font-size: 20px;
    padding: 5px;
  }
`;

const bounce = keyframes`
   from {
    transform: scale(110%);
  } to {
    transform: scale(100%);
  }
`;

const ScoreNum = styled.div`
  width: 80%;
  margin: 0 auto;
  @font-face {
    font-family: "SDSamliphopangche_Outline";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
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

const KittyGroup = styled.div`
  .Kittys {
    padding: 2.5em;
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
  } to {
    transform : translateX(-3em);
  }
`;

const Kitty = styled.img`
  width: 90px;
  margin-top: -23px;
  animation: ${rotateKitty} 0.8s;
`;

const ArrowWrap = styled.div`
  width: 100%;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
`;

const LeftArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 75%;
  right: 75%;
  img {
    width: 60px;
  }
  input {
    width: 60px;
  }
`;

const RightArrow = styled.div`
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
