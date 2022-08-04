import React, { useCallback, useEffect, useState } from "react";
import { clearTimeout } from "timers";
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

interface Props {
  arrowLocation?: string;
}

export const Main = ({ arrowLocation }: Props) => {
  const randomKitty = [greyKitty, brownKitty];
  const [clickArrowLocation, setClickArrowLocation] = useState<string>("");
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
        setClickArrowLocation("left");
        greyKitty === kittys[4] ? changeKittys() : console.log("다름~");
      } else if (keyboard === "ArrowRight") {
        setClickArrowLocation("right");
        brownKitty === kittys[4] ? changeKittys() : console.log("다름~");
      }
    }
  };

  const onArrowClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const kittyId = (e.target as HTMLImageElement).id;

    if (kittyId === greyKitty) setClickArrowLocation("left");
    if (kittyId === brownKitty) setClickArrowLocation("right");

    if (clickArrowLocation) {
      kittyId === kittys[4] ? changeKittys() : console.log("다름~");
      setClickArrowLocation("");
    }
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
            return (
              <Kitty arrowLocation={clickArrowLocation} key={idx} src={url} />
            );
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
