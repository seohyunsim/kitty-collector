import React, { useEffect, useState } from "react";
import { greyKitty, brownKitty, leftArrow, rightArrow } from "../common";
import {
  Wrap,
  Score,
  ScoreNum,
  KittyGroup,
  Kitty,
  ArrowWrap,
  LeftArrow,
  RightArrow,
} from "./styles";

export const Main = () => {
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

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
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
          <form onKeyDown={onKeyDown}>
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
          <form onKeyDown={onKeyDown}>
            <input
              type="image"
              alt="rightArrow"
              onClick={onArrowClick}
              id={brownKitty}
              src={rightArrow}
            />
          </form>
        </RightArrow>
      </ArrowWrap>
    </Wrap>
  );
};
