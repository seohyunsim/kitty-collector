import React, { useEffect, useRef, useState } from "react";
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
  Sign,
} from "./styles";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import Modal from "../common/Modal";
import { Result } from "../Result/Result";
import Delayed from "../common/Delayed";

interface props {
  finalScore: number;
}

export const Main = ({ finalScore }: props) => {
  const randomKitty = [greyKitty, brownKitty];
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isIncrease, setIsIncrease] = useState<boolean>(false);
  const [kittys, setKittys] = useState<string[]>([
    greyKitty,
    greyKitty,
    brownKitty,
    greyKitty,
    brownKitty,
  ]);
  const ref = useRef<any>();

  const getRandomState = (array: string[]) => {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  };
  const pushNewState = getRandomState(randomKitty);

  const changeKittys = () => {
    const audio = new Audio("bgm/MP_Woosh.mp3");
    audio.play();

    kittys.splice(4, 1);
    kittys.unshift(pushNewState);
    setScore(score + 1);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const keyboard = e.key;
    const leftKey: string[] = ["ArrowLeft", "a", "A", "ㅁ"];
    const rightKey: string[] = ["ArrowRight", "l", "L", "ㅣ"];

    leftKey.forEach((el: string) => {
      if (keyboard === el) {
        greyKitty === kittys[4] ? changeKittys() : gameOver();
      }
    });
    rightKey.forEach((el: string) => {
      if (keyboard === el) {
        brownKitty === kittys[4] ? changeKittys() : gameOver();
      }
    });
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  const onArrowClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const kittyId = (e.target as HTMLImageElement).id;

    kittyId === kittys[4] ? changeKittys() : gameOver();
  };

  useEffect(() => {
    if (score === 0) setIsIncrease(false);
    else if (score % 10 === 0) setIsIncrease(!isIncrease);
    else if (score % 10 !== 0) setIsIncrease(false);
  }, [score]);

  const gameOver = () => {
    if (kittys[4] === greyKitty)
      kittys.splice(4, 1, "kittys/surpriseGreyKitty.png");
    if (kittys[4] === brownKitty)
      kittys.splice(4, 1, "kittys/surpriseBrownKitty.png");

    const audio = new Audio("bgm/MP_Jab.mp3");
    audio.play();

    setOpenModal(true);
    finalScore = score;
  };

  return (
    <Wrap ref={ref} tabIndex={-1} onKeyDown={onKeyDown}>
      {isOpenModal && (
        <Delayed waitBeforeShow={1000}>
          <Modal>
            <Result finalScore={score} />
          </Modal>
        </Delayed>
      )}
      <div className="title">
        <h2>kitty collector</h2>
      </div>
      <Sign>
        <p className="title">웹 사용자를 위한 Tip !</p>
        <span>
          마우스로 클릭 🖱 도 가능하지만,
          <br />
          키보드 사용도 가능해요
        </span>
        <br />
        <span>
          왼쪽 방향키 : <BsArrowLeftSquare />, A
          <br />
          오른쪽 방향키 : <BsArrowRightSquare />, L
        </span>
      </Sign>
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
          <input
            type="image"
            alt="leftArrow"
            onClick={onArrowClick}
            id={greyKitty}
            src={leftArrow}
          />
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
